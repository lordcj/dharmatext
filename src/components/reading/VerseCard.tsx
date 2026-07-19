'use client';

import React, { useState } from 'react';
import { Share2, Heart } from 'lucide-react';
import { Verse } from '@/data/mockGitaChapters';
import { useTheme } from '@/context/ThemeContext';
import ShareModal from './ShareModal';

interface VerseCardProps {
    verse: Verse;
}

export default function VerseCard({ verse }: VerseCardProps) {
    const { accentColor } = useTheme();
    const [isShareOpen, setIsShareOpen] = useState(false);

    return (
        <>
            <div id={`verse-${verse.verseNumber}`} className="glass-card shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/5 rounded-xl p-6 md:p-8 mb-8 relative group transition-all duration-500">



                {/* Speaker Tag */}
                <div className="mb-4">
                    <span className="text-starlight-400 text-sm font-sans tracking-wide uppercase">
                        {verse.speaker} <span className="opacity-50 mx-2">•</span> Verse {verse.verseNumber}
                    </span>
                </div>

                {/* Sanskrit Shlok */}
                <div className="mb-6 text-center">
                    <p className="text-2xl md:text-3xl font-[family-name:var(--font-noto-devanagari)] font-medium leading-[2] text-starlight-50 drop-shadow-md tracking-wide">
                        {verse.sanskrit.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                {/* Transliteration */}
                <div className="mb-6 text-center border-b border-white/5 pb-6">
                    <p className="text-starlight-200 font-[family-name:var(--font-lora)] italic text-lg leading-relaxed tracking-wide">
                        {verse.transliteration.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                {/* Translations */}
                <div className="grid md:grid-cols-2 gap-6 text-starlight-100 mb-6">
                    <div>
                        <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 ${accentColor} opacity-80`}>Hindi</h4>
                        <p className="font-[family-name:var(--font-noto-devanagari)] text-lg leading-relaxed">
                            {verse.meaningHindi}
                        </p>
                    </div>
                    <div>
                        <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 ${accentColor} opacity-80`}>English</h4>
                        <p className="font-[family-name:var(--font-garamond)] text-base leading-relaxed text-starlight-200">
                            {verse.meaningEnglish}
                        </p>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-end pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        {/* Repetitions/Likes Placeholder */}
                        <button className="p-2 rounded-full hover:bg-white/5 text-starlight-400 hover:text-rose-400 transition-colors">
                            <Heart size={18} />
                        </button>

                        <button
                            onClick={() => setIsShareOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-starlight-200 hover:text-white"
                        >
                            <Share2 size={16} />
                            <span className="text-sm font-medium">Share Quote</span>
                        </button>
                    </div>
                </div>

            </div>

            <ShareModal
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
                verse={verse}
            />
        </>
    );
}
