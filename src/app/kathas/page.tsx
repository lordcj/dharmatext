import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';
import { kathas } from '@/data/kathas';


export default function KathasPage() {
    return (
        <main className="min-h-screen bg-sandstone-50 font-serif pb-20">
            <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-medium text-stone-800 mb-4">
                        Sacred Kathas & Stories
                    </h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Ancient stories of wisdom, devotion, and divine grace.
                        Reading these kathas purifies the mind and fulfills wishes.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {kathas.map((katha) => (
                        <Link
                            key={katha.id}
                            href={`/kathas/${katha.slug}`}
                            className="group relative block bg-stone-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[400px]"
                        >
                            {/* Full Height Card Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={katha.imagePath}
                                    alt={katha.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={75}
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />
                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Floating Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                                <div className="transform transition-all duration-300">
                                    <div className="mb-2">
                                        <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">
                                            {katha.readTime} Read
                                        </span>
                                    </div>

                                    <h2 className="text-3xl font-display font-medium text-white mb-1 drop-shadow-lg group-hover:text-amber-200 transition-colors">
                                        {katha.title}
                                    </h2>
                                    <p className="text-xl font-[family-name:var(--font-sanskrit)] text-amber-200/80 mb-3">
                                        {katha.titleHindi}
                                    </p>

                                    <p className="text-stone-300 text-sm leading-relaxed line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                        {katha.description}
                                    </p>

                                    <div className="flex items-center text-white font-sans font-medium text-sm gap-2 border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        <BookOpen size={14} className="text-amber-400" />
                                        <span>Start Reading</span>
                                        <ArrowRight size={16} className="text-amber-400" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
