'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import AdContainer from './AdContainer';

export default function StickyFooterAd() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const mockAd = (
        <div className="max-w-4xl mx-auto flex items-center justify-between relative h-[90px] md:h-[100px]">
            {/* Ad Mock Content */}
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-600 rounded text-[8px] text-white flex items-center justify-center font-bold">Ad</div>
                    <span className="text-xs text-gray-500">Google Ads</span>
                </div>
                <p className="text-black font-sans font-medium mt-1">
                    Experience Peace | Download the App
                </p>
                <button className="mt-1 bg-blue-600 text-white text-xs px-4 py-1.5 rounded-full font-bold">
                    Install Now
                </button>
            </div>
        </div>
    );

    return (
        <div className="fixed bottom-0 left-0 w-full z-[60] bg-[#f8f9fa] border-t border-gray-300 p-0 transform transition-transform duration-500 shadow-md">

            <AdContainer
                slotId="1234567890"
                format="auto" // Sticky ads usually handle their own resizing or use specific slots
                mockContent={mockAd}
                className="w-full"
            />

            {/* Close Button - Kept outside AdContainer to allow user to dismiss the entire sticky footer */}
            <div className="max-w-4xl mx-auto relative">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute -top-[100px] right-2 md:-top-[110px] bg-white rounded-full p-1 shadow border border-gray-200 text-gray-500 hover:text-black z-10"
                    style={{ top: '-110px' }} // Adjusting position relative to container
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}
