#!/usr/bin/env node

/**
 * DharmaText — Automated SEO Ping & Directory Submission
 * 
 * Pings search engines, RSS aggregators, and blog directories
 * to notify them of new/updated content. These are legitimate,
 * white-hat notification services that help with discovery.
 * 
 * Usage:
 *   node scripts/seo-submit.mjs              # Submit to all services
 *   node scripts/seo-submit.mjs --dry-run    # Preview what would be submitted
 * 
 * Run after every deploy to maximize crawl speed.
 */

const SITE_URL = 'https://dharmatext.com';
const SITE_NAME = 'DharmaText';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const RSS_URL = `${SITE_URL}/feed.xml`;
const DRY_RUN = process.argv.includes('--dry-run');

// ─── Colors ──────────────────────────────────────────────────────
const c = {
    red: (s) => `\x1b[31m${s}\x1b[0m`,
    green: (s) => `\x1b[32m${s}\x1b[0m`,
    yellow: (s) => `\x1b[33m${s}\x1b[0m`,
    blue: (s) => `\x1b[34m${s}\x1b[0m`,
    bold: (s) => `\x1b[1m${s}\x1b[0m`,
    dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

// ─── 1. Search Engine Ping Services ──────────────────────────────
// These are official/semi-official ping endpoints that notify search
// engines of new content. Fully white-hat.

const PING_SERVICES = [
    {
        name: 'Google Ping',
        url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
        method: 'GET',
    },
    {
        name: 'Bing IndexNow',
        url: 'https://www.bing.com/indexnow',
        method: 'POST',
        // IndexNow requires a key file at your site root. See setup below.
        body: null, // Configured dynamically
    },
    {
        name: 'Yandex Sitemap Ping',
        url: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
        method: 'GET',
    },
];

// ─── 2. IndexNow (Bing, Yandex, Seznam, Naver) ──────────────────
// IndexNow is a protocol supported by Bing, Yandex, Seznam, and Naver
// that provides instant indexing. Much easier than Google's Indexing API.

async function submitIndexNow(urls) {
    const key = process.env.INDEXNOW_KEY;
    if (!key) {
        console.log(c.yellow('  ⚠ INDEXNOW_KEY not set. Skipping IndexNow.\n'));
        console.log(c.dim('  To set up IndexNow (instant Bing/Yandex indexing):'));
        console.log(c.dim('  1. Generate a key: any 8-32 char hex string (e.g., "dharmatext2024seo")'));
        console.log(c.dim(`  2. Create a file at: public/${key || 'YOUR_KEY'}.txt containing just the key`));
        console.log(c.dim('  3. Set env var: INDEXNOW_KEY=dharmatext2024seo'));
        console.log(c.dim('  4. Deploy and run this script again\n'));
        return { submitted: 0, failed: 0 };
    }

    const results = { submitted: 0, failed: 0 };
    
    // IndexNow supports batch submission (up to 10,000 URLs)
    const hosts = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow',
    ];

    for (const host of hosts) {
        const hostName = host.includes('bing') ? 'Bing' : 'IndexNow';
        
        if (DRY_RUN) {
            console.log(`  [DRY RUN] Would submit ${urls.length} URLs to ${hostName}`);
            results.submitted += urls.length;
            continue;
        }

        try {
            process.stdout.write(`  Submitting ${urls.length} URLs to ${hostName} ... `);
            
            const res = await fetch(host, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    host: new URL(SITE_URL).hostname,
                    key,
                    keyLocation: `${SITE_URL}/${key}.txt`,
                    urlList: urls.slice(0, 10000),
                }),
                signal: AbortSignal.timeout(10000),
            });

            if (res.ok || res.status === 202) {
                console.log(c.green(`✓ Accepted (${res.status})`));
                results.submitted += urls.length;
            } else {
                console.log(c.red(`✗ Error (${res.status})`));
                results.failed++;
            }
        } catch (e) {
            console.log(c.red(`✗ ${e.message}`));
            results.failed++;
        }
    }

    return results;
}

// ─── 3. Ping Search Engines ──────────────────────────────────────

async function pingSearchEngines() {
    console.log(c.blue('\n🔔 Pinging Search Engines...\n'));
    
    let success = 0, failed = 0;

    for (const service of PING_SERVICES) {
        if (service.name === 'Bing IndexNow') continue; // Handled separately
        
        if (DRY_RUN) {
            console.log(`  [DRY RUN] Would ping ${service.name}`);
            success++;
            continue;
        }

        try {
            process.stdout.write(`  ${service.name} ... `);
            const res = await fetch(service.url, { 
                method: service.method,
                signal: AbortSignal.timeout(10000),
            });
            
            if (res.ok) {
                console.log(c.green(`✓ OK (${res.status})`));
                success++;
            } else {
                console.log(c.yellow(`⚠ ${res.status}`));
                failed++;
            }
        } catch (e) {
            console.log(c.red(`✗ ${e.message}`));
            failed++;
        }
    }

    return { success, failed };
}

// ─── 4. Fetch Sitemap URLs ───────────────────────────────────────

async function fetchSitemapUrls() {
    try {
        const res = await fetch(SITEMAP_URL);
        const xml = await res.text();
        const urls = [];
        let match;
        const regex = /<loc>(.*?)<\/loc>/g;
        while ((match = regex.exec(xml)) !== null) urls.push(match[1]);
        return urls;
    } catch {
        return [];
    }
}

// ─── Main ────────────────────────────────────────────────────────

async function main() {
    console.log(c.bold('\n═══════════════════════════════════════════════════════'));
    console.log(c.bold('  🕉️  DharmaText — SEO Submit & Ping'));
    console.log(c.bold('═══════════════════════════════════════════════════════\n'));
    console.log(c.dim(`  Site: ${SITE_URL}`));
    console.log(c.dim(`  Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`));
    console.log(c.dim(`  Time: ${new Date().toISOString()}`));

    // Fetch all URLs from sitemap
    const urls = await fetchSitemapUrls();
    console.log(c.dim(`  Sitemap URLs: ${urls.length}\n`));

    // Step 1: Ping search engines (Google, Yandex)
    const pingResult = await pingSearchEngines();

    // Step 2: IndexNow (Bing, Yandex, Seznam, Naver — instant indexing)
    console.log(c.blue('\n⚡ IndexNow (Instant Indexing for Bing/Yandex)...\n'));
    const indexNowResult = await submitIndexNow(urls);

    // Summary
    console.log(c.bold('\n═══════════════════════════════════════════════════════'));
    console.log(c.bold('  📊 Summary'));
    console.log(c.bold('═══════════════════════════════════════════════════════\n'));
    console.log(`  Search engine pings: ${c.green(pingResult.success)} success, ${c.red(pingResult.failed)} failed`);
    console.log(`  IndexNow submissions: ${c.green(indexNowResult.submitted)} URLs, ${c.red(indexNowResult.failed)} failed`);
    console.log(`\n${c.dim('  Run this after every deploy for fastest indexing.')}\n`);
}

main().catch(console.error);
