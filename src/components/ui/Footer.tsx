import Link from 'next/link';
import { SITE_NAME } from '@/lib/seo.config';

/**
 * Footer — E-E-A-T signals for Google
 * 
 * A proper footer with About, navigation, and trust signals
 * significantly improves Google's quality assessment of the site.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 border-t border-white/5 bg-cosmic-950/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand / About */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <span className="text-gold-400 font-serif font-bold text-3xl">ॐ</span>
                            <span className="text-xl font-serif font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                {SITE_NAME}
                            </span>
                        </Link>
                        <p className="text-starlight-400 text-sm leading-relaxed max-w-sm">
                            {SITE_NAME} is a free, open-access digital library of Hindu devotional content.
                            We provide Aartis, Vrat Kathas, Mantras, and Sacred Scriptures in Hindi, Sanskrit, and English
                            with verse-by-verse meanings to help devotees worldwide connect with Sanatana Dharma.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-starlight-50 font-serif font-semibold text-sm uppercase tracking-widest">
                            Explore
                        </h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="/aartis" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Sacred Aartis
                            </Link>
                            <Link href="/kathas" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Vrat Kathas
                            </Link>
                            <Link href="/scriptures" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Scriptures
                            </Link>
                            <Link href="/deities" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Deity Guide
                            </Link>
                        </nav>
                    </div>

                    {/* Popular */}
                    <div className="space-y-4">
                        <h3 className="text-starlight-50 font-serif font-semibold text-sm uppercase tracking-widest">
                            Popular
                        </h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="/aartis/hanuman-chalisa" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Hanuman Chalisa
                            </Link>
                            <Link href="/aartis/om-jai-jagdish" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Om Jai Jagdish Hare
                            </Link>
                            <Link href="/aartis/gayatri-mantra" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Gayatri Mantra
                            </Link>
                            <Link href="/kathas/satyanarayan-vrat-katha" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Satyanarayan Katha
                            </Link>
                            <Link href="/read/bhagavad-gita" className="text-starlight-400 text-sm hover:text-gold-400 transition-colors">
                                Bhagavad Gita
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-starlight-400 text-xs">
                        © {currentYear} {SITE_NAME}. All rights reserved. Made with 🙏 for Sanatana Dharma.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-starlight-400">
                        <Link href="/sitemap.xml" className="hover:text-gold-400 transition-colors">
                            Sitemap
                        </Link>
                        <Link href="/feed.xml" className="hover:text-gold-400 transition-colors">
                            RSS Feed
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
