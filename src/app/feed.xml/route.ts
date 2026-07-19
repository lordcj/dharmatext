/**
 * RSS Feed Route
 * 
 * Auto-generates RSS feed from all content.
 * Enables syndication and Google News eligibility.
 */
import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo.config';

export async function GET() {
    const allItems = [
        ...aartis.map(a => ({
            title: `${a.title} - ${a.titleHindi}`,
            link: `${SITE_URL}/aartis/${a.slug}`,
            description: a.description,
            category: 'Aarti',
        })),
        ...kathas.map(k => ({
            title: `${k.title} - ${k.titleHindi}`,
            link: `${SITE_URL}/kathas/${k.slug}`,
            description: k.description,
            category: 'Katha',
        })),
    ];

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${allItems.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <category>${item.category}</category>
    </item>`).join('')}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
