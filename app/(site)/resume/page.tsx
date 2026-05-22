import { PageQuote } from '@/components/PageQuote';
import { MotionPress, MotionReveal } from '@/components/SubtleMotion';
import { profile, sitePageQuotes } from '@/lib/portfolio-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: 'View and download resume.',
  openGraph: {
    title: `Resume — ${profile.name}`,
    description: 'View and download resume.',
  },
};

export default function ResumePage() {
  const pdf = profile.resumePdfPath;

  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-20">
      <MotionReveal>
        <section className="relative overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--chip-bg),var(--background))] px-6 py-7 shadow-[0_16px_48px_-32px_rgba(15,23,42,0.25)] md:px-8 md:py-8">
          <div
            className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-[var(--secondary)]/60 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--subtle)]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
                <path d="M14 3.5V8h4" />
                <path d="M9 12h6M9 16h6" />
              </svg>
              Professional Resume
            </div>
            <h1 className="mt-4 text-[1.65rem] font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] md:text-[2rem]">
              Resume
            </h1>
            <p className="mt-3 max-w-xl text-[0.9rem] leading-7 text-[var(--muted-fg)]">
              View and download my professional resume — {profile.yearsExperience} of
              building scalable full-stack applications across payments, commerce, and
              campaign management platforms.
            </p>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.04}>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
              Last updated
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]">{profile.resumeLastUpdated}</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
              Primary focus
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]">{profile.primaryFocus}</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
              Download
            </p>
            {pdf ? (
              <MotionPress className="mt-2 inline-flex">
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
                >
                  Open PDF
                </a>
              </MotionPress>
            ) : (
              <p className="mt-2 text-sm text-[var(--muted-fg)]">PDF will be added soon</p>
            )}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.06}>
        {pdf ? (
          <div className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] shadow-lg">
            <iframe title="Resume PDF" src={pdf} className="h-[75vh] w-full" />
            <div className="border-t border-[var(--border)] p-4 text-center">
              <MotionPress className="inline-flex">
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
                >
                  Open in new tab
                </a>
              </MotionPress>
            </div>
          </div>
        ) : (
          <div className="mt-12 rounded-[1.5rem] border border-dashed border-[var(--border-strong)] bg-[var(--chip-bg)] px-6 py-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--subtle)]">
              Resume coming soon
            </p>
            <h2 className="mt-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
              A polished PDF version is on the way
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted-fg)]">
              In the meantime, the portfolio already reflects my current role, focus areas, case
              studies, and delivery highlights. If you&apos;d like the resume before this page is
              updated, feel free to reach out directly by email or LinkedIn.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <MotionPress className="inline-flex">
                <a
                  href={profile.links.email}
                  className="rounded-lg bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
                >
                  Email me
                </a>
              </MotionPress>
              <MotionPress className="inline-flex">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
                >
                  LinkedIn
                </a>
              </MotionPress>
            </div>
          </div>
        )}
      </MotionReveal>
      <MotionReveal delay={0.08}>
        <PageQuote quote={sitePageQuotes.resume} />
      </MotionReveal>
    </main>
  );
}
