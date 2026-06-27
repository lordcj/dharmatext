import { MetadataRoute } from 'next';
import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';
import { getChaptersForText } from '@/data/chapters';

/**
 * Sitemap Generation
 * 
 * For 100K+ pages, Next.js supports generateSitemaps() to split
 * into multiple sub-sitemaps automatically. For now, we generate
 * a single comprehensive sitemap with proper priority and lastModified.
 * 
 * When page count exceeds 50,000, switch to:
 *   export async function generateSitemaps() { ... }
 *   export default async function sitemap({ id }: { id: number }) { ... }
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dharmatext.com';

    // 1. Static Pages (highest priority)
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/aartis`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kathas`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/scriptures`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // 2. Dynamic Aartis (high priority - main content)
    const aartiPages: MetadataRoute.Sitemap = aartis.map(aarti => ({
        url: `${baseUrl}/aartis/${aarti.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 3. Dynamic Kathas (high priority - main content)
    const kathaPages: MetadataRoute.Sitemap = kathas.map(katha => ({
        url: `${baseUrl}/kathas/${katha.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 4. Scripture Index Pages
    const scriptureTexts = ['bhagavad-gita', 'shiva-purana', 'devi-mahatmya'];
    const scriptureIndexPages: MetadataRoute.Sitemap = scriptureTexts.map(slug => ({
        url: `${baseUrl}/read/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 5. Dynamic Scripture Chapter Pages
    const chapterPages: MetadataRoute.Sitemap = [];
    for (const textSlug of scriptureTexts) {
        const chapters = getChaptersForText(textSlug);
        for (const chapter of chapters) {
            chapterPages.push({
                url: `${baseUrl}/read/${textSlug}/${chapter.id}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            });
        }
    }

    return [
        ...staticPages,
        ...aartiPages,
        ...kathaPages,
        ...scriptureIndexPages,
        ...chapterPages,
    ];
}
