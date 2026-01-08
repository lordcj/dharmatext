'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Flame, BookOpen, Sparkles, ChevronRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { searchContent, SearchResult } from '@/lib/search';

export default function SearchHero() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Debounced Search Effect
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query.trim().length >= 2) {
                setIsLoading(true);
                // We default to searching everything for the dropdown for best UX
                const hits = await searchContent(query, { fields: ['title', 'deity', 'meaning'] });
                setResults(hits.slice(0, 6)); // Limit to top 6 results
                setIsOpen(true);
                setIsLoading(false);
            } else {
                setResults([]);
                setIsOpen(false);
            }
        }, 300); // 300ms debounce

        return () => clearTimeout(timer);
    }, [query]);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
        }
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'Aarti': return <Flame className="w-4 h-4 text-orange-500" />;
            case 'Mantra': return <Sparkles className="w-4 h-4 text-yellow-500" />;
            case 'Scripture': return <BookOpen className="w-4 h-4 text-blue-500" />;
            default: return <Search className="w-4 h-4 text-slate-400" />;
        }
    };

    return (
        <div ref={dropdownRef} className="relative w-full z-50">
            <form
                onSubmit={handleSubmit}
                className="relative flex items-center bg-white/95 backdrop-blur-2xl border border-white/50 rounded-full p-2 shadow-2xl transition-all duration-300 group-hover:scale-[1.01] ring-1 ring-gold-50 md:p-3 focus-within:ring-2 focus-within:ring-gold-300"
            >
                {isLoading ? (
                    <Loader2 className="ml-4 text-orange-500 w-6 h-6 flex-shrink-0 animate-spin" />
                ) : (
                    <Search className="ml-4 text-orange-500 w-6 h-6 flex-shrink-0" />
                )}

                <input
                    name="q"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Bhajans, Mantras..."
                    autoComplete="off"
                    className="w-full bg-transparent border-none px-4 py-3 text-lg focus:outline-none placeholder:text-slate-400 text-slate-800 placeholder:font-light"
                    onFocus={() => {
                        if (query.trim().length >= 2 && results.length > 0) setIsOpen(true);
                    }}
                />

                <button type="submit" className="hidden sm:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:brightness-110 transition-all active:scale-95">
                    Search
                </button>
            </form>

            {/* Instant Results Dropdown */}
            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-xl border border-white/40 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="max-h-[60vh] overflow-y-auto py-2">
                        {results.map((result, index) => (
                            <div
                                key={`${result.type}-${result.id}`}
                                onClick={() => {
                                    router.push(result.link);
                                    setIsOpen(false);
                                }}
                                className="cursor-pointer px-5 py-3 hover:bg-gold-50/50 transition-colors flex items-center justify-between group border-b border-slate-50 last:border-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-slate-50 p-2 rounded-full border border-slate-100 group-hover:border-gold-200 transition-colors">
                                        {getIcon(result.type)}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 text-base">{result.title}</h4>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <span className="font-medium text-amber-600 uppercase tracking-wider text-[10px]">{result.type}</span>
                                            {result.subTitle && (
                                                <>
                                                    <span>•</span>
                                                    <span className="font-serif">{result.subTitle}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-gold-500 transition-colors" />
                            </div>
                        ))}
                    </div>

                    {/* Footer: View All */}
                    <div
                        onClick={() => handleSubmit()}
                        className="bg-slate-50 px-5 py-3 text-center text-sm font-medium text-amber-600 cursor-pointer hover:bg-amber-50 border-t border-slate-100 transition-colors"
                    >
                        View all results for "{query}"
                    </div>
                </div>
            )}
        </div>
    );
}

