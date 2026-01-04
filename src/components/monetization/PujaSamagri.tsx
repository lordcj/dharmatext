import React from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';

interface SamagriItem {
    id: string;
    name: string;
    description: string;
    priceCheckUrl: string; // Affiliate link
    imagePlaceholder: string; // In real app, use next/image
}

const COMMON_ITEMS: SamagriItem[] = [
    { id: '1', name: 'Pure Cow Ghee', description: 'Essential for Diya and Aartis', priceCheckUrl: '#', imagePlaceholder: 'bg-yellow-100' },
    { id: '2', name: 'Premium Incense Sticks', description: 'Sandalwood & Rose fragrance', priceCheckUrl: '#', imagePlaceholder: 'bg-amber-100' },
    { id: '3', name: 'Brass Diya Set', description: 'Traditional handcrafted lamps', priceCheckUrl: '#', imagePlaceholder: 'bg-orange-100' },
    { id: '4', name: 'Gangajal', description: 'Holy water for purification', priceCheckUrl: '#', imagePlaceholder: 'bg-blue-100' },
];

export default function PujaSamagri({ ritualType }: { ritualType?: string }) {
    return (
        <div className="my-12 p-6 bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-700 rounded-xl print:hidden">
            <div className="flex items-center gap-2 mb-6">
                <ShoppingBag className="text-amber-600" />
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                    Complete Your Puja Setup
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {COMMON_ITEMS.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className={`h-24 w-full ${item.imagePlaceholder} rounded-md mb-3 flex items-center justify-center text-amber-800/20`}>
                            Image
                        </div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{item.name}</h4>
                        <p className="text-xs text-slate-500 mb-3">{item.description}</p>
                        <a
                            href={item.priceCheckUrl}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="flex items-center justify-center gap-1 w-full py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 text-sm font-medium rounded transition-colors"
                        >
                            Check Price <ExternalLink size={12} />
                        </a>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Sponsored / Affiliate Links</span>
            </div>
        </div>
    );
}
