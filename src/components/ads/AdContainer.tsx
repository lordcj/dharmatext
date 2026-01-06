'use client';

import React, { useEffect, useRef } from 'react';

// Declaration for global adsbygoogle
declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

interface AdContainerProps {
    slotId?: string; // Google AdSlot ID (e.g., "1234567890")
    format?: 'auto' | 'fluid' | 'rectangle';
    layoutKey?: string; // For In-feed ads
    className?: string;
    style?: React.CSSProperties;
    mockContent: React.ReactNode; // What to show when ads are disabled (Dev/Zen mode)
}

export default function AdContainer({
    slotId,
    format = 'auto',
    layoutKey,
    className,
    style,
    mockContent,
}: AdContainerProps) {
    // Logic to determine if we should show real ads
    // For now, we default to false or check an env variable.
    // In a real app, you might also check cookie consent here.
    const ENABLE_ADS = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true';

    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        if (ENABLE_ADS && adRef.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {
                console.error('AdSense error:', err);
            }
        }
    }, [ENABLE_ADS]);

    if (!ENABLE_ADS) {
        return <div className={className}>{mockContent}</div>;
    }

    return (
        <div className={`ad-container overflow-hidden ${className}`} style={style}>
            <ins
                className="adsbygoogle"
                ref={adRef}
                style={{ display: 'block', width: '100%' }}
                data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXX'}
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
                data-ad-layout-key={layoutKey}
            />
        </div>
    );
}
