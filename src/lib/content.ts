import localData from '@/data/local-content.json';

export interface ContentTranslation {
    language_code: 'en' | 'hi' | 'sa';
    title: string;
    body_text: string;
    transliteration?: string | null;
}

export interface ContentEntity {
    slug: string;
    category: string;
    translations: ContentTranslation[];
}

export async function getContentBySlug(slug: string): Promise<ContentEntity | null> {
    // Simulate DB Fetch
    const content = localData.find((item) => item.slug === slug);

    if (!content) return null;

    return content as ContentEntity;
}

export async function getCategoryContent(category: string): Promise<ContentEntity[]> {
    return localData.filter(item => item.category === category) as ContentEntity[];
}
