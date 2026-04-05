'use client';

import { SectionIntro } from '@/components/SectionIntro';
import { MotionItem, MotionStagger } from '@/components/SubtleMotion';

type Item = {
  title: string;
  org: string;
  date: string;
  note: string;
};

export function RecognitionList({ items }: { items: readonly Item[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Recognition"
        title="Certifications and awards"
        description="Signals of consistency matter too. These recognitions support the delivery and ownership story shown across the rest of the portfolio."
        icon={<AwardIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 space-y-4" delay={0.04}>
        {items.map((item) => (
          <MotionItem key={`${item.title}-${item.date}`}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-5 transition-colors hover:border-[var(--foreground)]/10">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-[0.94rem] font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.82rem] text-[var(--muted-fg)]">{item.org}</p>
                </div>
                <p className="shrink-0 text-[0.78rem] font-medium text-[var(--subtle)] sm:text-right">
                  {item.date}
                </p>
              </div>
              <p className="mt-3 text-[0.85rem] leading-6 text-[var(--muted-fg)]">{item.note}</p>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

function AwardIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 13.5-1.5 7 5-2.8 5 2.8-1.5-7" />
    </svg>
  );
}
