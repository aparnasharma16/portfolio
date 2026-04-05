'use client';

import { CompanyLogo } from '@/components/CompanyLogo';
import { SectionIntro } from '@/components/SectionIntro';
import { MotionItem, MotionStagger } from '@/components/SubtleMotion';
import type { ExperienceEntry } from '@/lib/portfolio-data';

export function CareerTimeline({ jobs }: { jobs: ExperienceEntry[] }) {
  const chronological = [...jobs].reverse();

  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Career Path"
        title="From trainee to senior engineer"
        description="Eight years of growth across PHP, frontend, full-stack, and engineering leadership."
        icon={<RouteIcon className="h-4 w-4" />}
      />
      <MotionStagger className="relative mt-7" delay={0.04}>
        <div
          className="absolute bottom-0 left-[0.9375rem] top-0 w-px bg-[var(--border)]"
          aria-hidden
        />

        {chronological.map((job, i) => (
          <MotionItem key={`${job.company}-${job.period}`} className={i > 0 ? 'mt-5' : ''}>
            <div className="relative flex items-start gap-4 pl-10">
              {job.current ? (
                <span className="absolute left-[0.45rem] top-2 flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
                </span>
              ) : (
                <span className="absolute left-[0.45rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-[var(--subtle)] bg-[var(--background)]" />
              )}

              {job.logo ? (
                <CompanyLogo src={job.logo} alt={`${job.company} logo`} size="sm" />
              ) : (
                <div className="h-8 w-8 shrink-0 rounded-lg border border-[var(--border)] bg-[var(--chip-bg)]" />
              )}

              <div className="min-w-0">
                <p className="text-[0.9rem] font-semibold text-[var(--foreground)]">{job.role}</p>
                <p className="text-[0.82rem] text-[var(--muted-fg)]">
                  {job.company} · {job.periodShort}
                </p>
              </div>
            </div>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

function RouteIcon({ className }: { className?: string }) {
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
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}
