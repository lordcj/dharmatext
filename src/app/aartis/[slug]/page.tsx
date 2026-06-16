'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home } from 'lucide-react';
import { getAartiBySlug, getAartiVerses, AartiVerse } from '@/data/aartis';
import BackgroundManager from '@/components/reading/BackgroundManager';
import { useTheme } from '@/context/ThemeContext';
import NativeAd from '@/components/ads/NativeAd';

// Verse Card for Aarti - focused on reading experience
function AartiVerseCard({ verse }: { verse: AartiVerse }) {
    const [meaningMode, setMeaningMode] = useState<'none' | 'hi' | 'en'>('none');

    const isDoha = verse.type === 'doha';

    return (
        <div className={`bg-[#020617]/40 backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/5 rounded-xl p-6 md:p-8 transition-all duration-500 overflow-hidden relative group z-10 ${isDoha ? 'border-l-4 border-l-amber-500/50' : ''}`}>

            {/* Top Bar: Verse Info & Controls */}
            <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex flex-col gap-1">
                    <span className={`text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] uppercase ${isDoha ? 'text-amber-400' : 'text-orange-400/80'}`}>
                        {verse.type === 'doha'
                            ? 'दोहा • Doha'
                            : `चौपाई • Verse ${verse.aartiId === 'hanuman-chalisa' ? verse.sequence - 2 : verse.sequence}`}
                    </span>
                    <div className="h-0.5 w-8 bg-white/10 rounded-full"></div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Meaning Toggle - Per Verse */}
                    <div className="flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
                        <button
                            onClick={() => setMeaningMode('none')}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${meaningMode === 'none' ? 'bg-white/10 text-white' : 'text-starlight-400 hover:text-starlight-200'}`}
                        >
                            Hide
                        </button>
                        <button
                            onClick={() => setMeaningMode('hi')}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${meaningMode === 'hi' ? 'bg-orange-500/20 text-orange-300' : 'text-starlight-400 hover:text-starlight-200'}`}
                        >
                            HI
                        </button>
                        <button
                            onClick={() => setMeaningMode('en')}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${meaningMode === 'en' ? 'bg-orange-500/20 text-orange-300' : 'text-starlight-400 hover:text-starlight-200'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col gap-6">
                {/* Hindi Text - Primary */}
                <div className="text-center">
                    <p className="text-2xl md:text-3xl font-[family-name:var(--font-sanskrit)] font-normal leading-[1.8] text-starlight-50 tracking-wide drop-shadow-sm">
                        {verse.textHindi.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < verse.textHindi.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                {/* Transliteration */}
                <div className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-starlight-300 font-[family-name:var(--font-lora)] italic text-sm md:text-base leading-relaxed tracking-wider">
                        {verse.transliteration.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < verse.transliteration.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                {/* Expansible Meaning Section */}
                {meaningMode !== 'none' && (
                    <div className="mt-2 text-center animate-fadeIn border-t border-white/5 pt-6">
                        {meaningMode === 'en' && verse.textEnglish && (
                            <p className="font-[family-name:var(--font-garamond)] text-base md:text-lg leading-relaxed text-starlight-200 selection:bg-orange-500/30 italic">
                                &quot;{verse.textEnglish}&quot;
                            </p>
                        )}
                        {meaningMode === 'hi' && (
                            <p className="font-[family-name:var(--font-sanskrit)] text-lg md:text-xl leading-relaxed text-orange-200/90 selection:bg-orange-500/30">
                                {verse.meaningHindi || "Hindi meaning coming soon..."}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Subtle background decoration */}
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none ${isDoha ? 'text-amber-500' : 'text-orange-500'}`}>
                <div className="font-serif text-8xl font-bold select-none">ॐ</div>
            </div>
        </div>
    );
}

export default function AartiReadingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        // Force refresh: Om Jai Jagdish updated to 9 verses
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        if (slug.includes('hanuman')) {
            setTheme('hanuman');
        } else if (slug.includes('jagdish')) {
            setTheme('trimurti');
        } else {
            setTheme('default');
        }
    }, [slug, setTheme]);

    const headerTopClass = isScrolled ? 'top-[72px]' : 'top-[88px]';

    const aarti = getAartiBySlug(slug);
    const verses = aarti ? getAartiVerses(aarti.id) : [];

    if (!aarti) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-starlight-400">Aarti not found.</p>
            </main>
        );
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        name: aarti.title,
        headline: `${aarti.title} - ${aarti.titleHindi}`,
        description: aarti.description,
        image: `https://willowy-jelly-0cfbcb.netlify.app${aarti.imagePath}`,
        author: {
            '@type': 'Organization',
            name: 'DharmaText',
            url: 'https://willowy-jelly-0cfbcb.netlify.app'
        },
        publisher: {
            '@type': 'Organization',
            name: 'DharmaText',
            logo: {
                '@type': 'ImageObject',
                url: 'https://willowy-jelly-0cfbcb.netlify.app/icon.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://willowy-jelly-0cfbcb.netlify.app/aartis/${slug}`
        }
    };

    return (
        <main className="min-h-screen relative font-sans text-starlight-50 pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BackgroundManager />

            {/* Breadcrumb Header */}
            <header className={`fixed ${headerTopClass} w-full z-40 bg-cosmic-950/40 backdrop-blur-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-b border-white/5 h-12 flex items-center px-4 md:px-8 transition-all duration-500 ease-in-out`}>
                <nav className="flex items-center gap-3 text-sm text-starlight-400 font-medium tracking-wide flex-1">
                    <Link href="/" className="hover:text-gold-400 transition-colors flex items-center gap-1 group">
                        <Home size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden md:inline">Home</span>
                    </Link>

                    <ChevronRight size={12} className="opacity-40" />

                    <Link href="/aartis" className="hover:text-gold-400 transition-colors">
                        Aartis
                    </Link>

                    <ChevronRight size={12} className="opacity-40" />

                    <span className="text-gold-400 font-semibold drop-shadow-sm">{aarti.title}</span>
                </nav>
            </header>

            {/* Main Content */}
            <div className="pt-36 px-4 max-w-4xl mx-auto">

                {/* Title Header */}
                <div className="text-center mb-12 space-y-6">
                    {/* Hero Image */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-md shadow-2xl">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5">
                            <Image
                                src={aarti.imagePath}
                                alt={aarti.title}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        {/* Divine Glow behind image */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${aarti.colorGradient} opacity-20 blur-3xl -z-10 animate-pulse`}></div>
                    </div>

                    <div className="space-y-2">
                        <h1 className={`text-4xl md:text-6xl font-cinzel font-bold bg-gradient-to-r ${aarti.colorGradient} bg-clip-text text-transparent drop-shadow-lg p-2 uppercase tracking-wide`}>
                            {aarti.title}
                        </h1>
                        <p className="text-2xl font-[family-name:var(--font-sanskrit)] text-orange-200/80">
                            {aarti.titleHindi}
                        </p>
                    </div>

                    <p className="text-starlight-400 max-w-xl mx-auto leading-relaxed text-lg">
                        {aarti.description}
                    </p>
                    <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto rounded-full"></div>
                </div>

                {/* Verses List */}
                <div className="space-y-4">
                    {verses.map((verse, index) => (
                        <React.Fragment key={verse.id}>
                            <AartiVerseCard verse={verse} />
                            {/* Insert Native Ad after every 3 verses */}
                            {(index + 1) % 3 === 0 && <NativeAd />}
                        </React.Fragment>
                    ))}

                    {verses.length === 0 && (
                        <div className="text-center py-20 text-starlight-400">
                            Verses for this aarti are coming soon...
                        </div>
                    )}
                </div>

                {/* Back to Aartis */}
                <div className="mt-16 text-center">
                    <Link
                        href="/aartis"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-md"
                    >
                        <span className="text-lg font-serif">← Back to Aartis</span>
                    </Link>
                </div>

            </div>
        </main>
    );
}
