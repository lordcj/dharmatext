'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Bhajans', href: '/bhajans' }, // Updated paths to be direct
        { name: 'Kathas', href: '/kathas' },
        { name: 'Aartis', href: '/aartis' },
        { name: 'Scriptures', href: '/scriptures' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'bg-white/80 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-2'
                : 'bg-transparent py-6' // Larger padding at top for impact
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center transition-all duration-300">

                    {/* Logo Transition Logic */}
                    <Link href="/" className="flex items-center gap-2 group relative">
                        <div className={`transition-all duration-500 ease-in-out flex items-center ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
                            }`}>
                            {/* Icon always present, but animates */}
                            <span className={`text-gold-600 font-serif font-bold transition-all duration-500 ${isScrolled ? 'text-4xl rotate-0' : 'text-3xl'
                                }`}>
                                ॐ
                            </span>

                            {/* Text fades out on scroll */}
                            <span className={`ml-2 font-serif font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent transition-all duration-500 origin-left ${isScrolled
                                ? 'w-0 opacity-0 overflow-hidden scale-95'
                                : 'w-auto opacity-100 scale-100 text-2xl'
                                }`}>
                                DharmaText
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium tracking-wide transition-colors duration-300 ${isScrolled
                                    ? 'text-slate-600 hover:text-amber-600'
                                    : 'text-slate-800 hover:text-amber-700'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle & Search Link */}
                    <div className="flex items-center gap-4 md:hidden">

                        <Link href="/search" className="p-2 text-slate-700 hover:text-amber-600">
                            <Search className="w-6 h-6" />
                        </Link>

                        <button
                            className="p-2 text-slate-700 hover:bg-amber-50 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-amber-100 shadow-xl transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
                }`}>
                <div className="flex flex-col p-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
