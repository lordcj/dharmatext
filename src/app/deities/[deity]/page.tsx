/**
 * Deity Hub Page — Topical Authority Cluster
 * 
 * Aggregates all aartis + kathas for a specific deity.
 * This builds topical authority: Google sees DharmaText as
 * THE expert on "Hanuman prayers" because we have a dedicated
 * hub linking to all Hanuman content.
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight, BookOpen, Flame, Calendar, Star } from 'lucide-react';
import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';
import { DEITY_HUBS, getDeityBySlug } from '@/lib/seoContent';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import SchemaScript from '@/components/seo/SchemaScript';

// ─── Static Generation ──────────────────────────────────────────

export async function generateStaticParams() {
    return DEITY_HUBS.map((deity) => ({
        deity: deity.slug,
    }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────

interface PageProps {
    params: Promise<{ deity: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { deity: deitySlug } = await params;
    const deity = getDeityBySlug(deitySlug);

    if (!deity) {
        return { title: 'Deity Not Found | DharmaText' };
    }

    return {
        title: `${deity.name} — Prayers, Aartis & Stories | DharmaText`,
        description: `${deity.description} Read all prayers, aartis, mantras, and vrat kathas dedicated to ${deity.name} (${deity.nameHindi}).`,
        alternates: { canonical: `/deities/${deitySlug}` },
        openGraph: {
            title: `${deity.name} (${deity.nameHindi}) — Complete Prayer Guide`,
            description: deity.description,
            type: 'article',
        },
    };
}

// ─── Page Component ──────────────────────────────────────────────

export default async function DeityPage({ params }: PageProps) {
    const { deity: deitySlug } = await params;
    const deity = getDeityBySlug(deitySlug);

    if (!deity) {
        notFound();
    }

    // Find related content
    const deityAartis = aartis.filter(a =>
        a.deity.toLowerCase().includes(deitySlug.toLowerCase()) ||
        deitySlug.toLowerCase().includes(a.deity.toLowerCase())
    );

    const deityKathas = kathas.filter(k =>
        k.deity.toLowerCase().includes(deitySlug.toLowerCase()) ||
        deitySlug.toLowerCase().includes(k.deity.toLowerCase())
    );

    // Schema
    const articleSchema = generateArticleSchema({
        title: `${deity.name} - ${deity.nameHindi}`,
        description: deity.description,
        slug: `/deities/${deitySlug}`,
        type: 'scripture',
    });

    const faqSchema = generateFAQSchema([
        {
            question: `Who is ${deity.name}?`,
            answer: deity.description,
        },
        {
            question: `What is the mantra of ${deity.name}?`,
            answer: `The sacred mantra of ${deity.name} is "${deity.mantra}" (${deity.mantraHindi}). Chanting this mantra with devotion invokes the blessings of ${deity.name}.`,
        },
        {
            question: `When should we worship ${deity.name}?`,
            answer: `${deity.name} is best worshipped on ${deity.worshipDay}. The major festivals dedicated to ${deity.name} are ${deity.festivals.join(', ')}.`,
        },
        {
            question: `How many aartis and prayers are available for ${deity.name} on DharmaText?`,
            answer: `DharmaText has ${deityAartis.length} aarti(s) and ${deityKathas.length} katha(s) dedicated to ${deity.name}. All are available with Hindi text, English transliteration, and meaning.`,
        },
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Deities', href: '/deities' },
        { name: deity.name, href: '#' },
    ]);

    return (
        <>
            <SchemaScript schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

            <main className="min-h-screen font-serif pb-20">
                <div className="pt-24 px-4 md:px-8 max-w-5xl mx-auto">

                    {/* Breadcrumb */}
                    <nav className="mb-8 flex items-center gap-2 text-sm text-starlight-400">
                        <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
                        <span className="opacity-40">›</span>
                        <Link href="/deities" className="hover:text-gold-400 transition-colors">Deities</Link>
                        <span className="opacity-40">›</span>
                        <span className="text-gold-400 font-semibold">{deity.name}</span>
                    </nav>

                    {/* Hero */}
                    <header className="text-center mb-12 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-display font-medium text-starlight-50">
                            {deity.name}
                        </h1>
                        <p lang="hi" className="text-2xl font-[family-name:var(--font-sanskrit)] text-amber-200/80">
                            {deity.nameHindi}
                        </p>
                        <div className="h-0.5 w-24 bg-gold-500 mx-auto opacity-60"></div>
                    </header>

                    {/* About Section */}
                    <section className="mb-12 p-8 rounded-xl bg-white/[0.03] border border-white/5">
                        <h2 className="text-2xl font-serif font-medium text-starlight-50 mb-4">
                            About {deity.name}
                        </h2>
                        <p className="text-starlight-200 leading-relaxed text-base mb-4">
                            {deity.description}
                        </p>
                        <p lang="hi" className="text-starlight-300 leading-relaxed text-base font-[family-name:var(--font-sanskrit)] border-t border-white/5 pt-4">
                            {deity.descriptionHindi}
                        </p>
                        <p className="text-starlight-200 leading-relaxed text-sm mt-4 italic">
                            {deity.significance}
                        </p>
                    </section>

                    {/* Quick Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                            <div className="flex items-center gap-2 text-gold-400">
                                <Star size={16} />
                                <h3 className="text-sm font-bold uppercase tracking-widest">Sacred Mantra</h3>
                            </div>
                            <p className="text-starlight-50 font-semibold">{deity.mantra}</p>
                            <p lang="hi" className="text-amber-200/70 font-[family-name:var(--font-sanskrit)]">{deity.mantraHindi}</p>
                        </div>
                        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                            <div className="flex items-center gap-2 text-gold-400">
                                <Calendar size={16} />
                                <h3 className="text-sm font-bold uppercase tracking-widest">Worship Day</h3>
                            </div>
                            <p className="text-starlight-50 font-semibold">{deity.worshipDay}</p>
                        </div>
                        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                            <div className="flex items-center gap-2 text-gold-400">
                                <Calendar size={16} />
                                <h3 className="text-sm font-bold uppercase tracking-widest">Major Festivals</h3>
                            </div>
                            <p className="text-starlight-200 text-sm">{deity.festivals.join(', ')}</p>
                        </div>
                    </div>

                    {/* Aartis for this Deity */}
                    {deityAartis.length > 0 && (
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Flame size={20} className="text-orange-400" />
                                <h2 className="text-2xl font-serif font-medium text-starlight-50">
                                    Aartis & Prayers for {deity.name}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {deityAartis.map(aarti => (
                                    <Link
                                        key={aarti.slug}
                                        href={`/aartis/${aarti.slug}`}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-orange-500/20 hover:bg-white/[0.06] transition-all"
                                    >
                                        <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                                            <Image
                                                src={aarti.imagePath}
                                                alt={aarti.title}
                                                fill
                                                sizes="56px"
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif font-semibold text-starlight-50 group-hover:text-orange-400 transition-colors">
                                                {aarti.title}
                                            </h3>
                                            <p lang="hi" className="text-sm text-amber-200/60 font-[family-name:var(--font-sanskrit)]">
                                                {aarti.titleHindi}
                                            </p>
                                            <p className="text-starlight-400 text-xs mt-1">{aarti.verseCount} verses</p>
                                        </div>
                                        <ArrowRight size={16} className="text-starlight-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Kathas for this Deity */}
                    {deityKathas.length > 0 && (
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen size={20} className="text-amber-400" />
                                <h2 className="text-2xl font-serif font-medium text-starlight-50">
                                    Vrat Kathas for {deity.name}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {deityKathas.map(katha => (
                                    <Link
                                        key={katha.slug}
                                        href={`/kathas/${katha.slug}`}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.06] transition-all"
                                    >
                                        <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                                            <Image
                                                src={katha.imagePath}
                                                alt={katha.title}
                                                fill
                                                sizes="56px"
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif font-semibold text-starlight-50 group-hover:text-amber-400 transition-colors">
                                                {katha.title}
                                            </h3>
                                            <p lang="hi" className="text-sm text-amber-200/60 font-[family-name:var(--font-sanskrit)]">
                                                {katha.titleHindi}
                                            </p>
                                            <p className="text-starlight-400 text-xs mt-1">{katha.readTime}</p>
                                        </div>
                                        <ArrowRight size={16} className="text-starlight-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Back to Deities */}
                    <div className="text-center mt-16">
                        <Link
                            href="/deities"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md text-starlight-300 hover:text-white"
                        >
                            ← View All Deities
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
