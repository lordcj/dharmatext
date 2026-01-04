import Link from 'next/link';
import { Sparkles, BookOpen, Music, Flame } from 'lucide-react';
import { getDailyContent } from '@/lib/dailyRitual';
import SearchHero from '@/components/ui/SearchHero';

export default function Home() {
  const daily = getDailyContent();

  const sections = [
    {
      title: 'Bhajans',
      slug: 'bhajans',
      desc: 'Divine melodies for the soul',
      icon: Music,
      bg: 'bg-rose-50 border-rose-100 hover:border-rose-300'
    },
    {
      title: 'Kathas',
      slug: 'kathas',
      desc: 'Ancient stories of wisdom',
      icon: BookOpen,
      bg: 'bg-amber-50 border-amber-100 hover:border-amber-300'
    },
    {
      title: 'Aartis',
      slug: 'aartis',
      desc: 'Light the lamp of devotion',
      icon: Flame,
      bg: 'bg-orange-50 border-orange-100 hover:border-orange-300'
    },
    {
      title: 'Scriptures',
      slug: 'scriptures',
      desc: 'Eternal vedic knowledge',
      icon: Sparkles,
      bg: 'bg-slate-50 border-slate-100 hover:border-slate-300'
    },
  ];

  return (
    <main className="min-h-screen">

      {/* 1. Divine Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden bg-heavenly pt-20 pb-32"> {/* Added pt-20 for Navbar space, min-h and pb-32 for spacing */}
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>
        <div className="absolute top-1/4 w-[500px] h-[500px] bg-gold-500/20 rounded-full blur-[120px] -z-0"></div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">

          {/* Sacred Symbol Container */}
          <div className="relative inline-block animate-float-breathe">
            {/* God Rays: Repeating Conic Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full god-rays animate-spin-slow -z-10 bg-blend-soft-light"></div>

            {/* Radiant Glow (Behind Rays) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-500/10 blur-[90px] rounded-full -z-10 animate-pulse"></div>

            {/* The Living Idol: Liquid Gold Text */}
            <div className="text-7xl md:text-9xl mb-2 font-serif select-none drop-shadow-2xl text-liquid-gold animate-shine">
              ॐ
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 tracking-tight drop-shadow-sm">
            Find Your <span className="text-gold-gradient">Inner Peace</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Welcome to the sanctuary of Sanatana Dharma. Access centuries of wisdom, prayers, and rituals.
          </p>

          {/* Prominent Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full group pt-4">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-bronze-500/20 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

            <SearchHero />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce text-bronze-600/70">
          <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">Scroll to Worship</span>
        </div>
      </section>

      {/* 2. Today's Ritual (Floating Card) */}
      <section className="-mt-20 relative z-20 max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center gap-8 text-center md:text-left border border-sandstone-200">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-widest border border-stone-200">
              <Sparkles size={12} /> Today • {daily.dayName}
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Seek Blessings from <span className="text-bronze-600">{daily.deity}</span>
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              It is auspicious to read the <strong className="font-medium text-stone-800">{daily.slug.replace(/-/g, ' ')}</strong> today.
            </p>
          </div>
          <div>
            <Link
              href={`/bhajans/${daily.slug}`}
              className="inline-flex items-center gap-2 bg-stone-900 text-sandstone-50 px-8 py-4 rounded-lg font-medium hover:bg-stone-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-stone-800"
            >
              <BookOpen className="w-5 h-5" />
              Start Reading
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Sections Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-serif font-bold text-stone-900">Explore the Divine Library</h3>
            <div className="h-0.5 w-24 bg-bronze-500 mx-auto opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/${section.slug}`} // Direct link
                className="group p-8 rounded-xl bg-white border border-sandstone-200 hover:border-bronze-500/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 bg-stone-50 text-bronze-600 group-hover:scale-110 transition-transform duration-500 border border-stone-100`}>
                    <section.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3 font-serif group-hover:text-bronze-600 transition-colors">{section.title}</h4>
                  <p className="text-stone-600 leading-relaxed font-light text-sm">{section.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
