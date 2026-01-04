'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search as SearchIcon, ArrowRight, Sparkles } from 'lucide-react';
// Note: We need to make sure getAllContent is available client-side or wrap this in a server component that passes data.
// For simplicity in this "mock" phase with local JSON, we'll fetch client-side or use a server action. 
// Actually, let's make this a Serve Component mixed with Client for params? 
// Next.js App Router recommends Server Components for fetching.
// Let's stick to a simple client-side search for the mock data since `local-content.json` is small.

// MOCK DATA IMPORT (In a real app, this would be an API call)
import localContent from '@/data/local-content.json';

interface SearchResult {
    slug: string;
    category_id: string;
    title: string;
    excerpt: string;
    matchType: 'Title' | 'Content';
}

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (!query) return;

        const lowerQuery = query.toLowerCase();
        const filtered: SearchResult[] = [];

        // Iterate through categories in localContent
        Object.entries(localContent).forEach(([category, items]) => {
            // items is an array of objects
            (items as unknown as any[]).forEach(item => {
                // translations is an array
                const enTranslation = item.translations.find((t: any) => t.language_code === 'en') || item.translations[0];

                if (enTranslation.title.toLowerCase().includes(lowerQuery)) {
                    filtered.push({
                        slug: item.slug,
                        category_id: category, // 'bhajans', 'kathas', etc.
                        title: enTranslation.title,
                        excerpt: enTranslation.body_text.slice(0, 120) + '...',
                        matchType: 'Title'
                    });
                } else if (enTranslation.body_text.toLowerCase().includes(lowerQuery)) {
                    filtered.push({
                        slug: item.slug,
                        category_id: category,
                        title: enTranslation.title,
                        excerpt: enTranslation.body_text.slice(0, 120) + '...',
                        matchType: 'Content'
                    });
                }
            });
        });

        setResults(filtered);
    }, [query]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-slate-800 mb-2">
                    Search Results for <span className="text-amber-600">"{query}"</span>
                </h1>
                <p className="text-slate-500">Found {results.length} matches in the divine library.</p>
            </div>

            {results.length > 0 ? (
                <div className="space-y-4">
                    {results.map((result) => (
                        <Link
                            key={`${result.category_id}-${result.slug}`}
                            href={`/${result.category_id}/${result.slug}`}
                            className="block bg-white p-6 rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all group"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                                        {result.category_id} • {result.matchType} Match
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">
                                        {result.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {result.excerpt}
                                    </p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 pt-2">
                                    <ArrowRight />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="bg-slate-50 rounded-xl p-12 text-center border border-dashed border-slate-200">
                    <SearchIcon className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-900">No results found</h3>
                    <p className="text-slate-500 mt-1">Try seeking a different path (or keyword).</p>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <div className="min-h-screen bg-sand-50 pt-28 px-4 pb-12">
            <Suspense fallback={<div className="text-center pt-20">Loading...</div>}>
                <SearchResults />
            </Suspense>
        </div>
    );
}
