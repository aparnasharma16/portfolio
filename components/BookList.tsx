'use client';

import { SectionIntro } from '@/components/SectionIntro';
import { MotionItem, MotionStagger } from '@/components/SubtleMotion';
import type { Book } from '@/lib/portfolio-data';

export function BookList({ books }: { books: readonly Book[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Reading"
        title="Books I recommend"
        description="A mix of engineering, philosophy, and personal growth that has shaped how I think and work."
        icon={<BookIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 space-y-3" delay={0.04}>
        {books.map((book) => (
          <MotionItem key={book.title}>
            <article className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-4 transition-colors hover:border-[var(--foreground)]/10">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
                <StatusIcon status={book.status} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[0.9rem] font-semibold text-[var(--foreground)]">
                    {book.title}
                  </h3>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[0.68rem] font-medium text-[var(--muted-fg)]">
                    {book.category}
                  </span>
                </div>
                <p className="mt-0.5 text-[0.8rem] text-[var(--muted-fg)]">{book.author}</p>
                {book.note ? (
                  <p className="mt-1.5 text-[0.8rem] italic leading-relaxed text-[var(--subtle)]">
                    {book.note}
                  </p>
                ) : null}
              </div>
              <StatusBadge status={book.status} />
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

function StatusIcon({ status }: { status: Book['status'] }) {
  switch (status) {
    case 'reading':
      return (
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
        </span>
      );
    case 'finished':
      return <CheckIcon className="h-3.5 w-3.5" />;
    case 'want-to-read':
      return <BookmarkIcon className="h-3.5 w-3.5" />;
  }
}

function StatusBadge({ status }: { status: Book['status'] }) {
  const labels: Record<Book['status'], string> = {
    reading: 'Reading',
    finished: 'Finished',
    'want-to-read': 'On list',
  };
  const colors: Record<Book['status'], string> = {
    reading:
      'border-[#86efac] bg-[#f0fdf4] text-[#166534] dark:border-[#14532d] dark:bg-[#052e16] dark:text-[#bbf7d0]',
    finished: 'border-[var(--border)] bg-[var(--secondary)] text-[var(--muted-fg)]',
    'want-to-read': 'border-[var(--border)] bg-[var(--background)] text-[var(--subtle)]',
  };

  return (
    <span
      className={`shrink-0 rounded-full border px-2 py-0.5 text-[0.68rem] font-medium ${colors[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

function BookmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" />
    </svg>
  );
}
