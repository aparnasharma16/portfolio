import { SectionIntro } from '@/components/SectionIntro';
import { StatusBadge } from '@/components/StatusDot';
import type { Book } from '@/lib/portfolio-data';

const shelves = [
  { status: 'reading', title: 'Reading now' },
  { status: 'finished', title: 'Favourites' },
  { status: 'want-to-read', title: 'Up next' },
] as const satisfies readonly { status: Book['status']; title: string }[];

/** Reading list grouped into shelves, so "what is she reading now" is the first answer. */
export function BookList({ books }: { books: readonly Book[] }) {
  return (
    <section aria-labelledby="reading-title">
      <SectionIntro
        id="reading-title"
        title="Bookshelf"
        description="Engineering and habits: the books that shaped how I think and work."
      />
      <div className="mt-6 space-y-8">
        {shelves.map((shelf) => {
          const shelfBooks = books.filter((book) => book.status === shelf.status);
          if (shelfBooks.length === 0) return null;
          return (
            <div key={shelf.status}>
              <h3 className="text-[0.86rem] font-semibold text-[var(--foreground)]">
                {shelf.title}
              </h3>
              <ul className="mt-2 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {shelfBooks.map((book) => (
                  <li key={book.title} className="py-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="text-[0.92rem] text-[var(--muted-fg)]">
                        <span className="font-semibold text-[var(--foreground)]">{book.title}</span>
                        <span className="sr-only">, </span>
                        <span className="block text-[0.8rem]">{book.author}</span>
                      </p>
                      {book.status === 'reading' ? (
                        <StatusBadge>Reading</StatusBadge>
                      ) : (
                        <span className="text-[0.76rem] text-[var(--muted-fg)]">
                          {book.category}
                        </span>
                      )}
                    </div>
                    {book.note ? (
                      <p className="mt-1 text-[0.84rem] leading-6 text-[var(--muted-fg)]">
                        {book.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
