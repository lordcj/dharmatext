/**
 * Internal Linking Engine
 * 
 * Produces related content suggestions, breadcrumb trails,
 * and cross-content-type links for hub-and-spoke SEO architecture.
 */

import { aartis } from '@/data/aartis';
import { kathas } from '@/data/kathas';
import type { BreadcrumbItem } from './schema';

// ─── Types ───────────────────────────────────────────────────────

export interface RelatedItem {
  title: string;
  titleHindi?: string;
  href: string;
  type: 'Aarti' | 'Katha' | 'Scripture';
  deity?: string;
  imagePath?: string;
  description: string;
}

// ─── Related Content ─────────────────────────────────────────────

/**
 * Get related content for any page.
 * Uses deity-based matching + same-type fallback for relevance.
 */
export function getRelatedContent(
  currentSlug: string,
  contentType: 'aarti' | 'katha' | 'scripture',
  deity?: string,
  limit = 4
): RelatedItem[] {
  const results: RelatedItem[] = [];

  // 1. Same-deity aartis (cross-type linking for kathas, or same-type for aartis)
  if (contentType !== 'aarti' || deity) {
    const deityAartis = deity
      ? aartis.filter(
          (a) =>
            a.slug !== currentSlug &&
            a.deity.toLowerCase().includes(deity.toLowerCase())
        )
      : [];

    for (const a of deityAartis.slice(0, 2)) {
      results.push({
        title: a.title,
        titleHindi: a.titleHindi,
        href: `/aartis/${a.slug}`,
        type: 'Aarti',
        deity: a.deity,
        imagePath: a.imagePath,
        description: a.description,
      });
    }
  }

  // 2. Same-deity kathas
  if (contentType !== 'katha' || deity) {
    const deityKathas = deity
      ? kathas.filter(
          (k) =>
            k.slug !== currentSlug &&
            k.deity.toLowerCase().includes(deity.toLowerCase())
        )
      : [];

    for (const k of deityKathas.slice(0, 2)) {
      results.push({
        title: k.title,
        titleHindi: k.titleHindi,
        href: `/kathas/${k.slug}`,
        type: 'Katha',
        deity: k.deity,
        imagePath: k.imagePath,
        description: k.description,
      });
    }
  }

  // 3. Fill remaining slots with popular content (different from current)
  if (results.length < limit) {
    const popularAartis = aartis
      .filter((a) => a.slug !== currentSlug && !results.find((r) => r.href === `/aartis/${a.slug}`))
      .slice(0, limit - results.length);

    for (const a of popularAartis) {
      results.push({
        title: a.title,
        titleHindi: a.titleHindi,
        href: `/aartis/${a.slug}`,
        type: 'Aarti',
        deity: a.deity,
        imagePath: a.imagePath,
        description: a.description,
      });
    }
  }

  return results.slice(0, limit);
}

// ─── Breadcrumb Trails ───────────────────────────────────────────

export function getAartiBreadcrumbs(aartiTitle: string): BreadcrumbItem[] {
  return [
    { name: 'Home', href: '/' },
    { name: 'Aartis', href: '/aartis' },
    { name: aartiTitle, href: '#' },
  ];
}

export function getKathaBreadcrumbs(kathaTitle: string): BreadcrumbItem[] {
  return [
    { name: 'Home', href: '/' },
    { name: 'Kathas', href: '/kathas' },
    { name: kathaTitle, href: '#' },
  ];
}

export function getScriptureBreadcrumbs(scriptureTitle: string): BreadcrumbItem[] {
  return [
    { name: 'Home', href: '/' },
    { name: 'Scriptures', href: '/scriptures' },
    { name: scriptureTitle, href: '#' },
  ];
}

export function getChapterBreadcrumbs(
  textTitle: string,
  textSlug: string,
  chapterTitle: string
): BreadcrumbItem[] {
  return [
    { name: 'Home', href: '/' },
    { name: 'Scriptures', href: '/scriptures' },
    { name: textTitle, href: `/read/${textSlug}` },
    { name: chapterTitle, href: '#' },
  ];
}
