'use client';

import React, { useEffect, use } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { getChapterVerses } from '@/data/mockGitaChapters';
import { getChaptersForText } from '@/data/chapters';
import VerseCard from '@/components/reading/VerseCard';
import JaapCounter from '@/components/reading/JaapCounter';
import ReadingProgress from '@/components/reading/ReadingProgress';
import BackgroundManager from '@/components/reading/BackgroundManager';
import StickyFooterAd from '@/components/ads/StickyFooter';
import NativeAd from '@/components/ads/NativeAd';
import VerseNavigator from '@/components/reading/VerseNavigator';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function ReadingPage({ params }: { params: Promise<{ textSlug: string; chapterId: string }> }) {
    const { textSlug, chapterId } = use(params);
    const { setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerTopClass = isScrolled ? 'top-[72px]' : 'top-[88px]';

    // Load verses
    const verses = getChapterVerses(Number(chapterId));

    // Get Chapter Metadata
    const chapters = getChaptersForText(textSlug);
    const currentChapter = chapters.find(c => c.id === Number(chapterId));

    // Default Gradient if none specified
    const defaultGradient = 'from-amber-300 via-orange-500 to-red-500';
    const titleGradient = currentChapter?.colorGradient || defaultGradient;
    const displayTitle = currentChapter?.title || `Chapter ${chapterId}`;
    const displayTranslation = currentChapter?.translation || '';

    // Logic for next chapter limit (update to 3 or dynamic)
    const hasNextChapter = currentChapter ? (currentChapter.id < chapters.length) : (Number(chapterId) < 18);

    useEffect(() => {
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

    return (
        <main className="min-h-screen relative font-sans text-starlight-50 pb-32">
            <BackgroundManager />
            <ReadingProgress />
            <JaapCounter />
            <VerseNavigator verses={verses} />
            {/* <StickyFooterAd /> */}

            <header className={`fixed ${headerTopClass} w-full z-40 bg-cosmic-950/40 backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-b border-white/5 h-12 flex items-center px-4 md:px-8 transition-all duration-500 ease-in-out`}>
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

                    <Link href={`/read/${textSlug}`} className="hover:text-starlight-200 capitalize text-starlight-300">
                        {textSlug.replace(/-/g, ' ')}
                    </Link>

                    <ChevronRight size={12} className="opacity-40" />

                    <span className="text-gold-400 font-semibold drop-shadow-sm">Chapter {chapterId}</span>
                </nav>
            </header>

            {/* Main Content */}
            <div className="pt-36 px-4 max-w-4xl mx-auto">

                {/* Chapter Header */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className={`text-4xl md:text-6xl font-cinzel font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent drop-shadow-lg p-2 uppercase tracking-wide`}>
                        {displayTitle}
                    </h1>
                    {displayTranslation && (
                        <p className="text-lg text-starlight-200 font-serif italic">
                            {displayTranslation}
                        </p>
                    )}
                    <div className="h-0.5 w-24 bg-white/20 mx-auto rounded-full"></div>
                </div>

                {/* Verses List */}
                <div className="space-y-6">
                    {verses.map((verse, index) => (
                        <React.Fragment key={verse.id}>
                            <VerseCard verse={verse} />
                            {/* High Ad Density: Insert Native Ad after every 2 verses */}
                            {(index + 1) % 2 === 0 && <NativeAd />}
                        </React.Fragment>
                    ))}

                    {verses.length === 0 && (
                        <div className="text-center py-20 text-starlight-400">
                            Verses for this chapter are coming soon...
                        </div>
                    )}
                </div>

                {/* Next Chapter Navigation */}
                <div className="mt-16 text-center">
                    {hasNextChapter ? (
                        <Link
                            href={`/read/${textSlug}/${Number(chapterId) + 1}`}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-md"
                        >
                            <span className="text-lg font-serif">Read Chapter {Number(chapterId) + 1}</span>
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div className="text-starlight-400 italic">End of available chapters</div>
                    )}
                </div>

            </div>

        </main>
    );
}
