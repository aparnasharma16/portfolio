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
    <section className="mt-10">
      <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
        Experience
      </h2>
      <ul className="mt-5">
        {visible.map((job, i) => (
          <li
            key={`${job.company}-${job.period}`}
            className={i > 0 ? "mt-4" : ""}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[0.95rem] font-semibold text-[var(--foreground)]">
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
                <p className="text-[0.85rem] text-[var(--muted-fg)]">{job.role}</p>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <p className="text-[0.85rem] text-[var(--foreground)]">{job.period}</p>
                <p className="text-[0.85rem] text-[var(--muted-fg)]">
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
