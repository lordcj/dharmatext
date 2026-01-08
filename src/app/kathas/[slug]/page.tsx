'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { kathas } from '@/data/kathas';
import BackgroundManager from '@/components/reading/BackgroundManager';
import NativeAd from '@/components/ads/NativeAd';

export default function KathaReadingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [language, setLanguage] = useState<'en' | 'hi'>('hi');
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll to match navbar behavior
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const katha = kathas.find(k => k.slug === slug);

    if (!katha) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-slate-950">
                <p className="text-starlight-400">Katha not found.</p>
            </main>
        );
    }

    // Determine gradient based on Deity (Simple mapping)
    const getGradient = (deity: string) => {
        const d = deity.toLowerCase();
        if (d.includes('vishnu') || d.includes('satyanarayan') || d.includes('krishna')) return 'from-blue-500 to-purple-600';
        if (d.includes('shiva')) return 'from-indigo-400 to-blue-500';
        if (d.includes('durga') || d.includes('devi') || d.includes('parvati') || d.includes('gauri')) return 'from-red-500 to-orange-500';
        if (d.includes('lakshmi')) return 'from-yellow-500 to-amber-500';
        if (d.includes('hanuman')) return 'from-orange-500 to-red-500';
        if (d.includes('ganesh')) return 'from-orange-400 to-pink-500';
        if (d.includes('surya')) return 'from-amber-400 to-orange-500';
        if (d.includes('shani')) return 'from-slate-500 to-blue-600';
        return 'from-amber-500 to-orange-600';
    };

    const gradientClass = getGradient(katha.deity);

    return (
        <main className="min-h-screen relative font-sans text-starlight-50 pb-32 bg-slate-950">
            <BackgroundManager />

            {/* Breadcrumb Header - dynamic position based on navbar height */}
            <header className={`fixed w-full z-40 bg-slate-950/95 backdrop-blur-md border-b border-white/5 h-12 flex items-center px-4 md:px-8 transition-all duration-500 ${isScrolled ? 'top-[72px]' : 'top-[88px]'}`}>
                <nav className="flex items-center gap-3 text-sm text-starlight-400 font-medium tracking-wide flex-1">
                    <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 group">
                        <Home size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden md:inline">Home</span>
                    </Link>

                    <ChevronRight size={12} className="opacity-40" />

                    <Link href="/kathas" className="hover:text-amber-400 transition-colors">
                        Kathas
                    </Link>

                    <ChevronRight size={12} className="opacity-40" />

                    <span className="text-amber-400 font-semibold drop-shadow-sm truncate max-w-[150px] md:max-w-none">
                        {language === 'hi' ? katha.titleHindi : katha.title}
                    </span>
                </nav>

                {/* Language Toggle */}
                <div className="flex bg-amber-900/30 rounded-full p-1 border border-amber-500/30 backdrop-blur-md">
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${language === 'en' ? 'bg-amber-500 text-white shadow-lg' : 'text-amber-200 hover:text-white'}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLanguage('hi')}
                        className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${language === 'hi' ? 'bg-amber-500 text-white shadow-lg' : 'text-amber-200 hover:text-white'}`}
                    >
                        हिंदी
                    </button>
                </div>
            </header>

            {/* Main Content - account for navbar (88px) + breadcrumb (48px) */}
            <div className="pt-36 px-4 max-w-3xl mx-auto">

                {/* Title Header */}
                <div className="text-center mb-16 space-y-6">
                    {/* Hero Image */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10 group">
                        <Image
                            src={katha.imagePath}
                            alt={katha.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Divine Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}></div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-5xl font-display font-medium text-starlight-50 leading-tight">
                            {language === 'hi' ? katha.titleHindi : katha.title}
                        </h1>
                        {language === 'en' && (
                            <p className="text-xl font-[family-name:var(--font-sanskrit)] text-amber-200/80">
                                {katha.titleHindi}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-center gap-4 text-sm text-starlight-400 uppercase tracking-widest font-bold">
                        <span className="flex items-center gap-2">
                            <BookOpen size={14} className="text-amber-500" />
                            {katha.readTime}
                        </span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>{katha.deity}</span>
                    </div>

                    <p className="text-starlight-300 max-w-xl mx-auto leading-relaxed italic border-l-2 border-amber-500/30 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        {language === 'hi' ? (katha.descriptionHindi || katha.description) : katha.description}
                    </p>
                </div>

                {/* Chapters Content */}
                <div className="space-y-12">
                    {katha.chapters.map((chapter) => (
                        <div key={chapter.id} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

                            <div className="flex items-center gap-4">
                                <span className={`h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/50`}></span>
                                <h2 className="text-2xl md:text-3xl font-serif text-amber-100/90 text-center">
                                    {language === 'hi' ? (chapter.titleHindi || chapter.title) : chapter.title}
                                </h2>
                                <span className={`h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/50`}></span>
                            </div>

                            <div className="prose prose-lg prose-invert max-w-none">
                                {(language === 'hi' ? (chapter.contentHindi || chapter.content) : chapter.content).map((paragraph, pIndex) => (
                                    <p key={pIndex} className={`leading-relaxed md:leading-loose text-lg md:text-xl mb-6 ${language === 'hi' ? 'font-[family-name:var(--font-sanskrit)] text-starlight-100/95' : 'font-serif text-starlight-100/90'}`}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                    <NativeAd />
                </div>

                {/* Back to Kathas */}
                <div className="mt-20 text-center pb-20">
                    <Link
                        href="/kathas"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-md"
                    >
                        <span className="text-lg font-serif text-starlight-300 group-hover:text-white transition-colors">
                            {language === 'hi' ? '← और कथाएं पढ़ें' : '← Read More Stories'}
                        </span>
                    </Link>
                </div>

            </div>
        </main>
    );
}
