/**
 * Aarti Detail Page — Server Component
 * 
 * This is the most important page for SEO. It:
 * 1. Pre-renders at build time (generateStaticParams)
 * 2. Produces unique metadata per aarti (generateMetadata)
 * 3. Embeds Article + FAQ + Breadcrumb JSON-LD schema
 * 4. Passes data to AartiReadingClient for interactivity
 * 
 * When someone searches "Hanuman Chalisa", this page will rank
 * because Google can now see ALL the content as static HTML.
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { aartis, getAartiBySlug, getAartiVerses } from '@/data/aartis';
import { buildAartiMetadata } from '@/lib/metadata';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateAartiFAQs,
} from '@/lib/schema';
import { getAartiBreadcrumbs, getRelatedContent } from '@/lib/linking';
import SchemaScript from '@/components/seo/SchemaScript';
import RelatedContent from '@/components/seo/RelatedContent';
import AartiReadingClient from './AartiReadingClient';

// ─── Static Generation ──────────────────────────────────────────
// Pre-render ALL aarti pages at build time → instant load, full SEO

export async function generateStaticParams() {
  return aartis.map((aarti) => ({
    slug: aarti.slug,
  }));
}

// ─── Dynamic Metadata (unique per aarti) ─────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const aarti = getAartiBySlug(slug);

  if (!aarti) {
    return { title: 'Aarti Not Found | DharmaText' };
  }

  return buildAartiMetadata(aarti);
}

// ─── Page Component (Server) ─────────────────────────────────────

export default async function AartiPage({ params }: PageProps) {
  const { slug } = await params;
  const aarti = getAartiBySlug(slug);

  if (!aarti) {
    notFound();
  }

  const verses = getAartiVerses(aarti.id);

  // ── Schema Markup ──
  const articleSchema = generateArticleSchema({
    title: aarti.title,
    titleHindi: aarti.titleHindi,
    description: aarti.description,
    imagePath: aarti.imagePath,
    slug: `/aartis/${slug}`,
    type: 'aarti',
  });

  const faqItems = generateAartiFAQs(aarti.title, verses);
  const faqSchema = generateFAQSchema(faqItems);

  const breadcrumbs = getAartiBreadcrumbs(aarti.title);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // ── Related Content ──
  const relatedItems = getRelatedContent(slug, 'aarti', aarti.deity);

  return (
    <>
      {/* Structured Data — invisible to users, critical for Google */}
      <SchemaScript schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* Interactive Client UI — preserves existing UX exactly */}
      <AartiReadingClient aarti={aarti} verses={verses} slug={slug} />

      {/* Related Content (Server-rendered, internal links for SEO) */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 pb-16">
        <RelatedContent items={relatedItems} />
      </div>
    </>
  );
}
