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

          {/* Sacred Symbol */}
          <div className="text-7xl md:text-9xl mb-2 text-gold-600 opacity-80 font-serif select-none drop-shadow-lg">
            ॐ
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 tracking-tight drop-shadow-sm">
            Find Your <span className="text-gold-gradient">Inner Peace</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Welcome to the sanctuary of Sanatana Dharma. Access centuries of wisdom, prayers, and rituals.
          </p>

          {/* Prominent Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full group pt-4">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gold-500/30 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

            <SearchHero />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce text-gold-600/70">
          <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">Scroll to Worship</span>
        </div>
      </section>

      {/* 2. Today's Ritual (Floating Card) */}
      <section className="-mt-16 relative z-20 max-w-5xl mx-auto px-4 pb-12"> {/* Adjusted margin to -16 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-8 text-center md:text-left border border-white/50 ring-1 ring-gold-100">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
              <Sparkles size={14} /> Today • {daily.dayName}
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-800">
              Seek Blessings from <span className="text-amber-600">{daily.deity}</span>
            </h2>
            <p className="text-slate-600 text-lg">
              It is auspicious to read the <strong>{daily.slug.replace(/-/g, ' ')}</strong> today.
            </p>
          </div>
          <div>
            <Link
              href={`/bhajans/${daily.slug}`}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              Start Reading
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Sections Grid */}
      <section className="py-16 px-4 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Explore the Divine Library</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full opacity-80"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/${section.slug}`} // Direct link
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white ${section.bg}`}
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-amber-600 group-hover:scale-110 transition-transform border border-slate-100">
                  <section.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2 font-serif">{section.title}</h4>
                <p className="text-slate-500 leading-relaxed font-light">{section.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
