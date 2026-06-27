import { MetadataRoute } from 'next';

/**
 * Robots.txt Configuration
 * 
 * - Allow all content pages
 * - Disallow /search (low-value for crawlers, wastes crawl budget)
 * - Point to sitemap
 */
export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dharmatext.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/search', '/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
