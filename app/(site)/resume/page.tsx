import type { Metadata } from "next";
import { PageQuote } from "@/components/PageQuote";
import { MotionReveal, MotionPress } from "@/components/SubtleMotion";
import { profile, sitePageQuotes } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: "View and download resume.",
};

export default function ResumePage() {
  const pdf = profile.resumePdfPath;

  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-20">
      <MotionReveal>
        <>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Resume
          </h1>
          <p className="mt-3 text-sm text-[var(--muted-fg)] md:text-base">
            View and download my professional resume.
          </p>
        </>
      </MotionReveal>
      <MotionReveal delay={0.04}>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
              Last updated
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]">
              {profile.resumeLastUpdated}
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
              Primary focus
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]">
              {profile.primaryFocus}
            </p>
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
              <p className="mt-2 text-sm text-[var(--muted-fg)]">
                PDF will be added soon
              </p>
            )}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.06}>
        {pdf ? (
          <div className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] shadow-lg">
            <iframe
              title="Resume PDF"
              src={pdf}
              className="h-[75vh] w-full"
            />
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
              In the meantime, the portfolio already reflects my current role, focus areas, case studies, and delivery highlights. If you&apos;d like the resume before this page is updated, feel free to reach out directly by email or LinkedIn.
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
