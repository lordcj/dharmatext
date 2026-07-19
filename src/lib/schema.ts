/**
 * JSON-LD Schema Markup Generators
 * 
 * Type-safe functions that produce structured data for all page types.
 * These drive rich snippets, knowledge panels, and enhanced search results.
 */

import {
  SITE_URL,
  SITE_NAME,
  ORGANIZATION,
  PUBLISHER,
  getAbsoluteUrl,
  getAbsoluteImageUrl,
} from './seo.config';

// ─── Types ───────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleMeta {
  title: string;
  titleHindi?: string;
  description: string;
  imagePath?: string;
  slug: string;
  type: 'aarti' | 'katha' | 'scripture' | 'chapter';
  datePublished?: string;
  dateModified?: string;
  inLanguage?: string[];
}

// ─── Article Schema ──────────────────────────────────────────────

export function generateArticleSchema(meta: ArticleMeta) {
  const headline = meta.titleHindi
    ? `${meta.title} - ${meta.titleHindi}`
    : meta.title;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    name: meta.title,
    description: meta.description,
    image: meta.imagePath ? getAbsoluteImageUrl(meta.imagePath) : undefined,
    author: ORGANIZATION,
    publisher: PUBLISHER,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getAbsoluteUrl(meta.slug),
    },
    datePublished: meta.datePublished || '2024-01-01',
    dateModified: meta.dateModified || new Date().toISOString().split('T')[0],
    inLanguage: meta.inLanguage || ['hi', 'en'],
  };
}

// ─── FAQ Schema (massive SEO win for devotional content) ─────────

export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── Breadcrumb Schema ───────────────────────────────────────────

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.href),
    })),
  };
}

// ─── Collection Page Schema ──────────────────────────────────────

export function generateCollectionPageSchema(meta: {
  name: string;
  description: string;
  url: string;
  numberOfItems: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: meta.name,
    description: meta.description,
    url: getAbsoluteUrl(meta.url),
    numberOfItems: meta.numberOfItems,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// ─── WebSite Schema (for brand sitelinks searchbox) ──────────────

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─── FAQ Generators from Content ─────────────────────────────────

/** Generate FAQ items from aarti verses (meaning Q&A) */
export function generateAartiFAQs(
  aartiTitle: string,
  verses: { sequence: number; textEnglish?: string; meaningHindi?: string; type: string }[],
  limit = 5
): FAQItem[] {
  const faqs: FAQItem[] = [];

  // Top-level FAQ about the aarti
  faqs.push({
    question: `What is ${aartiTitle}?`,
    answer: `${aartiTitle} is a sacred Hindu devotional hymn (aarti) recited during worship. It consists of ${verses.length} verses and is traditionally chanted to invoke divine blessings.`,
  });

  // Verse meaning FAQs (pick most interesting ones)
  const versesWithMeaning = verses.filter(
    (v) => v.textEnglish && v.type === 'chaupai'
  );

  for (const verse of versesWithMeaning.slice(0, limit - 1)) {
    if (verse.textEnglish) {
      faqs.push({
        question: `What is the meaning of verse ${verse.sequence} of ${aartiTitle}?`,
        answer: verse.textEnglish,
      });
    }
  }

  return faqs;
}

/** Generate FAQ items from katha content */
export function generateKathaFAQs(
  kathaTitle: string,
  deity: string,
  description: string
): FAQItem[] {
  return [
    {
      question: `What is ${kathaTitle}?`,
      answer: description,
    },
    {
      question: `Which deity is ${kathaTitle} dedicated to?`,
      answer: `${kathaTitle} is dedicated to ${deity}. It is a sacred story (Vrat Katha) recited during fasting and worship to invoke the blessings of ${deity}.`,
    },
    {
      question: `What are the benefits of reading ${kathaTitle}?`,
      answer: `Reading ${kathaTitle} with devotion during the prescribed fast (vrat) is believed to fulfill wishes, remove obstacles, bring prosperity, and earn the grace of ${deity}.`,
    },
  ];
}

// ─── HowTo Schema (for Google rich results) ──────────────────────

export interface HowToStep {
  step: string;
  description: string;
}

export function generateHowToSchema(meta: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: meta.name,
    description: meta.description,
    step: meta.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.step,
      text: s.description,
    })),
  };
}
