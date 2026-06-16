'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'krishna' | 'shiva' | 'devi' | 'hanuman' | 'vishnu' | 'trimurti' | 'default';

interface ThemeContextType {
    currentTheme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    bgGradient: string;
    accentColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>('default');
    const [bgGradient, setBgGradient] = useState('');
    const [accentColor, setAccentColor] = useState('');

    useEffect(() => {
        // Update variables based on theme
        switch (currentTheme) {
            case 'krishna':
                // Handled by BackgroundManager for layering
                setBgGradient('transparent');
                setAccentColor('text-peacock-500');
                break;
            case 'shiva':
                setBgGradient('#020617'); // Solid Rudra Deep
                setAccentColor('text-ash-500');
                break;
            case 'devi':
                setBgGradient('#020617'); // Solid Shakti Deep
                setAccentColor('text-lotus-500');
                break;
            case 'hanuman':
                setBgGradient('transparent'); // Handled by BackgroundManager
                setAccentColor('text-orange-500');
                break;
            case 'vishnu':
                setBgGradient('transparent'); // Handled by BackgroundManager
                setAccentColor('text-blue-500');
                break;
            case 'trimurti':
                setBgGradient('transparent'); // Handled by BackgroundManager
                setAccentColor('text-amber-500');
                break;
            default:
                setBgGradient('#020617'); // Solid Cosmic Default
                setAccentColor('text-gold-500');
        }
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, bgGradient, accentColor }}>
            <div
                style={{ backgroundColor: bgGradient, backgroundAttachment: 'fixed' }}
                className="min-h-screen transition-all duration-1000 ease-in-out"
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
