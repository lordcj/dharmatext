

export interface ChapterSummary {
    id: number;
    title: string;
    translation: string; // The English translation of the title
    desc: string; // Short summary
    verses: number;
    colorGradient?: string; // Tailwind gradient classes
}

// Mock Database of Chapters
const GITA_CHAPTERS: ChapterSummary[] = [
    {
        id: 1,
        title: 'Arjuna Vishada Yoga',
        translation: 'Observing the Armies',
        desc: 'Arjuna’s despair upon seeing his kinsmen on the battlefield.',
        verses: 47,
        colorGradient: 'from-indigo-300 via-purple-400 to-pink-400' // Despair/Confusion (Dusky)
    },
    {
        id: 2,
        title: 'Sankhya Yoga',
        translation: 'Contents of the Gita Summarized',
        desc: 'Krishna begins his instruction by explaining the difference between the body and the soul.',
        verses: 72,
        colorGradient: 'from-amber-200 via-yellow-400 to-orange-500' // Wisdom/Light (Golden)
    },
    {
        id: 3,
        title: 'Karma Yoga',
        translation: 'The Yoga of Action',
        desc: 'The path of selfless action (Karma Yoga) without attachment to results.',
        verses: 43,
        colorGradient: 'from-orange-400 via-red-500 to-rose-500' // Action/Fire (Vibrant)
    },
    { id: 4, title: 'Jnana Karma Sanyasa Yoga', translation: 'Transcendental Knowledge', desc: 'The spiritual knowledge of the soul, God, and the relationship between them.', verses: 42 },
    { id: 5, title: 'Karma Sanyasa Yoga', translation: 'Karma Yoga - Action in Krishna Consciousness', desc: 'Renunciation of action vs. working in devotion.', verses: 29 },
    { id: 6, title: 'Dhyana Yoga', translation: 'Sankhya-yoga', desc: 'The process of meditation and controlling the mind.', verses: 47 },
    { id: 7, title: 'Jnana Vijnana Yoga', translation: 'Knowledge of the Absolute', desc: 'Knowledge of the Supreme Truth and His energies.', verses: 30 },
    { id: 8, title: 'Akshara Brahma Yoga', translation: 'Attaining the Supreme', desc: 'Remembrance of God at the time of death.', verses: 28 },
    { id: 9, title: 'Raja Vidya Raja Guhya Yoga', translation: 'The Most Confidential Knowledge', desc: 'The supreme secret of pure devotional service.', verses: 34 },
    { id: 10, title: 'Vibhuti Yoga', translation: 'The Opulence of the Absolute', desc: 'Krishna describes His divine manifestations.', verses: 42 },
    { id: 11, title: 'Vishwarupa Darshana Yoga', translation: 'The Universal Form', desc: 'Arjuna sees the cosmic form of Krishna.', verses: 55 },
    { id: 12, title: 'Bhakti Yoga', translation: 'Devotional Service', desc: 'The path of personal devotion to God.', verses: 20 },
    { id: 13, title: 'Kshetra Kshetrajna Vibhaga Yoga', translation: 'Nature, the Enjoyer, and Consciousness', desc: 'Distinction between the material body (field) and the knower.', verses: 35 },
    { id: 14, title: 'Gunatraya Vibhaga Yoga', translation: 'The Three Modes of Material Nature', desc: 'How goodness, passion, and ignorance bind the soul.', verses: 27 },
    { id: 15, title: 'Purushottama Yoga', translation: 'The Yoga of the Supreme Person', desc: 'The eternal tree of life and the Supreme Person.', verses: 20 },
    { id: 16, title: 'Daivasura Sampad Vibhaga Yoga', translation: 'The Divine and Demoniac Natures', desc: 'Divine vs. demoniac qualities.', verses: 24 },
    { id: 17, title: 'Shraddhatraya Vibhaga Yoga', translation: 'The Divisions of Faith', desc: 'Faith in the three modes of material nature.', verses: 28 },
    { id: 18, title: 'Moksha Sanyasa Yoga', translation: 'Conclusion - The Perfection of Renunciation', desc: 'Summary of the entire Gita and the path of surrender.', verses: 78 },
];

// Simulating a DB call (Async in the future)
export const getChaptersForText = (slug: string): ChapterSummary[] => {
    // In a real DB, we would query by slug.
    if (slug.includes('bhagavad-gita') || slug.includes('gita')) {
        return GITA_CHAPTERS;
    }

    // Fallback or empty for other texts for now
    if (slug.includes('shiva')) return [];

    return [];
};
