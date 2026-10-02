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
  const rawDesc = `Read ${aarti.title} (${aarti.titleHindi}) — ${aarti.description}`;
  const pageDescription = rawDesc.length > 155 ? rawDesc.slice(0, 152) + '...' : rawDesc;
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
  const rawDesc = `Read ${katha.title} (${katha.titleHindi}) — ${katha.description}`;
  const pageDescription = rawDesc.length > 155 ? rawDesc.slice(0, 152) + '...' : rawDesc;
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
  };
}

// ─── Listing Page Metadata ───────────────────────────────────────

export function buildListingMetadata(type: 'aartis' | 'kathas' | 'scriptures', count: number): Metadata {
  const configs = {
    aartis: {
      title: `Sacred Aartis & Prayers — Read Online | ${SITE_NAME}`,
      description: `Browse ${count}+ Hindu Aartis. Hanuman Chalisa, Om Jai Jagdish Hare, Jai Ganesh Deva & more with Hindi text and meaning.`,
      url: '/aartis',
    },
    kathas: {
      title: `Vrat Kathas — Read in Hindi & English | ${SITE_NAME}`,
      description: `Read ${count}+ Vrat Kathas. Somvar, Mangalvar, Satyanarayan Katha & more sacred fasting stories in Hindi and English.`,
      url: '/kathas',
    },
    scriptures: {
      title: `Hindu Scriptures — Bhagavad Gita & More | ${SITE_NAME}`,
      description: `Read Bhagavad Gita, Shiva Purana, Devi Mahatmya verse-by-verse with Sanskrit text, Hindi meaning & English translation.`,
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
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

// ─── Homepage Metadata ───────────────────────────────────────────

export function buildHomepageMetadata(): Metadata {
  return {
    title: `${SITE_NAME} — Hindu Prayers, Aartis & Scriptures`,
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
