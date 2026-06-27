'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, BookOpen } from 'lucide-react';
import { getDailyContent } from '@/lib/dailyRitual';

interface DailyContent {
    day: number;
    dayName: string;
    deity: string;
    slug: string;
    title: string;
}

export default function DailyRitualCard() {
    const [daily, setDaily] = useState<DailyContent | null>(null);

    useEffect(() => {
        setDaily(getDailyContent());
    }, []);

    // Skeleton/Loading state to prevent layout shift and avoid hydration mismatch
    if (!daily) {
        return (
            <div className="glass-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-purple-900/10 opacity-100"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full justify-between">
                    <div className="flex-1 space-y-4 w-full">
                        <div className="h-6 w-32 bg-white/5 rounded-full border border-white/10 mx-auto md:mx-0"></div>
                        <div className="h-10 w-2/3 bg-white/5 rounded-lg mx-auto md:mx-0"></div>
                        <div className="h-6 w-1/2 bg-white/5 rounded-lg mx-auto md:mx-0"></div>
                    </div>
                    <div className="h-14 w-40 bg-white/5 rounded-lg"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden group">
            {/* Sacred Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-purple-900/20 opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold-500/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-gold-400 text-[10px] font-bold uppercase tracking-widest border border-white/10">
                        <Sparkles size={12} /> Today • {daily.dayName}
                    </div>
                    <h2 className="text-3xl font-serif font-medium text-starlight-50">
                        Seek Blessings from <span className="text-gold-500">{daily.deity}</span>
                    </h2>
                    <p className="text-starlight-200 text-lg font-light leading-relaxed">
                        It is auspicious to read the <strong className="font-medium text-white">{daily.title}</strong> today.
                    </p>
                </div>
                <div>
                    <Link
                        href={`/aartis/${daily.slug}`}
                        className="inline-flex items-center gap-2 bg-gold-500 text-black px-8 py-4 rounded-lg font-medium hover:bg-gold-400 transition-all shadow-md hover:shadow-xl hover:shadow-gold-500/20 hover:-translate-y-0.5"
                    >
                        <BookOpen className="w-5 h-5" />
                        Start Reading
                    </Link>
                </div>
            </div>
        </div>
    );
}
