import Link from 'next/link';
import { Metadata } from 'next';
import { DEITY_HUBS } from '@/lib/seoContent';
import { buildListingMetadata } from '@/lib/metadata';
import { generateCollectionPageSchema } from '@/lib/schema';
import SchemaScript from '@/components/seo/SchemaScript';

export const metadata: Metadata = {
    title: 'Hindu Deities Guide — Gods & Goddesses of Hinduism | DharmaText',
    description: 'Explore the major deities of Hinduism — Lord Hanuman, Shiva, Ganesha, Krishna, Durga, Lakshmi, Rama, and more. Read prayers, aartis, and kathas for each deity.',
    alternates: { canonical: '/deities' },
};

export default function DeitiesPage() {
    const schema = generateCollectionPageSchema({
        name: 'Hindu Deities Guide',
        description: 'Complete guide to the major deities of Hinduism with prayers, aartis, and sacred stories.',
        url: '/deities',
        numberOfItems: DEITY_HUBS.length,
    });

    return (
        <main className="min-h-screen font-serif pb-20">
            <SchemaScript schemas={[schema]} />

            <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-medium text-starlight-50 mb-4">
                        Hindu Deities
                    </h1>
                    <p className="text-starlight-400 max-w-2xl mx-auto text-lg">
                        Explore the divine pantheon of Hinduism. Learn about each deity&apos;s significance,
                        mantras, festivals, and read their sacred prayers and stories.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DEITY_HUBS.map((deity) => (
                        <Link
                            key={deity.slug}
                            href={`/deities/${deity.slug}`}
                            className="group p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-gold-500/20 hover:bg-white/[0.06] transition-all duration-300"
                        >
                            <div className="space-y-3">
                                <h2 className="text-xl font-serif font-semibold text-starlight-50 group-hover:text-gold-400 transition-colors">
                                    {deity.name}
                                </h2>
                                <p lang="hi" className="text-lg font-[family-name:var(--font-sanskrit)] text-amber-200/70">
                                    {deity.nameHindi}
                                </p>
                                <p className="text-starlight-400 text-sm leading-relaxed line-clamp-3">
                                    {deity.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-starlight-400 pt-2 border-t border-white/5">
                                    <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                        {deity.worshipDay}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
