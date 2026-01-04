'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Type, Maximize, Minimize, Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface Translation {
  language_code: 'en' | 'hi' | 'sa';
  title: string;
  body_text: string; // Markdown content
  transliteration?: string | null;
}

interface TextReaderProps {
  translations: Translation[];
  initialLanguage?: 'en' | 'hi' | 'sa';
}

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function TextReader({ translations, initialLanguage = 'hi' }: TextReaderProps) {
  const [currentLang, setCurrentLang] = useState<'en' | 'hi' | 'sa'>(initialLanguage);
  const [fontSize, setFontSize] = useState<number>(3); // 1 to 5 scale
  const [isFocusMode, setIsFocusMode] = useState(false);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  // Load preferences
  useEffect(() => {
    const savedSize = localStorage.getItem('dharma-font-size');
    if (savedSize) setFontSize(parseInt(savedSize, 10));

    // Wake Lock
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLockRef.current = await navigator.wakeLock.request('screen');
        }
      } catch (err) {
        console.error('Wake Lock failed:', err);
      }
    };

    if (isFocusMode) {
      requestWakeLock();
    } else {
      wakeLockRef.current?.release();
      wakeLockRef.current = null;
    }

    return () => {
      wakeLockRef.current?.release();
    };
  }, [isFocusMode]);

  const handleFontSizeChange = (delta: number) => {
    const newSize = Math.min(Math.max(fontSize + delta, 1), 5);
    setFontSize(newSize);
    localStorage.setItem('dharma-font-size', newSize.toString());
  };

  const currentContent = translations.find(t => t.language_code === currentLang) || translations[0];

  // Map 1-5 to Tailwind text classes
  const sizeClasses = {
    1: 'text-base',
    2: 'text-lg',
    3: 'text-xl', // Default
    4: 'text-2xl',
    5: 'text-3xl',
  };

  return (
    <div className={cn("relative min-h-screen transition-colors duration-300", isFocusMode ? "bg-amber-50 dark:bg-slate-900" : "")}>
      {/* Controls Bar */}
      <div className={cn(
        "sticky top-0 z-50 flex items-center justify-between p-4 backdrop-blur-md border-b transition-all",
        isFocusMode ? "opacity-0 hover:opacity-100 bg-transparent border-transparent" : "bg-white/80 dark:bg-slate-800/80 border-amber-200 dark:border-slate-700"
      )}>
        <div className="flex gap-2">
          {/* Language Toggle */}
          <div className="flex bg-amber-100 dark:bg-slate-700 rounded-full p-1">
            {(['sa', 'hi', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium transition-all",
                  currentLang === lang
                    ? "bg-amber-600 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:bg-amber-200 dark:hover:bg-slate-600"
                )}
              >
                {lang === 'sa' ? 'संस्कृत' : lang === 'hi' ? 'हिंदी' : 'Eng'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {/* Font Controls */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
            <button onClick={() => handleFontSizeChange(-1)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded">
              <Type size={16} />
            </button>
            <span className="w-4 text-center text-sm">{fontSize}</span>
            <button onClick={() => handleFontSizeChange(1)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded">
              <Type size={20} />
            </button>
          </div>

          {/* Focus Mode */}
          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors"
            title="Focus Mode"
          >
            {isFocusMode ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <main className={cn(
        "max-w-3xl mx-auto p-6 md:p-12 transition-all font-serif",
        sizeClasses[fontSize as keyof typeof sizeClasses],
        "leading-relaxed"
      )}>
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900 dark:text-amber-100">
          {currentContent?.title}
        </h1>

        <article className="prose dark:prose-invert prose-amber max-w-none">
          {/* Placeholder for Markdown Rendering. In real implementation, use react-markdown here */}
          <div className="whitespace-pre-wrap">
            {currentContent?.body_text}
          </div>
        </article>

        {currentContent?.transliteration && (
          <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 opacity-80">
            <h3 className="text-lg font-semibold mb-2">Transliteration</h3>
            <p className="font-sans text-base">{currentContent.transliteration}</p>
          </div>
        )}
      </main>

      {/* Report Button */}
      <div className="fixed bottom-4 right-4 print:hidden">
        <button className="text-xs text-slate-400 hover:text-red-500 underline">Report Correction</button>
      </div>
    </div>
  );
}
