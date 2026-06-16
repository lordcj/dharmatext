import React from 'react';
import AdContainer from './AdContainer';

export default function NativeAd() {
    const mockAd = (
        <div className="my-8 py-6 px-4 rounded flex flex-col items-start gap-2 shadow-sm border bg-[#202124] border-white/10">
            <div className="flex items-center gap-2">
                <span className="px-1 py-0.5 rounded-[2px] bg-[#3c4043] text-[10px] text-white font-bold">Ad</span>
                <span className="text-xs text-starlight-400">Sponsored • Dharmic Store</span>
            </div>
            <div className="flex gap-4 w-full">
                <div className="flex-1 space-y-1">
                    <h4 className="text-base font-medium text-blue-300">
                        Buy Premium Pooja Kits
                    </h4>
                    <p className="text-sm text-starlight-300">
                        Complete samagri for your functional needs. Order now and get 20% off.
                    </p>
                </div>
                <div className="w-20 h-20 rounded bg-white/5"></div>
            </div>
        </div>
    );

    return (
        <AdContainer
            slotId="9876543210" // Example ID
            format="fluid"
            layoutKey="-fb+5w+4e-db+86" // In-feed layout key example
            mockContent={mockAd}
        />
    );
}
