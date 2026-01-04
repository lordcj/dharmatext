import { notFound } from 'next/navigation';
import { getContentBySlug } from '@/lib/content';
import TextReader from '@/components/reader/TextReader';
import AdContainer from '@/components/monetization/AdContainer';
import PujaSamagri from '@/components/monetization/PujaSamagri';

interface PageProps {
    params: Promise<{
        slug: string;
        category: string;
    }>;
}

export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const content = await getContentBySlug(params.slug);

    if (!content) return { title: 'Not Found' };

    const mainTitle = content.translations.find(t => t.language_code === 'en')?.title || content.translations[0].title;

    return {
        title: `${mainTitle} | DharmaText`,
        description: `Read ${mainTitle} in Hindi, Sanskrit, and English. Pure text, no distractions.`,
    };
}

export default async function ContentPage(props: PageProps) {
    const params = await props.params;
    const content = await getContentBySlug(params.slug);

    if (!content) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-sand-50 dark:bg-slate-950">

            {/* Reader Component handles the main text display */}
            <TextReader translations={content.translations} />

            {/* Monetization Section */}
            <div className="max-w-3xl mx-auto px-4 pb-12">
                <AdContainer slotId="content-bottom" debugLabel="CONTENT-BOTTOM" />
                <PujaSamagri />
            </div>

        </div>
    );
}
