/**
 * Katha Detail Page — Server Component
 *
 * Pre-renders all katha pages at build time with unique metadata,
 * Article + FAQ + Breadcrumb schema, and internal linking.
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { kathas } from '@/data/kathas';
import { buildKathaMetadata } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateKathaFAQs,
} from '@/lib/schema';
import { getKathaBreadcrumbs, getRelatedContent } from '@/lib/linking';
import SchemaScript from '@/components/seo/SchemaScript';
import RelatedContent from '@/components/seo/RelatedContent';
import KathaReadingClient from './KathaReadingClient';

// ─── Static Generation ──────────────────────────────────────────

export async function generateStaticParams() {
  return kathas.map((katha) => ({
    slug: katha.slug,
  }));
}

// ─── Dynamic Metadata ────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const katha = kathas.find((k) => k.slug === slug);

  if (!katha) {
    return { title: 'Katha Not Found | DharmaText' };
  }

  return buildKathaMetadata(katha);
}

// ─── Page Component (Server) ─────────────────────────────────────

export default async function KathaPage({ params }: PageProps) {
  const { slug } = await params;
  const katha = kathas.find((k) => k.slug === slug);

  if (!katha) {
    notFound();
  }

  // ── Schema Markup ──
  const articleSchema = generateArticleSchema({
    title: katha.title,
    titleHindi: katha.titleHindi,
    description: katha.description,
    imagePath: katha.imagePath,
    slug: `/kathas/${slug}`,
    type: 'katha',
  });

  const faqItems = generateKathaFAQs(katha.title, katha.deity, katha.description);
  const faqSchema = generateFAQSchema(faqItems);

  const breadcrumbs = getKathaBreadcrumbs(katha.title);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // ── Related Content ──
  const relatedItems = getRelatedContent(slug, 'katha', katha.deity);

  return (
    <>
      {/* Structured Data */}
      <SchemaScript schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* Interactive Client UI */}
      <KathaReadingClient katha={katha} slug={slug} />

      {/* Related Content */}
      <div className="max-w-3xl mx-auto px-4 -mt-16 pb-16">
        <RelatedContent items={relatedItems} />
      </div>
    </>
  );
}
