'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';

const scriptures = [
    {
        id: 'bhagavad-gita',
        title: 'Bhagavad Gita',
        description: 'The divine song of God. A conversation between Prince Arjuna and Krishna.',
        imagePath: '/images/bhagavad-gita.webp',
        slug: 'bhagavad-gita',
        verseCount: '700 Verses'
    },
    {
        id: 'shiva-purana',
        title: 'Shiva Purana',
        description: 'The glory of the Great God Shiva, creator and destroyer of the universe.',
        imagePath: '/images/shiva-purana.webp',
        slug: 'shiva-purana',
        verseCount: '24,000 Verses'
    },
    {
        id: 'devi-mahatmya',
        title: 'Devi Mahatmya',
        description: 'The victory of the Goddess Durga over the buffalo demon Mahishasura.',
        imagePath: '/images/devi-mahatmya.webp',
        slug: 'devi-mahatmya',
        verseCount: '700 Verses'
    },
];

export default function ScripturesPage() {
    return (
        <main className="min-h-screen bg-sandstone-50 font-serif pb-20">
            <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-medium text-stone-800 mb-4">
                        Sacred Scriptures
                    </h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Immerse yourself in the timeless wisdom of the Vedas, Puranas, and Epics.
                        Choose a text to begin your journey.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scriptures.map((scripture) => (
                        <Link
                            key={scripture.id}
                            href={`/read/${scripture.slug}`}
                            className="group relative block bg-stone-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[400px]"
                        >
                            {/* Full Height Card Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={scripture.imagePath}
                                    alt={scripture.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />
                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Floating Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                                <div className="transform transition-all duration-300">
                                    <span className="text-xs font-sans font-bold tracking-widest text-orange-400 uppercase mb-2 inline-block">
                                        {scripture.verseCount}
                                    </span>

                                    <h2 className="text-3xl font-display font-medium text-white mb-3 drop-shadow-lg group-hover:text-orange-200 transition-colors">
                                        {scripture.title}
                                    </h2>

                                    <p className="text-stone-300 text-sm leading-relaxed line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                        {scripture.description}
                                    </p>

                                    <div className="flex items-center text-white font-sans font-medium text-sm gap-2 border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        <span>Start Reading</span>
                                        <ArrowRight size={16} className="text-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
