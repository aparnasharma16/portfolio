import type { Metadata } from "next";
import Link from "next/link";
import { PageQuote } from "@/components/PageQuote";
import { CaseStudiesList } from "@/components/CaseStudiesList";
import { CoreExpertiseGroups } from "@/components/ExpertiseGrid";
import { LeadershipHighlights } from "@/components/LeadershipHighlights";
import { RecognitionList } from "@/components/RecognitionList";
import { FeaturedWinsGrid } from "@/components/FeaturedWins";
import { MotionPress, MotionReveal } from "@/components/SubtleMotion";
import {
  accomplishments,
  caseStudies,
  coreExpertise,
  featuredWins,
  leadershipHighlights,
  profile,
  sitePageQuotes,
} from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `Impact — ${profile.name}`,
  description: "Case studies, technical strengths, and proof of engineering impact.",
};

export default function ImpactPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-10 md:py-14">
      <MotionReveal>
        <section className="relative overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--chip-bg),var(--background))] px-6 py-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] md:px-8 md:py-9">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--secondary)]/70 blur-3xl" aria-hidden />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--subtle)]">
              <SparkIcon className="h-3.5 w-3.5" />
              Proof of impact
            </div>
            <h1 className="mt-4 max-w-xl text-[1.85rem] font-bold tracking-[-0.04em] text-[var(--foreground)] md:text-[2.15rem]">
              How I create product and engineering impact
            </h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[var(--muted-fg)]">
              This page is for fast evaluation: what I own, how I lead, and the kinds of measurable outcomes I have delivered across payments and commerce teams.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[0.8rem] text-[var(--foreground)]">
                Full-stack delivery
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[0.8rem] text-[var(--foreground)]">
                Frontend systems
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[0.8rem] text-[var(--foreground)]">
                Payments & commerce
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[0.8rem] text-[var(--foreground)]">
                Mentoring & quality
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <MotionPress className="inline-flex">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)]"
                >
                  <BriefcaseIcon className="h-4 w-4" />
                  View work history
                </Link>
              </MotionPress>
              <MotionPress className="inline-flex">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
                >
                  <FileIcon className="h-4 w-4" />
                  View resume
                </Link>
              </MotionPress>
            </div>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal delay={0.04}>
        <FeaturedWinsGrid wins={featuredWins} />
      </MotionReveal>

      <MotionReveal delay={0.06}>
        <CoreExpertiseGroups groups={coreExpertise} />
      </MotionReveal>
      <MotionReveal delay={0.08}>
        <CaseStudiesList studies={caseStudies} />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <LeadershipHighlights items={leadershipHighlights} />
      </MotionReveal>
      <MotionReveal delay={0.12}>
        <RecognitionList items={accomplishments} />
      </MotionReveal>
      <MotionReveal delay={0.14}>
        <PageQuote quote={sitePageQuotes.impact} />
      </MotionReveal>
    </main>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m12 3 1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9L12 3Z" />
    </svg>
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

function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}
