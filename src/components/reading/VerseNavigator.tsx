'use client';

import React, { useState } from 'react';
import { List, X, Hash } from 'lucide-react';
import { Verse } from '@/data/types';
import { useTheme } from '@/context/ThemeContext';

interface VerseNavigatorProps {
    verses: Verse[];
}

export default function VerseNavigator({ verses }: VerseNavigatorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { accentColor } = useTheme();

    const handleJump = (verseNumber: number) => {
        setIsOpen(false);
        const element = document.getElementById(`verse-${verseNumber}`);
        if (element) {
            // Offset for fixed header (approx 150px)
            const headerOffset = 180;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (verses.length === 0) return null;

    return (
        <>
            {/* FAB Trigger - Fixed Bottom Left */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 left-8 z-50 flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl bg-cosmic-900 border border-white/10 text-gold-400 hover:scale-105 active:scale-95 transition-all duration-300 group backdrop-blur-md ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                aria-label="Open Verse Navigator"
            >
                <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-md group-hover:bg-gold-500/20 transition-all"></div>
                <List size={20} strokeWidth={2.5} />
                <span className="font-serif font-medium tracking-wide text-sm uppercase">Verses</span>
            </button>

            {/* Modal Overlay */}
            <div className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>

                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-cosmic-950/80 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Modal Content */}
                <div className={`relative w-full max-w-lg bg-[#0f172a]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>

                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-2 text-starlight-50">
                            <Hash size={20} className="text-gold-400" />
                            <h3 className="text-xl font-serif font-medium">Jump to Shlok</h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-full text-starlight-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
                            {verses.map((verse) => (
                                <button
                                    key={verse.id}
                                    onClick={() => handleJump(verse.verseNumber)}
                                    className={`aspect-square flex items-center justify-center rounded-lg font-sans font-medium text-lg transition-all duration-200 border border-white/5 hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400 text-starlight-300 bg-white/5`}
                                >
                                    {verse.verseNumber}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer Hint */}
                    <div className="p-4 bg-black/20 text-center text-xs text-starlight-400 font-medium tracking-wide uppercase">
                        Select a number to navigate
                    </div>

                </div>
            </div>
        </>
    );
}
