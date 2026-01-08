export interface AartiVerse {
    id: string;           // UUID format for DB compatibility
    aartiId: string;      // Foreign key reference
    type: 'doha' | 'chaupai' | 'sortha';
    sequence: number;     // Order in the aarti
    textHindi: string;    // Primary text in Devanagari
    transliteration: string;
    textEnglish?: string; // Verse translation/meaning in English
    meaningHindi?: string; // Meaning in simple Hindi
}

export interface Aarti {
    id: string;
    slug: string;
    title: string;
    titleHindi: string;
    description: string;
    imagePath: string;
    verseCount: string;
    verseCountHindi: string;
    deity: string;
    colorGradient: string;
}
