#!/usr/bin/env node

/**
 * DharmaText — Google Indexing API Pinger
 * 
 * Submits URLs to Google for fast indexing/re-indexing.
 * Uses the Google Indexing API (requires service account credentials).
 * 
 * Setup:
 * 1. Create a Google Cloud project at https://console.cloud.google.com
 * 2. Enable the "Indexing API"
 * 3. Create a Service Account with "Owner" role
 * 4. Download the JSON key file
 * 5. In Google Search Console, add the service account email as a verified owner
 * 6. Set env var: GOOGLE_SERVICE_ACCOUNT_KEY=/path/to/key.json
 * 
 * Usage:
 *   node scripts/ping-google.mjs                    # Ping all sitemap URLs
 *   node scripts/ping-google.mjs --url /kathas/somvar-vrat-katha  # Ping specific URL
 *   node scripts/ping-google.mjs --type URL_DELETED  # Notify of deletion
 *   node scripts/ping-google.mjs --dry-run           # Preview without submitting
 * 
 * Rate Limits:
 *   - 200 requests per day per project
 *   - Best to run daily for new/updated content
 */

import { readFileSync } from 'fs';
import { createSign } from 'crypto';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dharmatext.com';
const DRY_RUN = process.argv.includes('--dry-run');
const SPECIFIC_URL = process.argv.find(a => a.startsWith('--url='))?.split('=')[1];
const NOTIFICATION_TYPE = process.argv.find(a => a.startsWith('--type='))?.split('=')[1] || 'URL_UPDATED';

// ─── JWT Token Generation ────────────────────────────────────────

function createJWT(serviceAccountKey) {
    const now = Math.floor(Date.now() / 1000);
    const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({
        iss: serviceAccountKey.client_email,
        scope: 'https://www.googleapis.com/auth/indexing',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600,
    })).toString('base64url');

    const signInput = `${header}.${payload}`;
    const sign = createSign('RSA-SHA256');
    sign.update(signInput);
    const signature = sign.sign(serviceAccountKey.private_key, 'base64url');

    return `${signInput}.${signature}`;
}

async function getAccessToken(serviceAccountKey) {
    const jwt = createJWT(serviceAccountKey);
    
    const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });
    
    const data = await res.json();
    if (!data.access_token) {
        throw new Error(`Failed to get access token: ${JSON.stringify(data)}`);
    }
    return data.access_token;
}

// ─── Fetch sitemap URLs ──────────────────────────────────────────

async function fetchSitemapUrls() {
    const res = await fetch(`${BASE_URL}/sitemap.xml`);
    const xml = await res.text();
    const urls = [];
    let match;
    const regex = /<loc>(.*?)<\/loc>/g;
    while ((match = regex.exec(xml)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}

// ─── Submit URL to Indexing API ──────────────────────────────────

async function submitUrl(url, accessToken, type = 'URL_UPDATED') {
    const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ url, type }),
    });
    
    const data = await res.json();
    return { url, status: res.status, data };
}

// ─── Batch submit with rate limiting ─────────────────────────────

async function batchSubmit(urls, accessToken, type) {
    const results = { success: 0, failed: 0, errors: [] };
    
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const shortUrl = url.replace(BASE_URL, '') || '/';
        
        if (DRY_RUN) {
            console.log(`  [DRY RUN] Would submit: ${shortUrl}`);
            results.success++;
            continue;
        }
        
        try {
            process.stdout.write(`  [${i + 1}/${urls.length}] ${shortUrl} ... `);
            const result = await submitUrl(url, accessToken, type);
            
            if (result.status === 200) {
                console.log('\x1b[32m✓ Submitted\x1b[0m');
                results.success++;
            } else {
                console.log(`\x1b[31m✗ Error (${result.status})\x1b[0m`);
                results.failed++;
                results.errors.push({ url: shortUrl, error: result.data });
            }
            
            // Rate limit: 200ms between requests
            await new Promise(r => setTimeout(r, 200));
        } catch (e) {
            console.log(`\x1b[31m✗ ${e.message}\x1b[0m`);
            results.failed++;
            results.errors.push({ url: shortUrl, error: e.message });
        }
    }
    
    return results;
}

// ─── Main ────────────────────────────────────────────────────────

async function main() {
    console.log('\n\x1b[1m═══════════════════════════════════════════════════════\x1b[0m');
    console.log('\x1b[1m  🕉️  DharmaText — Google Indexing API Pinger\x1b[0m');
    console.log('\x1b[1m═══════════════════════════════════════════════════════\x1b[0m\n');

    // Check for service account key
    const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!keyPath && !DRY_RUN) {
        console.log('\x1b[33m  ⚠ GOOGLE_SERVICE_ACCOUNT_KEY environment variable not set.\x1b[0m\n');
        console.log('  To set up automated Google indexing:\n');
        console.log('  1. Go to https://console.cloud.google.com');
        console.log('  2. Create/select a project');
        console.log('  3. Enable the "Indexing API" (search for it in APIs & Services)');
        console.log('  4. Go to IAM & Admin → Service Accounts → Create');
        console.log('  5. Create a key (JSON format), download it');
        console.log('  6. In Google Search Console:');
        console.log('     - Go to Settings → Users and permissions');
        console.log('     - Add the service account email as Owner');
        console.log('  7. Set the environment variable:');
        console.log('     $env:GOOGLE_SERVICE_ACCOUNT_KEY = "C:\\path\\to\\key.json"\n');
        console.log('  Or use --dry-run to preview what would be submitted.\n');
        process.exit(1);
    }

    // Get URLs to submit
    let urls;
    if (SPECIFIC_URL) {
        const fullUrl = SPECIFIC_URL.startsWith('http') ? SPECIFIC_URL : `${BASE_URL}${SPECIFIC_URL}`;
        urls = [fullUrl];
        console.log(`  Submitting single URL: ${SPECIFIC_URL}`);
    } else {
        urls = await fetchSitemapUrls();
        console.log(`  Found ${urls.length} URLs in sitemap`);
    }
    
    console.log(`  Notification type: ${NOTIFICATION_TYPE}`);
    console.log(`  Mode: ${DRY_RUN ? 'DRY RUN (no actual submissions)' : 'LIVE'}\n`);

    // Get access token (skip for dry run without key)
    let accessToken = null;
    if (!DRY_RUN) {
        try {
            const keyContent = readFileSync(keyPath, 'utf-8');
            const serviceAccountKey = JSON.parse(keyContent);
            console.log(`  Service Account: ${serviceAccountKey.client_email}`);
            console.log('  Getting access token...');
            accessToken = await getAccessToken(serviceAccountKey);
            console.log('\x1b[32m  ✓ Authenticated successfully\x1b[0m\n');
        } catch (e) {
            console.log(`\x1b[31m  ✗ Authentication failed: ${e.message}\x1b[0m\n`);
            process.exit(1);
        }
    }

    // Submit URLs
    console.log('  Submitting URLs...\n');
    const results = await batchSubmit(urls, accessToken, NOTIFICATION_TYPE);

    // Summary
    console.log('\n\x1b[1m  Summary:\x1b[0m');
    console.log(`  ✓ Submitted: ${results.success}`);
    console.log(`  ✗ Failed: ${results.failed}`);
    
    if (results.errors.length > 0) {
        console.log('\n  Errors:');
        for (const err of results.errors) {
            console.log(`    ${err.url}: ${JSON.stringify(err.error)}`);
        }
    }

    console.log('\n\x1b[2m  Note: Google typically indexes submitted URLs within 24-48 hours.\x1b[0m');
    console.log('\x1b[2m  Daily limit: 200 URL notifications per project.\x1b[0m\n');
}

main().catch(console.error);
