import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';
import { getChaptersForText } from '@/data/chapters';

export interface SearchResult {
    id: string;
    type: 'Aarti' | 'Scripture' | 'Mantra' | 'Katha';
    title: string;
    subTitle?: string;
    excerpt: string;
    link: string;
    matchType: 'Title' | 'Description' | 'Content';
}

// Search Options Interface
interface SearchOptions {
    fields?: ('title' | 'meaning' | 'deity')[]; // Which fields to search?
}

/**
 * Global Search Service
 * 
 * STRATEGY FOR "ZERO DB HITS":
 * For a library of this size (even 10,000 items), the most efficient approach is a 
 * **Client-Side Search Index**.
 * 
 * 1. The server builds a lightweight JSON file (`search-index.json`) containing only:
 *    { id, title, slug, deity, tags } - No heavy content/verses.
 * 2. This JSON (~50KB) is loaded once by the browser.
 * 3. All searching happens locally in the user's browser memory.
 * 4. Result: Instant search, 0 Database queries per keystroke.
 */
export const searchContent = async (query: string, options: SearchOptions = { fields: ['title', 'deity', 'meaning'] }): Promise<SearchResult[]> => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase().trim();
    const found: SearchResult[] = [];

    const searchInTitle = options.fields?.includes('title');
    const searchInDeity = options.fields?.includes('deity');
    const searchInMeaning = options.fields?.includes('meaning');

    // 1. Search Aartis
    aartis.forEach(aarti => {
        const titleMatch = searchInTitle && (
            aarti.title.toLowerCase().includes(lowerQuery) ||
            aarti.titleHindi?.toLowerCase().includes(lowerQuery)
        );

        const deityMatch = searchInDeity && aarti.deity.toLowerCase().includes(lowerQuery);

        // Only include description/meaning if specific flag is on (default true here, but can be turned off)
        const descMatch = searchInMeaning && aarti.description.toLowerCase().includes(lowerQuery);

        if (titleMatch || deityMatch || descMatch) {
            found.push({
                id: aarti.id,
                type: aarti.verseCount === '1' ? 'Mantra' : 'Aarti',
                title: aarti.title,
                subTitle: aarti.titleHindi,
                excerpt: aarti.description,
                link: `/aartis/${aarti.slug}`,
                matchType: (titleMatch) ? 'Title' : 'Description'
            });
        }
    });

    // 2. Search Kathas
    kathas.forEach(katha => {
        const titleMatch = searchInTitle && (
            katha.title.toLowerCase().includes(lowerQuery) ||
            katha.titleHindi?.toLowerCase().includes(lowerQuery)
        );

        const deityMatch = searchInDeity && katha.deity.toLowerCase().includes(lowerQuery);
        const descMatch = searchInMeaning && katha.description.toLowerCase().includes(lowerQuery);

        if (titleMatch || deityMatch || descMatch) {
            found.push({
                id: katha.id,
                type: 'Katha',
                title: katha.title,
                subTitle: katha.titleHindi,
                excerpt: katha.description,
                link: `/kathas/${katha.slug}`,
                matchType: titleMatch ? 'Title' : 'Description'
            });
        }
    });

    // 3. Search Scriptures (Gita Chapters)
    const gitaChapters = getChaptersForText('bhagavad-gita');
    gitaChapters.forEach(chapter => {
        const titleMatch = searchInTitle && (
            chapter.title.toLowerCase().includes(lowerQuery) ||
            chapter.translation.toLowerCase().includes(lowerQuery)
        );

        const descMatch = searchInMeaning && chapter.desc.toLowerCase().includes(lowerQuery);

        if (titleMatch || descMatch) {
            found.push({
                id: `gita-${chapter.id}`,
                type: 'Scripture',
                title: `Chapter ${chapter.id}: ${chapter.title}`,
                subTitle: chapter.translation,
                excerpt: chapter.desc,
                link: `/read/bhagavad-gita/${chapter.id}`,
                matchType: titleMatch ? 'Title' : 'Description'
            });
        }
    });

    return found;
};

