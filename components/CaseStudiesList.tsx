"use client";

import Link from "next/link";
import type { CaseStudy } from "@/lib/portfolio-data";
import { SectionIntro } from "@/components/SectionIntro";
import { MotionItem, MotionPress, MotionStagger } from "@/components/SubtleMotion";

type Props = {
  studies: CaseStudy[];
  compact?: boolean;
};

export function CaseStudiesList({ studies, compact = false }: Props) {
  const visibleStudies = compact ? studies.slice(0, 3) : studies;

  return (
    <section className="mt-14">
      <SectionIntro
        eyebrow="Case Studies"
        title="Company-safe examples of how I work"
        description="I have not centered this site around personal projects because my strongest work has come from shipping real products in real teams. These case studies focus on ownership, constraints, and outcomes without exposing confidential details."
      />
      <MotionStagger className="mt-6 space-y-4" delay={0.06}>
        {visibleStudies.map((study) => (
          <MotionItem key={`${study.company}-${study.title}`}>
            <article className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--background)] px-5 py-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-[1rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-[0.84rem] text-[var(--muted-fg)]">
                    {study.company} · {study.period}
                  </p>
                </div>
              </div>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    Context
                  </dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.context}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    Problem
                  </dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.problem}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    What I owned
                  </dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.ownership}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    What changed
                  </dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.outcome}
                  </dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--secondary)] px-3 py-1 text-[0.75rem] text-[var(--foreground)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
      {compact ? (
        <div className="mt-6">
          <MotionPress className="inline-flex">
            <Link
              href="/impact"
              className="inline-flex items-center rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
            >
              View all impact highlights
            </Link>
          </MotionPress>
        </div>
      ) : null}
    </section>
  );
}
