import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, BookOpen, Flame, ArrowRight } from 'lucide-react';
import DailyRitualCard from '@/components/ui/DailyRitualCard';
import SearchHero from '@/components/ui/SearchHero';
import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';

// Featured content for SEO — Google needs crawlable text and links
const POPULAR_AARTIS = [
  'hanuman-chalisa',
  'om-jai-jagdish',
  'jai-ganesh-deva',
  'om-jai-shiv-omkara',
  'aarti-kunj-bihari-ki',
  'jai-ambe-gauri',
];

const POPULAR_KATHAS = [
  'somvar-vrat-katha',
  'solah-somvar-vrat-katha',
  'satyanarayan-vrat-katha',
  'santoshi-mata-vrat-katha',
];

export default function Home() {
  const featuredAartis = POPULAR_AARTIS
    .map(slug => aartis.find(a => a.slug === slug))
    .filter(Boolean);

  const featuredKathas = POPULAR_KATHAS
    .map(slug => kathas.find(k => k.slug === slug))
    .filter(Boolean);

  const sections = [
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
    <main className="min-h-screen overflow-x-hidden">

      {/* 1. Divine Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center bg-heavenly pt-20 pb-48"> {/* Increased pb-48 for better spacing */}
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/assets/cubes.png')] opacity-10 mix-blend-multiply hidden md:block"></div>
        <div className="absolute top-1/4 w-[500px] h-[500px] bg-gold-500/20 rounded-full blur-[120px] -z-0 hidden md:block"></div>

        <div className="relative z-30 px-4 max-w-4xl mx-auto space-y-8 md:animate-in md:fade-in md:zoom-in md:duration-1000">

          {/* Sacred Symbol Container */}
          <div className="relative inline-block md:animate-float-breathe">
            {/* God Rays: Repeating Conic Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full god-rays md:animate-spin-slow -z-10 bg-blend-soft-light hidden md:block"></div>

            {/* Radiant Glow (Behind Rays) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-500/10 blur-[90px] rounded-full -z-10 md:animate-pulse"></div>

            {/* The Living Idol: Liquid Gold Text */}
            <div className="text-7xl md:text-9xl mb-2 font-serif select-none drop-shadow-2xl text-liquid-gold md:animate-shine">
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
        <DailyRitualCard />
      </section>

      {/* 3. Sections Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-serif font-medium text-starlight-50">Explore the Divine Library</h3>
            <div className="h-0.5 w-24 bg-gold-500 mx-auto opacity-60"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* 4. Popular Aartis — SEO-critical server-rendered content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-medium text-starlight-50">Popular Aartis</h2>
              <p className="text-starlight-400 text-sm">Most recited prayers and devotional hymns</p>
            </div>
            <Link href="/aartis" className="hidden md:flex items-center gap-2 text-gold-400 hover:text-gold-500 transition-colors text-sm font-medium">
              View All Aartis <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredAartis.map((aarti) => aarti && (
              <Link
                key={aarti.slug}
                href={`/aartis/${aarti.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-stone-900"
              >
                <Image
                  src={aarti.imagePath}
                  alt={`${aarti.title} - ${aarti.titleHindi}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  quality={60}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white text-sm font-serif font-semibold leading-tight group-hover:text-gold-400 transition-colors">
                    {aarti.title}
                  </h3>
                  <p lang="hi" className="text-orange-200/70 text-xs font-[family-name:var(--font-sanskrit)] mt-0.5">
                    {aarti.titleHindi}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/aartis" className="md:hidden flex items-center justify-center gap-2 mt-6 text-gold-400 text-sm font-medium">
            View All Aartis <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 5. Popular Kathas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif font-medium text-starlight-50">Vrat Kathas</h2>
              <p className="text-starlight-400 text-sm">Sacred fasting stories for spiritual merit</p>
            </div>
            <Link href="/kathas" className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-500 transition-colors text-sm font-medium">
              View All Kathas <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredKathas.map((katha) => katha && (
              <Link
                key={katha.slug}
                href={`/kathas/${katha.slug}`}
                className="group p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex items-start gap-4">
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
                    <h3 className="font-serif font-semibold text-starlight-50 group-hover:text-amber-400 transition-colors text-sm">
                      {katha.title}
                    </h3>
                    <p lang="hi" className="text-starlight-400 text-xs font-[family-name:var(--font-sanskrit)] mt-0.5">
                      {katha.titleHindi}
                    </p>
                    <p className="text-starlight-400 text-xs mt-1 line-clamp-1">
                      {katha.deity} • {katha.readTime}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/kathas" className="md:hidden flex items-center justify-center gap-2 mt-6 text-amber-400 text-sm font-medium">
            View All Kathas <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 6. About DharmaText — E-E-A-T Content for SEO */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-serif font-medium text-starlight-50">
            What is DharmaText?
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto opacity-60"></div>
          <p className="text-starlight-300 leading-relaxed font-serif text-base">
            DharmaText is a free, open-access digital sanctuary dedicated to preserving and sharing the timeless wisdom of
            Sanatana Dharma. Our mission is to make Hindu scriptures, prayers, and devotional content accessible to everyone —
            in Hindi, Sanskrit, and English with verse-by-verse meanings. Whether you are seeking the complete Hanuman Chalisa,
            understanding the Bhagavad Gita, or looking for Vrat Kathas to read during fasting, DharmaText provides authentic,
            beautifully presented content for your spiritual journey.
          </p>
          <p lang="hi" className="text-starlight-400 leading-relaxed font-[family-name:var(--font-sanskrit)] text-sm">
            धर्मटेक्स्ट सनातन धर्म की शाश्वत ज्ञान परंपरा को संरक्षित और साझा करने के लिए समर्पित एक निःशुल्क डिजिटल पुस्तकालय है।
            हमारा उद्देश्य हिंदू ग्रंथों, प्रार्थनाओं और भक्ति सामग्री को हिंदी, संस्कृत और अंग्रेजी में सभी के लिए सुलभ बनाना है।
          </p>
        </div>
      </section>

    </main >
  );
}
