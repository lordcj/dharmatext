'use client';

import React, { useEffect, useRef } from 'react';

interface AdContainerProps {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
    debugLabel?: string;
}

export default function AdContainer({ slotId, format = 'auto', className, debugLabel }: AdContainerProps) {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Logic to push ad to window.adsbygoogle
        // if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        //   (window as any).adsbygoogle.push({});
        // }
    }, []);

    return (
        <div
            ref={adRef}
            className={`ad-container my-8 min-h-[100px] flex items-center justify-center bg-white/5 border border-dashed border-white/10 print:hidden ${className || ''}`}
            role="complementary"
            aria-label="Advertisement"
        >
            {/* Placeholder for development */}
            <span className="text-xs text-slate-400 font-mono">
                AD SPACE: {debugLabel || slotId}
            </span>

            {/* Actual AdSense code would go here */}
            {/* <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={slotId}
           data-ad-format={format}
           data-full-width-responsive="true"></ins> */}
        </div>
    );
}
