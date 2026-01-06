'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'krishna' | 'shiva' | 'devi' | 'default';

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
                setBgGradient('radial-gradient(circle at 50% 0%, #2e1065 0%, #020617 60%, #000000 100%)'); // Rudra Deep
                setAccentColor('text-ash-500');
                break;
            case 'devi':
                setBgGradient('radial-gradient(circle at 50% 0%, #881337 0%, #020617 60%, #000000 100%)'); // Shakti Deep
                setAccentColor('text-lotus-500');
                break;
            default:
                setBgGradient('radial-gradient(circle at 50% 0%, #1e1b4b 0%, #020617 60%, #000000 100%)'); // Cosmic Default
                setAccentColor('text-gold-500');
        }
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, bgGradient, accentColor }}>
            <div
                style={{ background: bgGradient, backgroundAttachment: 'fixed' }}
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
