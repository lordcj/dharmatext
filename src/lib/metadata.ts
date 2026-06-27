/**
 * Per-Page Metadata Builder Functions
 * 
 * Generates unique, intent-matched <title>, <meta description>,
 * canonical URL, OpenGraph, and Twitter metadata for every page type.
 * 
 * This prevents thin/duplicate meta across pages and ensures
 * each page targets unique search intent.
 */

import { Metadata } from 'next';
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  getCanonicalUrl,
  getAbsoluteImageUrl,
} from './seo.config';

// ─── Aarti Page Metadata ─────────────────────────────────────────

interface AartiMetaInput {
  title: string;
  titleHindi: string;
  description: string;
  imagePath: string;
  deity: string;
  slug: string;
  verseCount: string;
}

export function buildAartiMetadata(aarti: AartiMetaInput): Metadata {
  const pageTitle = `${aarti.title} - ${aarti.titleHindi} | Read with Meaning`;
  const pageDescription = `Read ${aarti.title} (${aarti.titleHindi}) online with Hindi text, English transliteration, and verse-by-verse meaning. ${aarti.description}`;
  const pageUrl = `/aartis/${aarti.slug}`;
  const imageUrl = getAbsoluteImageUrl(aarti.imagePath);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: getCanonicalUrl(pageUrl),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: getCanonicalUrl(pageUrl),
      siteName: SITE_NAME,
      type: 'article',
      locale: 'en_IN',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${aarti.title} - ${aarti.titleHindi}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
    keywords: [
      aarti.title,
      aarti.titleHindi,
      `${aarti.title} lyrics`,
      `${aarti.title} meaning`,
      `${aarti.title} in Hindi`,
      `${aarti.title} in English`,
      `${aarti.deity} aarti`,
      'aarti',
      'prayer',
      'Hindu devotional',
    ],
  };
}

// ─── Katha Page Metadata ─────────────────────────────────────────

interface KathaMetaInput {
  title: string;
  titleHindi: string;
  description: string;
  imagePath: string;
  deity: string;
  readTime: string;
  slug: string;
}

export function buildKathaMetadata(katha: KathaMetaInput): Metadata {
  const pageTitle = `${katha.title} - ${katha.titleHindi} | Read in Hindi & English`;
  const pageDescription = `Read ${katha.title} (${katha.titleHindi}) — dedicated to ${katha.deity}. ${katha.description} Read time: ${katha.readTime}.`;
  const pageUrl = `/kathas/${katha.slug}`;
  const imageUrl = getAbsoluteImageUrl(katha.imagePath);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: getCanonicalUrl(pageUrl),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: getCanonicalUrl(pageUrl),
      siteName: SITE_NAME,
      type: 'article',
      locale: 'en_IN',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${katha.title} - ${katha.titleHindi}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
    keywords: [
      katha.title,
      katha.titleHindi,
      `${katha.title} in Hindi`,
      `${katha.title} in English`,
      `${katha.deity} katha`,
      'vrat katha',
      'Hindu story',
      'fasting story',
    ],
  };
}

// ─── Scripture Chapter Index Metadata ────────────────────────────

interface ScriptureMetaInput {
  title: string;
  slug: string;
  chapterCount: number;
}

export function buildScriptureMetadata(scripture: ScriptureMetaInput): Metadata {
  const pageTitle = `${scripture.title} — All ${scripture.chapterCount} Chapters | Read Online`;
  const pageDescription = `Read ${scripture.title} online — all ${scripture.chapterCount} chapters with Sanskrit text, Hindi meaning, and English translation. Verse-by-verse commentary.`;
  const pageUrl = `/read/${scripture.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: getCanonicalUrl(pageUrl),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: getCanonicalUrl(pageUrl),
      siteName: SITE_NAME,
      type: 'article',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
    },
    keywords: [
      scripture.title,
      `${scripture.title} chapters`,
      `${scripture.title} online`,
      `${scripture.title} in Hindi`,
      'Hindu scripture',
      'Vedic text',
    ],
  };
}

// ─── Scripture Chapter Page Metadata ─────────────────────────────

interface ChapterMetaInput {
  chapterId: number;
  chapterTitle: string;
  chapterTranslation: string;
  chapterDesc: string;
  verseCount: number;
  textSlug: string;
  textTitle: string;
}

export function buildChapterMetadata(chapter: ChapterMetaInput): Metadata {
  const pageTitle = `${chapter.textTitle} Chapter ${chapter.chapterId}: ${chapter.chapterTitle} — ${chapter.chapterTranslation}`;
  const pageDescription = `Read ${chapter.textTitle} Chapter ${chapter.chapterId} (${chapter.chapterTitle}) — ${chapter.chapterDesc}. ${chapter.verseCount} verses with Sanskrit, Hindi, and English meaning.`;
  const pageUrl = `/read/${chapter.textSlug}/${chapter.chapterId}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: getCanonicalUrl(pageUrl),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: getCanonicalUrl(pageUrl),
      siteName: SITE_NAME,
      type: 'article',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary',
      title: pageTitle,
      description: pageDescription,
    },
    keywords: [
      chapter.chapterTitle,
      chapter.chapterTranslation,
      `${chapter.textTitle} chapter ${chapter.chapterId}`,
      `${chapter.chapterTitle} meaning`,
      chapter.textTitle,
    ],
  };
}

// ─── Listing Page Metadata ───────────────────────────────────────

export function buildListingMetadata(type: 'aartis' | 'kathas' | 'scriptures', count: number): Metadata {
  const configs = {
    aartis: {
      title: `Sacred Aartis & Prayers — Read Online with Meaning | ${SITE_NAME}`,
      description: `Browse ${count}+ sacred Hindu Aartis and prayers. Read Hanuman Chalisa, Om Jai Jagdish Hare, Jai Ganesh Deva, and more with Hindi text, transliteration, and meaning.`,
      url: '/aartis',
    },
    kathas: {
      title: `Sacred Kathas & Vrat Stories — Read in Hindi & English | ${SITE_NAME}`,
      description: `Read ${count}+ Vrat Kathas and sacred Hindu stories. Somvar Vrat Katha, Mangalvar Vrat Katha, Satyanarayan Katha, and more in Hindi and English.`,
      url: '/kathas',
    },
    scriptures: {
      title: `Sacred Hindu Scriptures — Read Bhagavad Gita & More Online | ${SITE_NAME}`,
      description: `Explore sacred Hindu scriptures including Bhagavad Gita, Shiva Purana, and Devi Mahatmya. Read verse-by-verse with Sanskrit text and translations.`,
      url: '/scriptures',
    },
  };

  const config = configs[type];

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: getCanonicalUrl(config.url),
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: getCanonicalUrl(config.url),
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: config.title,
      description: config.description,
    },
  };
}

// ─── Homepage Metadata ───────────────────────────────────────────

export function buildHomepageMetadata(): Metadata {
  return {
    title: `${SITE_NAME} — ${SITE_TAGLINE} | Hindu Prayers, Aartis & Scriptures`,
    description: SITE_DESCRIPTION,
    alternates: {
      canonical: getCanonicalUrl('/'),
    },
    openGraph: {
      title: `${SITE_NAME} — ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      url: getCanonicalUrl('/'),
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_NAME} — ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
