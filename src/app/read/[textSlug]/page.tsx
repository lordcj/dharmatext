'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen, Home } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import BackgroundManager from '@/components/reading/BackgroundManager';
import { getChaptersForText } from '@/data/chapters';

export default function ChapterIndexPage({ params }: { params: Promise<{ textSlug: string }> }) {
    const { textSlug } = use(params);
    const { setTheme } = useTheme();

    // Data Fetching
    // In a real Server Component, this would be async. 
    // Since this is a Client Component (due to Theme/Hooks), we fetch synchronously for now or via useEffect if it was an API.
    // Our mock service is sync.
    const chapters = getChaptersForText(textSlug);

    // Set theme on mount just in case
    React.useEffect(() => {
        if (textSlug.includes('krishna') || textSlug.includes('gita')) {
            setTheme('krishna');
        } else if (textSlug.includes('shiva')) {
            setTheme('shiva');
        } else if (textSlug.includes('devi')) {
            setTheme('devi');
        } else {
            setTheme('default');
        }
    }, [textSlug, setTheme]);

    // Scroll detection to sync with Global Navbar
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerTopClass = isScrolled ? 'top-[72px]' : 'top-[88px]';

    // Title Mapping for nicer display
    const titleMap: Record<string, string> = {
        'bhagavad-gita': 'Srimad Bhagavad Gita',
        'shiva-purana': 'Shiva Maha Purana',
        'devi-mahatmya': 'Devi Mahatmya (Durga Saptashati)',
    };

    const displayTitle = titleMap[textSlug] || textSlug.replace(/-/g, ' ');

    return (
        <main className="min-h-screen relative font-sans p-6 pt-36 pb-24">
            <BackgroundManager />

            {/* Header / Breadcrumbs - Positioned below global Navbar (Syncs with Navbar transition) */}
            <header className={`fixed ${headerTopClass} left-0 w-full z-40 bg-cosmic-950/30 backdrop-blur-md border-b border-white/5 h-12 flex items-center px-4 md:px-8 transition-all duration-500 ease-in-out`}>
                <nav className="flex items-center gap-3 text-sm text-starlight-400 font-medium tracking-wide">
                    <Link href="/" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                        <Home size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden md:inline">Home</span>
                    </Link>

                    <ChevronRight size={12} className="opacity-40" />

                    <Link href="/scriptures" className="hover:text-gold-400 transition-colors hidden md:inline">
                        Scriptures
                    </Link>
                    <span className="hidden md:inline opacity-40"><ChevronRight size={12} /></span>

                    <span className="text-gold-400 font-semibold drop-shadow-sm capitalize">{displayTitle}</span>
                </nav>
            </header>

            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16 relative">
                    {/* Decorative Blur behind title */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-gold-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <span className="text-gold-500/80 font-serif italic text-lg mb-2 block tracking-widest uppercase text-xs">Sacred Text</span>

                    <h1 className="text-5xl md:text-7xl font-display font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm mb-6 capitalize leading-tight pb-2">
                        {displayTitle}
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-6 opacity-60">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/50"></div>
                        <BookOpen size={16} className="text-gold-400" />
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/50"></div>
                    </div>

                    <p className="text-lg text-starlight-300 max-w-2xl mx-auto leading-relaxed font-serif">
                        Select a chapter to begin your spiritual journey into the timeless wisdom of the {displayTitle}.
                    </p>
                </header>

                <div className="grid gap-4">
                    {chapters.length > 0 ? (
                        chapters.map((chapter) => (
                            <Link
                                key={chapter.id}
                                href={`/read/${textSlug}/${chapter.id}`}
                                className="group flex items-center justify-between p-6 rounded-xl bg-[#020617]/40 backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 border border-white/5 hover:border-gold-500/30"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-starlight-400 group-hover:text-gold-400 group-hover:scale-110 transition-all">
                                        <span className="font-serif font-bold text-xl">{chapter.id}</span>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-serif font-medium text-starlight-50 group-hover:text-gold-400 transition-colors">
                                            {chapter.title}
                                        </h3>
                                        <p className="text-sm text-starlight-400 mt-1">
                                            {chapter.translation} • {chapter.desc}
                                        </p>
                                        <p className="text-xs text-starlight-500 mt-1 uppercase tracking-wider">
                                            {chapter.verses} Verses
                                        </p>
                                    </div>
                                </div>

                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-starlight-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
                                    <ChevronRight size={18} />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center p-8 bg-[#020617]/40 backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/5 rounded-xl text-starlight-400">
                            <p>Chapters coming soon for {displayTitle}...</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
