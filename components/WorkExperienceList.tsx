import { TechIcon } from "@/components/TechIcon";
import type { ExperienceEntry } from "@/lib/portfolio-data";

export function WorkExperienceList({ jobs }: { jobs: ExperienceEntry[] }) {
  return (
    <div>
      {jobs.map((job, i) => (
        <article
          key={`${job.company}-${job.period}`}
          className={i > 0 ? "mt-6" : ""}
        >
          {/* Company header + date/location */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                  {job.company}
                </h3>
                {job.current ? (
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#86efac] bg-[#f0fdf4] px-2.5 py-0.5 text-[0.8rem] font-medium text-[#166534] dark:border-[#14532d] dark:bg-[#052e16] dark:text-[#bbf7d0]">
                    <span
                      className="h-2 w-2 rounded-full bg-[#4ade80]"
                      aria-hidden
                    />
                    Working
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-[0.88rem] leading-6 text-[var(--muted-fg)]">
                {job.role}
              </p>
            </div>
            <div className="shrink-0 text-left text-[0.88rem] leading-6 text-[var(--muted-fg)] sm:text-right">
              <p>{job.period}</p>
              <p>
                {job.location} ({job.workType})
              </p>
            </div>
          </div>

          {/* Divider after header */}
          <hr className="mt-4 border-[var(--border)]" />

          {/* Technologies */}
          <div className="mt-4">
            <h4 className="text-[0.88rem] font-semibold tracking-[-0.01em] text-[var(--foreground)]">
              Technologies &amp; Tools
            </h4>
            <ul
              className="mt-2.5 flex flex-wrap gap-2"
              aria-label="Technologies"
            >
              {job.tech.map((t) => (
                <li key={t}>
                  <TechIcon name={t} />
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="mt-4">
            <h4 className="text-[0.88rem] font-semibold tracking-[-0.01em] text-[var(--foreground)]">
              What I&apos;ve done
            </h4>
            <ul className="mt-2.5 space-y-2 text-[0.88rem] leading-[1.7] text-[var(--muted-fg)]">
              {job.highlights.map((h) => (
                <li key={h} className="relative pl-4">
                  <span
                    className="absolute left-0 top-[0.65rem] h-[5px] w-[5px] rounded-full bg-[var(--subtle)]"
                    aria-hidden
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
