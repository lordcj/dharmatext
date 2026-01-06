'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);
    const { accentColor } = useTheme();

    // Map text color class to background color class for the bar
    // Simple mapping, or we could pass bg color in context.
    // Extracting color name from 'text-peacock-500' -> 'bg-peacock-500'
    const bgClass = accentColor.replace('text-', 'bg-');

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            if (Number(scroll) > 1) { // Overscroll check
                setProgress(100);
            } else {
                setProgress(Number(scroll) * 100);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-white/5">
            <div
                className={`h-full ${bgClass} transition-all duration-100 ease-out`}
                style={{ width: `${progress}%` }}
            >
                <div className={`absolute right-0 top-0 h-1 w-20 shadow-[0_0_10px_#fff] ${bgClass} blur-[2px]`}></div>
            </div>
        </div>
    );
}
