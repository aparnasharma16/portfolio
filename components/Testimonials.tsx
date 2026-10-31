import { SectionHeading } from '@/components/SectionHeading';
import type { Testimonial } from '@/lib/portfolio-data';

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/** Quotes with a left rule; shared by the home preview and the impact page. */
export function TestimonialList({ items }: { items: readonly Testimonial[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {items.map((item) => (
        <figure key={item.quote} className="flex flex-col border-l-2 border-[var(--border)] pl-5">
          <blockquote className="flex-1 text-[0.95rem] leading-7 text-pretty text-[var(--foreground)]">
            &ldquo;{item.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--secondary)] text-[0.7rem] font-semibold text-[var(--muted-fg)]"
              aria-hidden
            >
              {initials(item.name)}
            </span>
            <span className="min-w-0 text-[0.8rem] leading-5">
              <span className="block font-semibold text-[var(--foreground)]">{item.name}</span>
              <span className="block text-[var(--muted-fg)]">
                {item.role}, {item.company}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Short version for the home page, linking to the full list. */
export function TestimonialsPreview({
  items,
  limit = 2,
  href,
}: {
  items: readonly Testimonial[];
  limit?: number;
  href: string;
}) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-preview">
      <SectionHeading
        id="testimonials-preview"
        title="Kind words"
        action={
          items.length > limit ? { href, subject: 'testimonials', count: items.length } : undefined
        }
      />
      <div className="mt-5">
        <TestimonialList items={items.slice(0, limit)} />
      </div>
    </section>
  );
}
