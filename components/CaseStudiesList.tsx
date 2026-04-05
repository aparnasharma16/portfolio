'use client';

import { CompanyLogo } from '@/components/CompanyLogo';
import { SectionIntro } from '@/components/SectionIntro';
import { MotionItem, MotionPress, MotionStagger } from '@/components/SubtleMotion';
import { TechIcon } from '@/components/TechIcon';
import type { CaseStudy } from '@/lib/portfolio-data';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  studies: CaseStudy[];
  compact?: boolean;
};

export function CaseStudiesList({ studies, compact = false }: Props) {
  const visibleStudies = compact ? studies.slice(0, 3) : studies;

  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Case Studies"
        title="Company-safe examples of how I work"
        description="I have not centered this site around personal projects because my strongest work has come from shipping real products in real teams. These case studies focus on ownership, constraints, and outcomes without exposing confidential details."
        icon={<BriefcaseIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 space-y-5" delay={0.06}>
        {visibleStudies.map((study) => (
          <MotionItem key={`${study.company}-${study.title}`}>
            <article className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--background)] px-5 py-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors hover:border-[var(--foreground)]/10 md:px-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  {study.logo ? (
                    <CompanyLogo src={study.logo} alt={`${study.company} logo`} size="sm" />
                  ) : null}
                  <div>
                    <p className="text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted-fg)]">
                      {study.company}
                    </p>
                    <h3 className="mt-0.5 text-[1.02rem] font-bold tracking-[-0.02em] text-[var(--foreground)]">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-[0.84rem] text-[var(--muted-fg)]">{study.period}</p>
                  </div>
                </div>
              </div>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--secondary)] text-[var(--muted-fg)]">
                      <CompassIcon className="h-3.5 w-3.5" />
                    </span>
                    Context
                  </dt>
                  <dd className="mt-2 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.context}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--secondary)] text-[var(--muted-fg)]">
                      <AlertIcon className="h-3.5 w-3.5" />
                    </span>
                    Problem
                  </dt>
                  <dd className="mt-2 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.problem}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--secondary)] text-[var(--muted-fg)]">
                      <BuildIcon className="h-3.5 w-3.5" />
                    </span>
                    What I owned
                  </dt>
                  <dd className="mt-2 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.ownership}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--secondary)] text-[var(--muted-fg)]">
                      <TrendIcon className="h-3.5 w-3.5" />
                    </span>
                    What changed
                  </dt>
                  <dd className="mt-2 text-[0.86rem] leading-6 text-[var(--muted-fg)]">
                    {study.outcome}
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {study.tech.map((item) => (
                    <li key={item}>
                      <TechIcon name={item} />
                    </li>
                  ))}
                </ul>
              </div>
              {study.artifacts ? <ArtifactsList items={study.artifacts} /> : null}
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

const ARTIFACTS_PREVIEW = 12;

function ArtifactsList({ items }: { items: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const needsExpand = items.length > ARTIFACTS_PREVIEW;
  const visible = expanded ? items : items.slice(0, ARTIFACTS_PREVIEW);

  return (
    <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-4">
      <div className="flex items-center justify-between">
        <dt className="flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--secondary)] text-[var(--muted-fg)]">
            <PackageIcon className="h-3.5 w-3.5" />
          </span>
          {items.length} Components built
        </dt>
        {needsExpand ? (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-[0.78rem] font-medium text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]"
          >
            {expanded ? 'Show less' : 'Show all'}
          </button>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {visible.map((item) => (
          <span
            key={item}
            className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[0.72rem] font-medium text-[var(--foreground)]"
          >
            {item}
          </span>
        ))}
        <AnimatePresence>
          {!expanded && needsExpand ? (
            <motion.button
              key="more"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(true)}
              className="rounded-md border border-dashed border-[var(--border)] bg-[var(--secondary)] px-2 py-0.5 text-[0.72rem] font-medium text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]"
            >
              +{items.length - ARTIFACTS_PREVIEW} more
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

function PackageIcon({ className }: { className?: string }) {
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
      <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
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
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="8" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
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
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.8 2.9 16.2A2 2 0 0 0 4.6 19h14.8a2 2 0 0 0 1.7-2.8L13.7 3.8a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

function BuildIcon({ className }: { className?: string }) {
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
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3Z" />
    </svg>
  );
}

function TrendIcon({ className }: { className?: string }) {
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
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}
