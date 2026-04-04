import Link from "next/link";
import type { ExperienceEntry } from "@/lib/portfolio-data";

type Props = {
  jobs: ExperienceEntry[];
  /** How many roles to show before “Show all”; omit or Infinity for all. */
  previewCount?: number;
};

export function HomeExperiencePreview({
  jobs,
  previewCount = 3,
}: Props) {
  const visible =
    previewCount >= jobs.length ? jobs : jobs.slice(0, previewCount);
  const hasMore = jobs.length > visible.length;

  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
        Experience
      </h2>
      <ul className="mt-6 space-y-0">
        {visible.map((job, i) => (
          <li
            key={`${job.company}-${job.period}`}
            className={
              i < visible.length - 1
                ? "border-b border-[var(--border)] py-5 first:pt-0"
                : "pt-5 first:pt-0"
            }
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-semibold text-[var(--foreground)]">
                    {job.company}
                  </span>
                  {job.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--working-bg)] px-2 py-0.5 text-xs font-medium text-[var(--working-fg)]">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-[var(--working-dot)]"
                        aria-hidden
                      />
                      Working
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-[var(--muted-fg)]">{job.role}</p>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <p className="text-sm text-[var(--foreground)]">{job.period}</p>
                <p className="mt-0.5 text-sm text-[var(--muted-fg)]">
                  {job.location} ({job.workType})
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center">
        <Link
          href="/work"
          className="rounded-lg border border-[var(--border)] bg-[var(--secondary)] px-6 py-2.5 text-sm font-medium text-[var(--secondary-foreground)] transition-opacity hover:opacity-90"
        >
          {hasMore
            ? "Show all work experiences"
            : "View full work experiences"}
        </Link>
      </div>
    </section>
  );
}
