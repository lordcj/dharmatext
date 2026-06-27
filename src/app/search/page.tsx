import Link from 'next/link';
import { Search, Flame, BookOpen, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';
import { searchContent } from '@/lib/search';

interface SearchPageProps {
    searchParams: Promise<{
        q?: string;
    }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
    const params = await searchParams;
    const query = params.q || '';
    return {
        title: query ? `Search results for "${query}" | DharmaText` : 'Search | DharmaText',
        description: 'Search for Aartis, Mantras, Scriptures, and Kathas on DharmaText.',
    };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const params = await searchParams;
    const query = (params.q || '').trim();
    const results = query ? await searchContent(query) : [];

    const getIcon = (type: string) => {
        switch (type) {
            case 'Aarti': return <Flame className="w-5 h-5 text-orange-500" />;
            case 'Mantra': return <Sparkles className="w-5 h-5 text-yellow-500" />;
            case 'Scripture': return <BookOpen className="w-5 h-5 text-blue-500" />;
            default: return <Search className="w-5 h-5 text-slate-400" />;
        }
    };

    return (
        <div className="min-h-screen bg-cosmic-950 text-starlight-50 pt-28 pb-16 px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
                {/* Back Button & Header */}
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-starlight-400 hover:text-gold-400 transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-medium text-starlight-50">
                                Search Results
                            </h1>
                            {query ? (
                                <p className="text-starlight-400 mt-1">
                                    Found {results.length} {results.length === 1 ? 'result' : 'results'} for &ldquo;<span className="text-gold-400 font-medium">{query}</span>&rdquo;
                                </p>
                            ) : (
                                <p className="text-starlight-400 mt-1">Enter a query to search across the library</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Results List */}
                {results.length > 0 ? (
                    <div className="space-y-4">
                        {results.map((result) => (
                            <Link
                                key={`${result.type}-${result.id}`}
                                href={result.link}
                                className="block group p-6 rounded-xl glass-card hover:border-gold-500/30 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/5 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/5 p-3 rounded-full border border-white/10 group-hover:border-gold-500/30 transition-colors flex-shrink-0">
                                        {getIcon(result.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h2 className="text-xl font-bold font-serif text-starlight-50 group-hover:text-gold-400 transition-colors">
                                                {result.title}
                                            </h2>
                                            {result.subTitle && (
                                                <span className="text-starlight-400 text-sm font-serif">
                                                    ({result.subTitle})
                                                </span>
                                            )}
                                        </div>
                                        <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                            {result.type}
                                        </span>
                                        <p className="text-starlight-200 mt-3 text-sm font-light line-clamp-2 leading-relaxed">
                                            {result.excerpt}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-starlight-400 self-center group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
                        <Search className="w-12 h-12 text-starlight-400 mx-auto mb-4 opacity-50" />
                        <p className="text-starlight-200 text-lg font-medium">No results found</p>
                        <p className="text-sm text-starlight-400 mt-2 max-w-md mx-auto">
                            We couldn't find anything matching &ldquo;{query}&rdquo;. Check your spelling or try searching for another term (like 'Hanuman' or 'Shiv').
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
