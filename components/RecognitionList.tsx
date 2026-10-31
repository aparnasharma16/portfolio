import { SectionIntro } from '@/components/SectionIntro';
import { TestimonialList } from '@/components/Testimonials';
import type { Testimonial } from '@/lib/portfolio-data';

type Award = {
  title: string;
  org: string;
  date: string;
  note: string;
};

/** Other people vouching: certifications and awards, then words from colleagues (if any). */
export function Recognition({
  awards,
  testimonials,
}: {
  awards: readonly Award[];
  testimonials: readonly Testimonial[];
}) {
  return (
    <section id="recognition" aria-labelledby="recognition-title" className="scroll-mt-20">
      <SectionIntro id="recognition-title" title="Recognition" />

      <h3 className="mt-6 text-[0.95rem] font-semibold text-[var(--foreground)]">
        Certifications and awards
      </h3>
      <ul className="mt-3 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {awards.map((award) => (
          <li
            key={`${award.title}-${award.date}`}
            className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6"
          >
            <div>
              <p className="text-[0.92rem] font-semibold text-[var(--foreground)]">{award.title}</p>
              <p className="text-[0.8rem] font-medium text-[var(--muted-fg)]">{award.org}</p>
              <p className="mt-1 text-[0.84rem] leading-6 text-[var(--muted-fg)]">{award.note}</p>
            </div>
            <p className="text-[0.78rem] text-[var(--muted-fg)] tabular-nums sm:pt-0.5 sm:text-right">
              {award.date}
            </p>
          </li>
        ))}
      </ul>

      {testimonials.length > 0 ? (
        <>
          <h3
            id="testimonials"
            className="mt-10 scroll-mt-20 text-[0.95rem] font-semibold text-[var(--foreground)]"
          >
            Kind words
          </h3>
          <div className="mt-4">
            <TestimonialList items={testimonials} />
          </div>
        </>
      ) : null}
    </section>
  );
}
