/**
 * Aarti Detail Page — Server Component
 * 
 * This is the most important page for SEO. It:
 * 1. Pre-renders at build time (generateStaticParams)
 * 2. Produces unique metadata per aarti (generateMetadata)
 * 3. Embeds Article + FAQ + Breadcrumb + HowTo JSON-LD schema
 * 4. Server-renders ALL content (Hindi, English, meanings) for crawlers
 * 5. Passes data to AartiReadingClient for interactivity
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
  generateHowToSchema,
} from '@/lib/schema';
import { getAartiBreadcrumbs, getRelatedContent } from '@/lib/linking';
import { generateAartiSEOContent } from '@/lib/seoContent';
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

  // ── SEO Content (auto-generated) ──
  const seoContent = generateAartiSEOContent({
    title: aarti.title,
    titleHindi: aarti.titleHindi,
    description: aarti.description,
    deity: aarti.deity,
    verseCount: aarti.verseCount,
    slug,
  });

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

  const howToSchema = generateHowToSchema({
    name: `How to Recite ${aarti.title}`,
    description: `Step-by-step guide to reciting ${aarti.title} (${aarti.titleHindi}) with proper method and devotion.`,
    steps: seoContent.howToRecite,
  });

  // ── Related Content ──
  const relatedItems = getRelatedContent(slug, 'aarti', aarti.deity);

  return (
    <>
      {/* Structured Data — invisible to users, critical for Google */}
      <SchemaScript schemas={[articleSchema, faqSchema, breadcrumbSchema, howToSchema]} />

      {/* 
        Server-Rendered SEO Content — visible to crawlers AND users
        This adds 400+ words of unique content per page 
      */}
      <div className="max-w-4xl mx-auto px-4 pt-40 pb-8">
        <article className="prose prose-invert max-w-none">
          {/* About Section — English */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-2xl font-serif font-medium text-starlight-50 mb-4">
              About {aarti.title}
            </h2>
            <p className="text-starlight-200 leading-relaxed text-base font-serif">
              {seoContent.aboutSection}
            </p>

            {/* About Section — Hindi */}
            <p lang="hi" className="text-starlight-300 leading-relaxed text-base font-[family-name:var(--font-sanskrit)] mt-4 border-t border-white/5 pt-4">
              {seoContent.aboutSectionHindi}
            </p>
          </section>

          {/* When to Recite */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-xl font-serif font-medium text-starlight-50 mb-3">
              When to Recite {aarti.title}
            </h2>
            <p className="text-starlight-200 leading-relaxed text-base font-serif">
              {seoContent.whenToRecite}
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-xl font-serif font-medium text-starlight-50 mb-3">
              Benefits of Reciting {aarti.title}
            </h2>
            <ul className="space-y-2 list-none pl-0">
              {seoContent.benefits.map((benefit, i) => (
                <li key={i} className="text-starlight-200 text-sm font-serif flex items-start gap-2">
                  <span className="text-gold-400 mt-1 flex-shrink-0">✦</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How to Recite (earns HowTo rich result!) */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-xl font-serif font-medium text-starlight-50 mb-4">
              How to Recite {aarti.title} — Step by Step
            </h2>
            <ol className="space-y-4 list-none pl-0 counter-reset-none">
              {seoContent.howToRecite.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-starlight-50 font-semibold text-sm mb-1">{step.step}</h3>
                    <p className="text-starlight-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </article>

        {/* Divider before reading experience */}
        <div className="flex items-center gap-4 my-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/30"></span>
          <span className="text-sm text-gold-400 font-serif font-medium uppercase tracking-widest">
            Read {aarti.title}
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/30"></span>
        </div>
      </div>

      {/* 
        Server-Rendered Full Text for Crawlers
        This hidden article contains ALL verse text so Google indexes it.
        The interactive client UI is shown to users instead.
      */}
      <article className="sr-only" aria-hidden="true">
        <h1>{aarti.title} - {aarti.titleHindi}</h1>
        <p>{aarti.description}</p>
        {verses.map((verse) => (
          <div key={verse.id}>
            <p lang="hi">{verse.textHindi}</p>
            <p>{verse.transliteration}</p>
            {verse.textEnglish && <p>{verse.textEnglish}</p>}
            {verse.meaningHindi && <p lang="hi">{verse.meaningHindi}</p>}
          </div>
        ))}
      </article>

      {/* Interactive Client UI — preserves existing UX exactly */}
      <AartiReadingClient aarti={aarti} verses={verses} slug={slug} />

      {/* Related Content (Server-rendered, internal links for SEO) */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 pb-16">
        <RelatedContent items={relatedItems} />
      </div>
    </>
  );
}
