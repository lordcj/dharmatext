'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function BackgroundManager() {
    const { currentTheme } = useTheme();

    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">

            {/* Base Gradient handled by ThemeContext (via body/layout style usually, or we can enforce it here) */}
            {/* Here we add specific visual elements like Mist, Particles, etc. */}

            {/* KRISHNA THEME: Peacock Feathers */}
            {currentTheme === 'krishna' && (
                <>
                    {/* 1. Base Dark Layer (Since Parent is Transparent) */}
                    <div className="absolute inset-0 bg-cosmic-950"></div>

                    {/* 2. Vibrant Image Layer (Side Frame) */}
                    <div
                        className="absolute inset-0 bg-[url('/assets/peacock_side_frame.webp')] bg-cover bg-center opacity-90"
                        style={{ filter: 'contrast(1.1) brightness(1.0)' }}
                    />

                    {/* 3. Gradient Overlay for Text Readability - Darker at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-cosmic-950/80 to-transparent"></div>

                    {/* 4. Subtle floating glow */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-peacock-500/20 blur-[120px] rounded-full animate-float-breathe mix-blend-screen"></div>
                </>
            )}

            {/* SHIVA THEME: Himalayan Mist / Trishul Vibe */}
            {currentTheme === 'shiva' && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ash-500/10 blur-[150px] rounded-full animate-pulse"></div>
                    {/* Mist Effect */}
                    <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-gray-900/50 to-transparent blur-xl"></div>
                </>
            )}

            {/* DEVI THEME: Lotus / Crimson Glow */}
            {currentTheme === 'devi' && (
                <>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-lotus-500/10 blur-[130px] rounded-full mix-blend-screen"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-shakti-900/30 blur-[100px] rounded-full"></div>
                </>
            )}

            {/* HANUMAN THEME: Devotion & Strength */}
            {currentTheme === 'hanuman' && (
                <>
                    {/* 1. Base Dark Layer */}
                    <div className="absolute inset-0 bg-cosmic-950"></div>

                    {/* 2. Side Image Layer (Hanuman) */}
                    <div
                        className="absolute inset-0 bg-[url('/images/hanuman-chalisa.webp')] bg-[length:auto_90%] bg-no-repeat bg-right-bottom md:bg-left-bottom opacity-15 grayscale hover:grayscale-0 transition-all duration-1000"
                        style={{ filter: 'contrast(1.2)' }}
                    />

                    {/* 3. Subtle floating glow - Gold/Orange */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 blur-[100px] rounded-full animate-float-breathe"></div>
                </>
            )}

            {/* TRIMURTI THEME: Cosmic Harmony (Brahma, Vishnu, Shiva) */}
            {currentTheme === 'trimurti' && (
                <>
                    {/* 1. Base Dark Layer */}
                    <div className="absolute inset-0 bg-cosmic-950"></div>

                    {/* 2. Side Image Layer (Trimurti) */}
                    <div
                        className="absolute inset-0 bg-[url('/images/om-jai-jagdish.webp')] bg-[length:auto_90%] bg-no-repeat bg-right-bottom md:bg-left-bottom opacity-15 grayscale hover:grayscale-0 transition-all duration-1000"
                        style={{ filter: 'contrast(1.2)' }}
                    />

                    {/* 3. Subtle floating glow - Amber/Gold */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[100px] rounded-full animate-float-breathe"></div>
                </>
            )}

            {/* DEFAULT: Cosmic */}
            {currentTheme === 'default' && (
                <>
                    <div className="absolute inset-0 bg-cosmic-950"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[100px] rounded-full animate-spin-slow-reverse"></div>
                </>
            )}

        </div>
    );
}
