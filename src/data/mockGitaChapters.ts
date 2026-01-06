import { Verse } from './types';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';

// Re-export Verse for compatibility
export type { Verse };

// Temporary map for managing multiple chapters as they get added
const chapterMap: Record<number, Verse[]> = {
    1: chapter1,
    2: chapter2,
    3: chapter3,
};

export const getChapterVerses = (chapterId: number) => {
    return chapterMap[chapterId] || []; // Return empty array if chapter not found
};
