import type { Metadata } from "next";
import { PageQuote } from "@/components/PageQuote";
import { CaseStudiesList } from "@/components/CaseStudiesList";
import { CoreExpertiseGroups } from "@/components/ExpertiseGrid";
import { LeadershipHighlights } from "@/components/LeadershipHighlights";
import { RecognitionList } from "@/components/RecognitionList";
import {
  accomplishments,
  caseStudies,
  coreExpertise,
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
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--subtle)]">
        Proof of impact
      </p>
      <h1 className="mt-2 text-[1.75rem] font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-[1.95rem]">
        How I deliver value in product teams
      </h1>
      <p className="mt-3 max-w-2xl text-[0.92rem] leading-7 text-[var(--muted-fg)]">
        This page is designed for fast evaluation: what I tend to own, how I work, and the kinds of outcomes I have helped create across payments and commerce organizations.
      </p>

      <CoreExpertiseGroups groups={coreExpertise} />
      <CaseStudiesList studies={caseStudies} />
      <LeadershipHighlights items={leadershipHighlights} />
      <RecognitionList items={accomplishments} />
      <PageQuote quote={sitePageQuotes.impact} />
    </main>
  );
}
