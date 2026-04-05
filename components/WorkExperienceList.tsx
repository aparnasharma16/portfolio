import { CompanyLogo } from '@/components/CompanyLogo';
import { TechIcon } from '@/components/TechIcon';
import { type ExperienceEntry, groupExperience } from '@/lib/portfolio-data';

export function WorkExperienceList({ jobs }: { jobs: ExperienceEntry[] }) {
  const grouped = groupExperience(jobs);

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute bottom-0 left-[1.34rem] top-0 w-px bg-[var(--border)]" aria-hidden />

      {grouped.map((group, gi) => (
        <article
          key={`${group.company}-${group.period}`}
          className={`relative pl-12 ${gi > 0 ? 'mt-8' : ''}`}
        >
          {/* Timeline dot */}
          {group.current ? (
            <span className="absolute left-[1.03rem] top-3 flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
            </span>
          ) : (
            <span className="absolute left-[1.03rem] top-3 h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          )}

          {/* Company header */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-start gap-3">
                {group.logo ? (
                  <CompanyLogo src={group.logo} alt={`${group.company} logo`} size="md" />
                ) : null}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                      {group.company}
                    </h3>
                    {group.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#86efac] bg-[#f0fdf4] px-2.5 py-0.5 text-[0.8rem] font-medium text-[#166534] dark:border-[#14532d] dark:bg-[#052e16] dark:text-[#bbf7d0]">
                        <span className="h-2 w-2 rounded-full bg-[#4ade80]" aria-hidden />
                        Working
                      </span>
                    ) : null}
                  </div>
                  {group.roles.length === 1 ? (
                    <p className="mt-0.5 text-[0.88rem] leading-6 text-[var(--muted-fg)]">
                      {group.roles[0].role}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="shrink-0 text-left text-[0.88rem] leading-6 text-[var(--muted-fg)] sm:text-right">
              <p>{group.period}</p>
              <p>
                {group.location} ({group.workType})
              </p>
            </div>
          </div>

          {/* Roles within group */}
          {group.roles.map((role, ri) => (
            <div
              key={`${role.role}-${role.period}`}
              className={ri > 0 ? 'mt-8 border-t border-dashed border-[var(--border)] pt-6' : ''}
            >
              {/* Show role sub-header for grouped entries */}
              {group.roles.length > 1 ? (
                <div className={`flex items-center gap-2 ${ri === 0 ? 'mt-4' : ''}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-fg)]" />
                  <p className="text-[0.92rem] font-semibold text-[var(--foreground)]">
                    {role.role}
                  </p>
                  <span className="text-[0.78rem] text-[var(--subtle)]">
                    {role.periodShort}
                  </span>
                </div>
              ) : null}

              <hr className={`border-[var(--border)] ${group.roles.length > 1 ? 'mt-3' : 'mt-4'}`} />

              {/* Technologies */}
              <div className="mt-4">
                <h4 className="text-[0.88rem] font-semibold tracking-[-0.01em] text-[var(--foreground)]">
                  Technologies &amp; Tools
                </h4>
                <ul className="mt-2.5 flex flex-wrap gap-2" aria-label="Technologies">
                  {role.tech.map((t) => (
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
                  {role.highlights.map((h) => (
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
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
