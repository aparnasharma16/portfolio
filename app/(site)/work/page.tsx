import { PageQuote } from '@/components/PageQuote';
import { MotionReveal } from '@/components/SubtleMotion';
import { WorkExperienceList } from '@/components/WorkExperienceList';
import { experience, profile, sitePageQuotes } from '@/lib/portfolio-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Work — ${profile.name}`,
  description: 'Work experience across companies and roles.',
  openGraph: {
    title: `Work — ${profile.name}`,
    description: 'Work experience across companies and roles.',
  },
};

export default function WorkPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-10 md:py-14">
      <MotionReveal>
        <section className="relative overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--chip-bg),var(--background))] px-6 py-7 shadow-[0_16px_48px_-32px_rgba(15,23,42,0.25)] md:px-8 md:py-8">
          <div
            className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[var(--secondary)]/60 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--subtle)]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="7" width="18" height="13" rx="2.5" />
                <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
              </svg>
              Career Journey
            </div>
            <h1 className="mt-4 text-[1.65rem] font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] md:text-[2rem]">
              Work Experience
            </h1>
            <p className="mt-3 max-w-xl text-[0.9rem] leading-7 text-[var(--muted-fg)]">
              From PHP and CMS platforms to leading full-stack teams building
              campaign management systems at PayPal — here is my journey across
              {' '}{profile.yearsExperience} of shipping real products.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[0.78rem] font-medium text-[var(--foreground)]">
                {profile.yearsExperience} experience
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[0.78rem] font-medium text-[var(--foreground)]">
                5 companies
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#86efac] bg-[#f0fdf4] px-3 py-1 text-[0.78rem] font-medium text-[#166534] dark:border-[#14532d] dark:bg-[#052e16] dark:text-[#bbf7d0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" aria-hidden />
                Currently at PayPal
              </span>
            </div>
          </div>
        </section>
      </MotionReveal>
      <div className="mt-10">
        <WorkExperienceList jobs={experience} />
      </div>
      <MotionReveal delay={0.06}>
        <PageQuote quote={sitePageQuotes.work} />
      </MotionReveal>
    </main>
  );
}
