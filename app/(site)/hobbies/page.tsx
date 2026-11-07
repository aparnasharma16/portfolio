import { BookList } from '@/components/BookList';
import { Hobbies } from '@/components/Hobbies';
import { PageHeader } from '@/components/PageHeader';
import { PageQuote } from '@/components/PageQuote';
import { hobbies, readingList, sitePageQuotes } from '@/lib/portfolio-data';
import { pageMetadata, titleFor } from '@/lib/metadata';
import type { Metadata } from 'next';

const description = 'The things I enjoy outside of engineering.';

export const metadata: Metadata = pageMetadata({ title: titleFor('Hobbies'), description });

export default function HobbiesPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-12">
      <PageHeader title="Hobbies" description="Life beyond work, and what I’m reading." />

      <div className="mt-12 space-y-14">
        <Hobbies items={hobbies} />
        <BookList books={readingList} />
      </div>

      <PageQuote quote={sitePageQuotes.hobbies} />
    </main>
  );
}
