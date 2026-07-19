import Link from 'next/link';
import { Search, Home, BookOpen, Flame, Sparkles } from 'lucide-react';

/**
 * Custom 404 Page
 * 
 * Recovers lost visitors with search and popular content links.
 * Passes link equity to important pages instead of dead-ending.
 */
export default function NotFound() {
    const popularLinks = [
        { name: 'Hanuman Chalisa', href: '/aartis/hanuman-chalisa', icon: Flame },
        { name: 'Om Jai Jagdish Hare', href: '/aartis/om-jai-jagdish', icon: Flame },
        { name: 'All Aartis', href: '/aartis', icon: Flame },
        { name: 'Vrat Kathas', href: '/kathas', icon: BookOpen },
        { name: 'Sacred Scriptures', href: '/scriptures', icon: Sparkles },
        { name: 'Bhagavad Gita', href: '/read/bhagavad-gita', icon: BookOpen },
    ];

    return (
        <main className="min-h-screen flex items-center justify-center px-4 pb-20">
            <div className="text-center max-w-2xl mx-auto space-y-8">

                {/* Sacred Symbol */}
                <div className="text-8xl font-serif text-gold-400/30 select-none animate-pulse">
                    ॐ
                </div>

                {/* Error Message */}
                <div className="space-y-3">
                    <h1 className="text-5xl md:text-7xl font-display font-medium text-starlight-50">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-starlight-400 max-w-md mx-auto leading-relaxed">
                        The path you seek does not exist. But the divine is everywhere — 
                        let us guide you to sacred content.
                    </p>
                </div>

                {/* Search */}
                <div className="relative max-w-md mx-auto">
                    <Link
                        href="/search"
                        className="flex items-center gap-3 w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all text-starlight-400 hover:text-starlight-200"
                    >
                        <Search size={18} />
                        <span>Search for prayers, mantras, kathas...</span>
                    </Link>
                </div>

                {/* Popular Links */}
                <div className="space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-starlight-400">
                        Popular Content
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {popularLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-gold-500/20 hover:bg-white/[0.06] transition-all text-sm text-starlight-200 hover:text-gold-400"
                            >
                                <link.icon size={14} className="text-gold-400/60 flex-shrink-0" />
                                <span className="truncate">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Home Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500/10 border border-gold-500/20 hover:bg-gold-500/20 transition-all text-gold-400 font-medium"
                >
                    <Home size={16} />
                    Return Home
                </Link>
            </div>
        </main>
    );
}
