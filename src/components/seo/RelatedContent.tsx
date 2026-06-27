/**
 * RelatedContent — "Also Read" internal linking section
 * 
 * Server Component that renders cross-content-type related items
 * with proper anchor text (not generic "click here").
 */

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { type RelatedItem } from '@/lib/linking';

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
}

export default function RelatedContent({
  items,
  title = 'Also Read',
}: RelatedContentProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-white/10">
      <div className="text-center mb-8 space-y-2">
        <h3 className="text-2xl font-serif font-medium text-starlight-50">
          {title}
        </h3>
        <div className="h-0.5 w-16 bg-gold-500 mx-auto opacity-60" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:bg-white/[0.07]"
          >
            {/* Image */}
            {item.imagePath && (
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {item.type}
                </span>
                {item.deity && (
                  <span className="text-[10px] text-starlight-400 uppercase tracking-wider">
                    {item.deity}
                  </span>
                )}
              </div>
              <h4 className="font-serif font-semibold text-starlight-50 group-hover:text-gold-400 transition-colors truncate">
                {item.title}
              </h4>
              {item.titleHindi && (
                <p className="text-sm text-starlight-400 font-[family-name:var(--font-sanskrit)] truncate">
                  {item.titleHindi}
                </p>
              )}
            </div>

            <ArrowRight
              size={16}
              className="text-starlight-400 group-hover:text-gold-500 group-hover:translate-x-1 transition-all self-center flex-shrink-0"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
