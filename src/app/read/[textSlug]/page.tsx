/**
 * Scripture Chapter Index — Server Component
 *
 * Lists all chapters for a scripture (e.g., Bhagavad Gita).
 * Pre-rendered at build time with unique metadata and schema.
 */

import { Metadata } from 'next';
import { getChaptersForText } from '@/data/chapters';
import { buildScriptureMetadata } from '@/lib/metadata';
import { generateCollectionPageSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getScriptureBreadcrumbs } from '@/lib/linking';
import SchemaScript from '@/components/seo/SchemaScript';
import ChapterIndexClient from './ChapterIndexClient';

// ─── Static Generation ──────────────────────────────────────────

const KNOWN_TEXTS = [
  { slug: 'bhagavad-gita', title: 'Srimad Bhagavad Gita' },
  { slug: 'shiva-purana', title: 'Shiva Maha Purana' },
  { slug: 'devi-mahatmya', title: 'Devi Mahatmya (Durga Saptashati)' },
];

export async function generateStaticParams() {
  return KNOWN_TEXTS.map((text) => ({
    textSlug: text.slug,
  }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────

interface PageProps {
  params: Promise<{ textSlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { textSlug } = await params;
  const textInfo = KNOWN_TEXTS.find((t) => t.slug === textSlug);
  const chapters = getChaptersForText(textSlug);

  return buildScriptureMetadata({
    title: textInfo?.title || textSlug.replace(/-/g, ' '),
    slug: textSlug,
    chapterCount: chapters.length,
  });
}

// ─── Page Component (Server) ─────────────────────────────────────

export default async function ScriptureChapterIndexPage({ params }: PageProps) {
  const { textSlug } = await params;

  const textInfo = KNOWN_TEXTS.find((t) => t.slug === textSlug);
  const displayTitle = textInfo?.title || textSlug.replace(/-/g, ' ');
  const chapters = getChaptersForText(textSlug);

  // ── Schema Markup ──
  const collectionSchema = generateCollectionPageSchema({
    name: displayTitle,
    description: `All chapters of ${displayTitle} with Sanskrit text and translations.`,
    url: `/read/${textSlug}`,
    numberOfItems: chapters.length,
  });

  const breadcrumbs = getScriptureBreadcrumbs(displayTitle);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SchemaScript schemas={[collectionSchema, breadcrumbSchema]} />
      <ChapterIndexClient
        textSlug={textSlug}
        displayTitle={displayTitle}
        chapters={chapters}
      />
    </>
  );
}
