import React, { useState, useEffect, useRef } from 'react';
import { Type, X } from 'lucide-react';

export type FontSize = 'sm' | 'base' | 'lg' | 'xl';

interface ReadingSettingsProps {
    currentFontSize: FontSize;
    onFontSizeChange: (size: FontSize) => void;
}

export default function ReadingSettings({
    currentFontSize,
    onFontSizeChange
}: ReadingSettingsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-colors ${isOpen
                        ? 'bg-amber-500 text-white'
                        : 'text-starlight-300 hover:text-amber-400 hover:bg-white/5'
                    }`}
                aria-label="Reading Settings"
            >
                <Type size={20} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-4 w-72 rounded-xl border border-white/10 shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-slate-900/95 backdrop-blur-xl p-4 space-y-6">

                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <h3 className="text-sm font-semibold text-starlight-200 uppercase tracking-widest">
                                Reading Mode
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-starlight-400 hover:text-white"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Font Size Selection */}
                        <div className="space-y-3">
                            <label className="text-xs text-starlight-400 font-medium">Font Size</label>
                            <div className="flex bg-white/5 rounded-lg p-1 border border-white/5">
                                <button
                                    onClick={() => onFontSizeChange('sm')}
                                    className={`flex-1 py-2 rounded flex items-center justify-center transition-all ${currentFontSize === 'sm' ? 'bg-amber-600 text-white shadow-md' : 'text-starlight-400 hover:text-starlight-200'
                                        }`}
                                >
                                    <span className="text-xs">Aa</span>
                                </button>
                                <button
                                    onClick={() => onFontSizeChange('base')}
                                    className={`flex-1 py-2 rounded flex items-center justify-center transition-all ${currentFontSize === 'base' ? 'bg-amber-600 text-white shadow-md' : 'text-starlight-400 hover:text-starlight-200'
                                        }`}
                                >
                                    <span className="text-sm">Aa</span>
                                </button>
                                <button
                                    onClick={() => onFontSizeChange('lg')}
                                    className={`flex-1 py-2 rounded flex items-center justify-center transition-all ${currentFontSize === 'lg' ? 'bg-amber-600 text-white shadow-md' : 'text-starlight-400 hover:text-starlight-200'
                                        }`}
                                >
                                    <span className="text-lg">Aa</span>
                                </button>
                                <button
                                    onClick={() => onFontSizeChange('xl')}
                                    className={`flex-1 py-2 rounded flex items-center justify-center transition-all ${currentFontSize === 'xl' ? 'bg-amber-600 text-white shadow-md' : 'text-starlight-400 hover:text-starlight-200'
                                        }`}
                                >
                                    <span className="text-xl">Aa</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
