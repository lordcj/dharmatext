/**
 * Katha Detail Page — Server Component
 *
 * Pre-renders all katha pages at build time with unique metadata,
 * Article + FAQ + Breadcrumb + HowTo schema, and internal linking.
 * 
 * Server-renders ALL content (Hindi + English) for crawlers.
 * Adds auto-generated SEO sections (About, Vrat Vidhi, Benefits).
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
  generateHowToSchema,
} from '@/lib/schema';
import { getKathaBreadcrumbs, getRelatedContent } from '@/lib/linking';
import { generateKathaSEOContent } from '@/lib/seoContent';
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

  // ── SEO Content (auto-generated) ──
  const seoContent = generateKathaSEOContent({
    title: katha.title,
    titleHindi: katha.titleHindi,
    description: katha.description,
    deity: katha.deity,
    readTime: katha.readTime,
    slug,
  });

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

  const howToSchema = generateHowToSchema({
    name: `How to Observe ${katha.title} Vrat`,
    description: `Complete step-by-step guide to observing the ${katha.title} (${katha.titleHindi}) fast with proper puja vidhi.`,
    steps: seoContent.vratVidhi,
  });

  // ── Related Content ──
  const relatedItems = getRelatedContent(slug, 'katha', katha.deity);

  return (
    <>
      {/* Structured Data */}
      <SchemaScript schemas={[articleSchema, faqSchema, breadcrumbSchema, howToSchema]} />

      {/* 
        Server-Rendered SEO Content — visible to crawlers AND users
        Adds 400+ words of unique content per page 
      */}
      <div className="max-w-3xl mx-auto px-4 pt-40 pb-8">
        <article className="prose prose-invert max-w-none">
          {/* About Section */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-2xl font-serif font-medium text-starlight-50 mb-4">
              About {katha.title}
            </h2>
            <p className="text-starlight-200 leading-relaxed text-base font-serif">
              {seoContent.aboutSection}
            </p>
            <p lang="hi" className="text-starlight-300 leading-relaxed text-base font-[family-name:var(--font-sanskrit)] mt-4 border-t border-white/5 pt-4">
              {seoContent.aboutSectionHindi}
            </p>
          </section>

          {/* Vrat Vidhi (Fasting Method) */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-xl font-serif font-medium text-starlight-50 mb-4">
              व्रत विधि — How to Observe {katha.title} Vrat
            </h2>
            <ol className="space-y-4 list-none pl-0">
              {seoContent.vratVidhi.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">
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

          {/* When to Observe */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-xl font-serif font-medium text-starlight-50 mb-3">
              When to Observe This Vrat
            </h2>
            <p className="text-starlight-200 leading-relaxed text-base font-serif">
              {seoContent.whenToObserve}
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-8 p-6 rounded-xl bg-white/[0.03] border border-white/5">
            <h2 className="text-xl font-serif font-medium text-starlight-50 mb-3">
              Benefits of Reading {katha.title}
            </h2>
            <ul className="space-y-2 list-none pl-0">
              {seoContent.benefits.map((benefit, i) => (
                <li key={i} className="text-starlight-200 text-sm font-serif flex items-start gap-2">
                  <span className="text-amber-400 mt-1 flex-shrink-0">✦</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* Divider before reading experience */}
        <div className="flex items-center gap-4 my-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30"></span>
          <span className="text-sm text-amber-400 font-serif font-medium uppercase tracking-widest">
            Read the Katha
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30"></span>
        </div>
      </div>

      {/* 
        Server-Rendered Full Text for Crawlers
        Contains ALL katha content (Hindi + English) so Google indexes it.
      */}
      <article className="sr-only" aria-hidden="true">
        <h1>{katha.title} - {katha.titleHindi}</h1>
        <p>{katha.description}</p>
        {katha.descriptionHindi && <p lang="hi">{katha.descriptionHindi}</p>}
        {katha.chapters.map((chapter) => (
          <div key={chapter.id}>
            <h2>{chapter.title}{chapter.titleHindi ? ` - ${chapter.titleHindi}` : ''}</h2>
            {chapter.content.map((p, i) => <p key={`en-${i}`}>{p}</p>)}
            {chapter.contentHindi && chapter.contentHindi.map((p, i) => (
              <p key={`hi-${i}`} lang="hi">{p}</p>
            ))}
          </div>
        ))}
      </article>

      {/* Interactive Client UI */}
      <KathaReadingClient katha={katha} slug={slug} />

      {/* Related Content */}
      <div className="max-w-3xl mx-auto px-4 -mt-16 pb-16">
        <RelatedContent items={relatedItems} />
      </div>
    </>
  );
}
