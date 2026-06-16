import { MetadataRoute } from 'next';
import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';
import { getChaptersForText } from '@/data/chapters';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://willowy-jelly-0cfbcb.netlify.app';

    // 1. Static Pages
    const staticPages = [
        '',
        '/aartis',
        '/kathas',
        '/scriptures',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Dynamic Aartis
    const aartiPages = aartis.map(aarti => ({
        url: `${baseUrl}/aartis/${aarti.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 3. Dynamic Kathas
    const kathaPages = kathas.map(katha => ({
        url: `${baseUrl}/kathas/${katha.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 4. Dynamic Gita Chapters
    const gitaChapters = getChaptersForText('bhagavad-gita');
    const scripturePages = [
        {
            url: `${baseUrl}/read/bhagavad-gita`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        ...gitaChapters.map(chapter => ({
            url: `${baseUrl}/read/bhagavad-gita/${chapter.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    ];

    return [
        ...staticPages,
        ...aartiPages,
        ...kathaPages,
        ...scripturePages,
    ];
}
