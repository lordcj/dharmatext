/**
 * Chapter Reading Page — Server Component
 *
 * Pre-renders all scripture chapter pages at build time.
 * Each chapter gets unique metadata and Article + Breadcrumb schema.
 */

import { Metadata } from 'next';
import { getChaptersForText } from '@/data/chapters';
import { getChapterVerses } from '@/data/mockGitaChapters';
import { buildChapterMetadata } from '@/lib/metadata';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getChapterBreadcrumbs } from '@/lib/linking';
import SchemaScript from '@/components/seo/SchemaScript';
import ChapterReadingClient from './ChapterReadingClient';

// ─── Static Generation ──────────────────────────────────────────

const TEXT_TITLE_MAP: Record<string, string> = {
  'bhagavad-gita': 'Srimad Bhagavad Gita',
  'shiva-purana': 'Shiva Maha Purana',
  'devi-mahatmya': 'Devi Mahatmya',
};

export async function generateStaticParams() {
  const texts = ['bhagavad-gita', 'shiva-purana', 'devi-mahatmya'];
  const params: { textSlug: string; chapterId: string }[] = [];

  for (const textSlug of texts) {
    const chapters = getChaptersForText(textSlug);
    for (const chapter of chapters) {
      params.push({
        textSlug,
        chapterId: String(chapter.id),
      });
    }
  }

  return params;
}

// ─── Dynamic Metadata ────────────────────────────────────────────

interface PageProps {
  params: Promise<{ textSlug: string; chapterId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { textSlug, chapterId } = await params;
  const chapters = getChaptersForText(textSlug);
  const currentChapter = chapters.find((c) => c.id === Number(chapterId));
  const textTitle = TEXT_TITLE_MAP[textSlug] || textSlug.replace(/-/g, ' ');

  if (!currentChapter) {
    return { title: `Chapter ${chapterId} | ${textTitle} | DharmaText` };
  }

  return buildChapterMetadata({
    chapterId: currentChapter.id,
    chapterTitle: currentChapter.title,
    chapterTranslation: currentChapter.translation,
    chapterDesc: currentChapter.desc,
    verseCount: currentChapter.verses,
    textSlug,
    textTitle,
  });
}

// ─── Page Component (Server) ─────────────────────────────────────

export default async function ChapterPage({ params }: PageProps) {
  const { textSlug, chapterId } = await params;

  // Load data
  const verses = getChapterVerses(Number(chapterId));
  const chapters = getChaptersForText(textSlug);
  const currentChapter = chapters.find((c) => c.id === Number(chapterId));
  const textTitle = TEXT_TITLE_MAP[textSlug] || textSlug.replace(/-/g, ' ');

  // Compute display values
  const defaultGradient = 'from-amber-300 via-orange-500 to-red-500';
  const titleGradient = currentChapter?.colorGradient || defaultGradient;
  const displayTitle = currentChapter?.title || `Chapter ${chapterId}`;
  const displayTranslation = currentChapter?.translation || '';
  const hasNextChapter = currentChapter
    ? currentChapter.id < chapters.length
    : Number(chapterId) < 18;

  // ── Schema Markup ──
  const articleSchema = generateArticleSchema({
    title: `${textTitle} - Chapter ${chapterId}: ${displayTitle}`,
    description: currentChapter?.desc || `Chapter ${chapterId} of ${textTitle}`,
    slug: `/read/${textSlug}/${chapterId}`,
    type: 'chapter',
    inLanguage: ['sa', 'hi', 'en'],
  });

  const breadcrumbs = getChapterBreadcrumbs(
    textTitle,
    textSlug,
    `Chapter ${chapterId}: ${displayTitle}`
  );
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SchemaScript schemas={[articleSchema, breadcrumbSchema]} />
      <ChapterReadingClient
        textSlug={textSlug}
        chapterId={chapterId}
        verses={verses}
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        displayTitle={displayTitle}
        displayTranslation={displayTranslation}
        titleGradient={titleGradient}
        hasNextChapter={hasNextChapter}
      />
    </>
  );
}
