import { MetadataRoute } from 'next';
import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';
import { getChaptersForText } from '@/data/chapters';
import { DEITY_HUBS } from '@/lib/seoContent';

/**
 * Sitemap Generation
 * 
 * Comprehensive sitemap with proper priority, lastModified,
 * and all content types including deity hub pages.
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dharmatext.com';
    const lastBuild = new Date();

    // 1. Static Pages (highest priority)
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: lastBuild,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/aartis`,
            lastModified: lastBuild,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kathas`,
            lastModified: lastBuild,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/scriptures`,
            lastModified: lastBuild,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/deities`,
            lastModified: lastBuild,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // 2. Dynamic Aartis (high priority - main content)
    const aartiPages: MetadataRoute.Sitemap = aartis.map(aarti => ({
        url: `${baseUrl}/aartis/${aarti.slug}`,
        lastModified: lastBuild,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 3. Dynamic Kathas (high priority - main content)
    const kathaPages: MetadataRoute.Sitemap = kathas.map(katha => ({
        url: `${baseUrl}/kathas/${katha.slug}`,
        lastModified: lastBuild,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 4. Deity Hub Pages (high priority - topical authority)
    const deityPages: MetadataRoute.Sitemap = DEITY_HUBS.map(deity => ({
        url: `${baseUrl}/deities/${deity.slug}`,
        lastModified: lastBuild,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 5. Scripture Index Pages
    const scriptureTexts = ['bhagavad-gita', 'shiva-purana', 'devi-mahatmya'];
    const scriptureIndexPages: MetadataRoute.Sitemap = scriptureTexts.map(slug => ({
        url: `${baseUrl}/read/${slug}`,
        lastModified: lastBuild,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // 6. Dynamic Scripture Chapter Pages
    const chapterPages: MetadataRoute.Sitemap = [];
    for (const textSlug of scriptureTexts) {
        const chapters = getChaptersForText(textSlug);
        for (const chapter of chapters) {
            chapterPages.push({
                url: `${baseUrl}/read/${textSlug}/${chapter.id}`,
                lastModified: lastBuild,
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            });
        }
    }

    return [
        ...staticPages,
        ...aartiPages,
        ...kathaPages,
        ...deityPages,
        ...scriptureIndexPages,
        ...chapterPages,
    ];
}
