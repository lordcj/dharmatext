import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryContent } from '@/lib/content';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
    const params = await props.params;
    const categoryTitle = params.category.charAt(0).toUpperCase() + params.category.slice(1);
    return {
        title: `${categoryTitle} Collection | DharmaText`,
        description: `Browse our collection of ${categoryTitle}. Read in Hindi, English, and Sanskrit.`,
    };
}

export default async function CategoryPage(props: CategoryPageProps) {
    const params = await props.params;
    const items = await getCategoryContent(params.category);
    const categoryTitle = params.category.charAt(0).toUpperCase() + params.category.slice(1);

    // If no items found and it's not a known category, 404
    // For now, we allow empty categories but ideally check against valid categories
    const validCategories = ['bhajans', 'kathas', 'aartis', 'scriptures'];
    if (!validCategories.includes(params.category)) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-sand-50 dark:bg-slate-950 pt-24 pb-12 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-bold uppercase tracking-wider border border-amber-200">
                        <Sparkles size={16} /> Collection
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800">
                        {categoryTitle}
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Explore our curated library of sacred texts. Click on any item to read.
                    </p>
                </div>

                {/* Grid */}
                {items.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/${params.category}/${item.slug}`}
                                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>

                                <h2 className="text-xl font-bold font-serif text-slate-800 dark:text-slate-100 mb-2 relative z-10">
                                    {(item.translations.find(t => t.language_code === 'en') || item.translations[0]).title}
                                </h2>
                                <p className="text-slate-500 text-sm mb-4 line-clamp-2 relative z-10">
                                    {(item.translations.find(t => t.language_code === 'en') || item.translations[0]).body_text.slice(0, 100).replace(/#/g, '')}...
                                </p>

                                <div className="flex items-center text-amber-600 text-sm font-medium group-hover:gap-2 transition-all">
                                    Read Now <ArrowRight size={16} className="ml-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/50 rounded-2xl border border-dashed border-slate-300">
                        <p className="text-slate-500 text-lg">No content found in this category yet.</p>
                        <p className="text-sm text-slate-400 mt-2">Check back soon as we add more {categoryTitle}.</p>
                    </div>
                )}

            </div>
        </div>
    );
}
