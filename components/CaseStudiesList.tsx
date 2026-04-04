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
        icon={<BriefcaseIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-6 space-y-4" delay={0.06}>
        {visibleStudies.map((study) => (
          <MotionItem key={`${study.company}-${study.title}`}>
            <article className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--background)] px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--secondary)] px-3 py-1 text-[0.72rem] font-medium text-[var(--muted-fg)]">
                    <BriefcaseIcon className="h-3.5 w-3.5" />
                    {study.company}
                  </div>
                  <h3 className="text-[1rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-[0.84rem] text-[var(--muted-fg)]">
                    {study.period}
                  </p>
                </div>
              </div>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    <CompassIcon className="h-3.5 w-3.5" />
                    Context
                  </dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.context}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    <AlertIcon className="h-3.5 w-3.5" />
                    Problem
                  </dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.problem}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    <BuildIcon className="h-3.5 w-3.5" />
                    What I owned
                  </dt>
                  <dd className="mt-1.5 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.ownership}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                    <TrendIcon className="h-3.5 w-3.5" />
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

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.8 2.9 16.2A2 2 0 0 0 4.6 19h14.8a2 2 0 0 0 1.7-2.8L13.7 3.8a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

function BuildIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3Z" />
    </svg>
  );
}

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}
