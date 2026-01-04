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
                ? 'bg-[#0f172a]/80 backdrop-blur-md shadow-lg border-b border-white/10 py-4' // Increased padding
                : 'bg-transparent py-6' // Larger padding at top for impact
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center transition-all duration-300">

                    {/* Logo Transition Logic */}
                    <Link href="/" className="flex items-center gap-2 group relative h-10 overflow-hidden">
                        <div className="flex items-center">
                            {/* Icon always present, stable size */}
                            <span className="text-gold-400 font-serif font-bold text-3xl leading-none flex items-center h-full drop-shadow-md">
                                ॐ
                            </span>

                            {/* Text fades out on scroll - smoother transition */}
                            <span className={`ml-2 font-serif font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap ${isScrolled
                                ? 'max-w-0 opacity-0 -translate-x-4'
                                : 'max-w-[200px] opacity-100 translate-x-0 text-2xl'
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
                                    ? 'text-starlight-200 hover:text-gold-400'
                                    : 'text-starlight-50 hover:text-gold-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle & Search Link */}
                    <div className="flex items-center gap-4 md:hidden">

                        <Link href="/search" className="p-2 text-starlight-50 hover:text-gold-400">
                            <Search className="w-6 h-6" />
                        </Link>

                        <button
                            className="p-2 text-starlight-50 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-white/10 shadow-xl transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
                }`}>
                <div className="flex flex-col p-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 rounded-lg text-lg font-medium text-starlight-200 hover:bg-white/10 hover:text-gold-400 transition-colors"
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
