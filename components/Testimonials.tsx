'use client';

import { SectionIntro } from '@/components/SectionIntro';
import { MotionItem, MotionStagger } from '@/components/SubtleMotion';
import type { Testimonial } from '@/lib/portfolio-data';

export function Testimonials({ items }: { items: readonly Testimonial[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Testimonials"
        title="What colleagues say"
        description="Feedback from people I've worked with across teams and companies."
        icon={<QuoteIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 grid gap-4 sm:grid-cols-2" delay={0.04}>
        {items.map((item) => (
          <MotionItem key={item.quote}>
            <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5 transition-colors hover:border-[var(--foreground)]/10">
              <span className="text-[1.8rem] leading-none text-[var(--subtle)]" aria-hidden>
                &ldquo;
              </span>
              <p className="mt-1 flex-1 text-[0.86rem] leading-7 text-[var(--muted-fg)]">
                {item.quote}
              </p>
              <div className="mt-4 border-t border-[var(--border)] pt-3">
                <p className="text-[0.84rem] font-semibold text-[var(--foreground)]">{item.name}</p>
                <p className="text-[0.76rem] text-[var(--muted-fg)]">
                  {item.role} · {item.company}
                </p>
              </div>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

function QuoteIcon({ className }: { className?: string }) {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1Z" />
    </svg>
  );
}
