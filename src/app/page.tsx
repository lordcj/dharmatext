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
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden bg-heavenly pt-20 pb-48"> {/* Increased pb-48 for better spacing */}
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
          <h1 className="text-5xl md:text-7xl font-display font-medium text-starlight-50 tracking-tight drop-shadow-sm">
            Find Your <span className="text-gold-gradient">Inner Peace</span>
          </h1>

          <p className="text-lg md:text-xl text-starlight-200 max-w-2xl mx-auto leading-relaxed font-medium">
            Welcome to the sanctuary of Sanatana Dharma. Access centuries of wisdom, prayers, and rituals.
          </p>

          {/* Prominent Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full group pt-4">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-bronze-500/20 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

            <SearchHero />
          </div>

        </div>


      </section>

      {/* 2. Today's Ritual (Floating Card) */}
      <section className="-mt-12 relative z-20 max-w-5xl mx-auto px-4 pb-16">
        <div className="glass-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden group">
          {/* Sacred Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-purple-900/20 opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold-500/20 rounded-full blur-[80px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-gold-400 text-[10px] font-bold uppercase tracking-widest border border-white/10">
                <Sparkles size={12} /> Today • {daily.dayName}
              </div>
              <h2 className="text-3xl font-serif font-medium text-starlight-50">
                Seek Blessings from <span className="text-gold-500">{daily.deity}</span>
              </h2>
              <p className="text-starlight-200 text-lg font-light leading-relaxed">
                It is auspicious to read the <strong className="font-medium text-white">{daily.slug.replace(/-/g, ' ')}</strong> today.
              </p>
            </div>
            <div>
              <Link
                href={`/bhajans/${daily.slug}`}
                className="inline-flex items-center gap-2 bg-gold-500 text-black px-8 py-4 rounded-lg font-medium hover:bg-gold-400 transition-all shadow-md hover:shadow-xl hover:shadow-gold-500/20 hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                Start Reading
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sections Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-serif font-medium text-starlight-50">Explore the Divine Library</h3>
            <div className="h-0.5 w-24 bg-gold-500 mx-auto opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/${section.slug}`} // Direct link
                className="group p-8 rounded-xl glass-card hover:border-gold-500/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center"
              >
                {/* Subtle Hover Gradient - Dark Mode Compatible */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-black/20 mb-6 bg-white/5 text-gold-400 group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                    <section.icon size={28} strokeWidth={2} />
                  </div>
                  <h4 className="text-2xl font-bold text-starlight-50 mb-3 font-serif group-hover:text-gold-400 transition-colors uppercase tracking-wide">{section.title}</h4>
                  <p className="text-starlight-400 leading-relaxed font-light text-sm">{section.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main >
  );
}
