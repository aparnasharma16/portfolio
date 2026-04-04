"use client";

import { useState } from "react";
import Link from "next/link";
import { CompanyLogo } from "@/components/CompanyLogo";
import type { ExperienceEntry } from "@/lib/portfolio-data";
import { TechIcon } from "@/components/TechIcon";

type Props = {
  jobs: ExperienceEntry[];
  previewCount?: number;
};

export function HomeExperiencePreview({ jobs, previewCount = 3 }: Props) {
  const visible =
    previewCount >= jobs.length ? jobs : jobs.slice(0, previewCount);
  const hasMore = jobs.length > visible.length;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="mt-10">
      <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
        Experience
      </h2>
      <ul className="mt-5">
        {visible.map((job, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <li key={`${job.company}-${job.period}`} className={i > 0 ? "mt-4" : ""}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-start gap-3">
                    {job.logo ? (
                      <CompanyLogo
                        src={job.logo}
                        alt={`${job.company} logo`}
                        size="sm"
                      />
                    ) : null}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[0.95rem] font-semibold text-[var(--foreground)]">
                          {job.company}
                        </span>
                        {job.current ? (
                          <>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#86efac] bg-[#f0fdf4] px-2 py-0.5 text-xs font-medium text-[#166534] dark:border-[#14532d] dark:bg-[#052e16] dark:text-[#bbf7d0]">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-[#4ade80]"
                                aria-hidden
                              />
                              Working
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedIndex(isExpanded ? null : i)
                              }
                              className="flex h-5 w-5 items-center justify-center text-[var(--muted-fg)] transition-transform hover:text-[var(--foreground)]"
                              aria-label={isExpanded ? "Collapse" : "Expand"}
                            >
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                                aria-hidden
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </>
                        ) : null}
                      </div>
                      <p className="text-[0.85rem] text-[var(--muted-fg)]">
                        {job.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-[0.85rem] text-[var(--foreground)]">
                    {job.period}
                  </p>
                  <p className="text-[0.85rem] text-[var(--muted-fg)]">
                    {job.location} ({job.workType})
                  </p>
                </div>
              </div>

              {isExpanded && (
                <div className="mt-3 border-t border-[var(--border)] pt-3">
                  <h4 className="text-[0.82rem] font-semibold text-[var(--foreground)]">
                    Technologies &amp; Tools
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {job.tech.map((t) => (
                      <li key={t}>
                        <TechIcon name={t} />
                      </li>
                    ))}
                  </ul>
                  <h4 className="mt-3 text-[0.82rem] font-semibold text-[var(--foreground)]">
                    What I&apos;ve done
                  </h4>
                  <ul className="mt-1.5 space-y-1 text-[0.82rem] leading-6 text-[var(--muted-fg)]">
                    {job.highlights.map((h) => (
                      <li key={h} className="relative pl-3.5">
                        <span
                          className="absolute left-0 top-[0.6rem] h-1 w-1 rounded-full bg-[var(--subtle)]"
                          aria-hidden
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex justify-center">
        <Link
          href="/work"
          className="rounded-lg border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
        >
          {hasMore
            ? "Show all work experiences"
            : "View full work experiences"}
        </Link>
      </div>
    </section>
  );
}
