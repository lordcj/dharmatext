/**
 * Centralized SEO Configuration
 * 
 * Single source of truth for all SEO-related constants.
 * Every page, schema, and sitemap references this file
 * instead of hardcoding URLs.
 */

// ─── Core Site Configuration ─────────────────────────────────────
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dharmatext.com';
export const SITE_NAME = 'DharmaText';
export const SITE_TAGLINE = 'Your Spiritual Gateway';
export const SITE_DESCRIPTION = 'A divine collection of Aartis, Kathas, and Scriptures. Read prayers, mantras, and sacred stories in Hindi, Sanskrit, and English with meaning.';

// ─── Default OG Image ────────────────────────────────────────────
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/images/hanuman-chalisa.webp`,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} - Sacred Hindu Scriptures & Prayers`,
};

// ─── Social ──────────────────────────────────────────────────────
export const TWITTER_HANDLE = '@dharmatext';

// ─── Organization Schema (reused across all pages) ───────────────
export const ORGANIZATION = {
  '@type': 'Organization' as const,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject' as const,
    url: `${SITE_URL}/icon.png`,
  },
};

export const PUBLISHER = {
  '@type': 'Organization' as const,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject' as const,
    url: `${SITE_URL}/icon.png`,
  },
};

// ─── URL Helpers ─────────────────────────────────────────────────

/** Get absolute URL from a relative path */
export function getAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/** Get canonical URL for a page */
export function getCanonicalUrl(path: string): string {
  return getAbsoluteUrl(path);
}

/** Get absolute image URL */
export function getAbsoluteImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) return imagePath;
  return getAbsoluteUrl(imagePath);
}

// ─── Content Type Labels (for metadata templates) ─────────────────

export const CONTENT_TYPE_LABELS = {
  aarti: { singular: 'Aarti', plural: 'Aartis', hindi: 'आरती' },
  katha: { singular: 'Katha', plural: 'Kathas', hindi: 'कथा' },
  scripture: { singular: 'Scripture', plural: 'Scriptures', hindi: 'ग्रंथ' },
  chapter: { singular: 'Chapter', plural: 'Chapters', hindi: 'अध्याय' },
} as const;
