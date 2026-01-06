'use client';

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function JaapCounter() {
    const [count, setCount] = useState(0);
    const { accentColor } = useTheme();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 animate-in slide-in-from-bottom-10 fade-in duration-700">

            {/* Counter Bubble */}
            <div className="glass-panel p-1 rounded-full relative group">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-white/0 blur-md group-hover:blur-lg transition-all`}></div>

                <button
                    onClick={() => setCount(c => c + 1)}
                    className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center shadow-2xl active:scale-95 transition-transform"
                >
                    <span className={`text-2xl md:text-3xl font-bold font-serif ${accentColor}`}>
                        {count}
                    </span>
                    <span className="text-[10px] text-starlight-400 uppercase tracking-widest">
                        Japa
                    </span>
                </button>

                {/* Reset Button (Hidden by default, shown on hover of container) */}
                {count > 0 && (
                    <button
                        onClick={() => setCount(0)}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                        title="Reset Counter"
                    >
                        <RefreshCw size={10} />
                    </button>
                )}
            </div>

            <div className="text-[10px] text-starlight-500 font-sans tracking-wider opacity-60">
                Tap to Count
            </div>
        </div>
    );
}
