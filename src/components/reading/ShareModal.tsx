'use client';

import React, { useState, useEffect } from 'react';
import { X, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Verse } from '@/data/mockGitaChapters';
import { useTheme } from '@/context/ThemeContext';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    verse: Verse;
}

export default function ShareModal({ isOpen, onClose, verse }: ShareModalProps) {
    const { accentColor } = useTheme();
    const [selectedLang, setSelectedLang] = useState<'original' | 'english' | 'hindi'>('original');

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const bgClass = accentColor.replace('text-', 'bg-');
    const borderClass = accentColor.replace('text-', 'border-');

    const getShareText = () => {
        let text = "";
        if (selectedLang === 'original') {
            text = `${verse.sanskrit}\n\n${verse.transliteration}`;
        } else if (selectedLang === 'hindi') {
            text = `${verse.sanskrit}\n\nअर्थ: ${verse.meaningHindi}`;
        } else {
            text = `${verse.sanskrit}\n\nMeaning: ${verse.meaningEnglish}`;
        }
        return encodeURIComponent(`${text}\n\nRead more at DharmaText.com`);
    };

    const shareText = getShareText();

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${shareText}`,
        twitter: `https://twitter.com/intent/tweet?text=${shareText}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=https://dharmatext.com&quote=${shareText}`, // FB quote is deprecated but still used by some
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-cosmic-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                    <h3 className="text-xl font-serif font-medium text-starlight-50 flex items-center gap-2">
                        <Share2 size={20} className={accentColor} />
                        Share Wisdom
                    </h3>
                    <button onClick={onClose} className="p-1 text-starlight-400 hover:text-white rounded-full hover:bg-white/10 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">

                    {/* Language Selection */}
                    <div className="space-y-3">
                        <label className="text-xs uppercase tracking-widest text-starlight-400 font-bold">Select Language</label>
                        <div className="grid grid-cols-3 gap-2">
                            {['original', 'hindi', 'english'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setSelectedLang(lang as any)}
                                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all capitalize border ${selectedLang === lang
                                        ? `${bgClass} text-white border-transparent`
                                        : 'bg-white/5 text-starlight-200 border-transparent hover:border-white/20'
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Preview Box */}
                    <div className="p-4 rounded-xl bg-black/30 border border-white/10 h-40 overflow-y-auto custom-scrollbar">
                        <p className="text-starlight-100 font-serif whitespace-pre-wrap leading-relaxed text-sm">
                            {decodeURIComponent(shareText)}
                        </p>
                    </div>

                    {/* Share Buttons */}
                    <div className="grid grid-cols-3 gap-4">
                        <a
                            href={shareLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
                        >
                            <MessageCircle size={24} />
                            <span className="text-xs font-bold">WhatsApp</span>
                        </a>

                        <a
                            href={shareLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors border border-[#1DA1F2]/20"
                        >
                            <Twitter size={24} />
                            <span className="text-xs font-bold">Twitter</span>
                        </a>

                        <a
                            href={shareLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors border border-[#1877F2]/20"
                        >
                            <Facebook size={24} />
                            <span className="text-xs font-bold">Facebook</span>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
}
