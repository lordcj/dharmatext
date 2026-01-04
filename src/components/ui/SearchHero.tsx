'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SearchHero() {
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const input = form.elements.namedItem('q') as HTMLInputElement;
                if (input.value.trim()) {
                    router.push(`/search?q=${encodeURIComponent(input.value.trim())}`);
                }
            }}
            className="relative flex items-center bg-white/95 backdrop-blur-2xl border border-white/50 rounded-full p-2 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01] ring-1 ring-gold-50 md:p-3"
        >
            <Search className="ml-4 text-gold-600 w-6 h-6 flex-shrink-0" />
            <input
                name="q"
                type="text"
                placeholder="Search Bhajans, Mantras..."
                className="w-full bg-transparent border-none px-4 py-3 text-lg focus:outline-none placeholder:text-slate-400 text-slate-800 placeholder:font-light"
            />
            <button type="submit" className="hidden sm:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:brightness-110 transition-all active:scale-95">
                Search
            </button>
        </form>
    );
}
