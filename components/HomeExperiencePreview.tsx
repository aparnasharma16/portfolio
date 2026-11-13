'use client';

import { CompanyLogo } from '@/components/CompanyLogo';
import { ChevronIndicator, DisclosurePanel } from '@/components/Disclosure';
import { SectionHeading } from '@/components/SectionHeading';
import { StatusBadge } from '@/components/StatusDot';
import { TechChipList } from '@/components/TechChip';
import { roleAnchor } from '@/lib/anchors';
import type { GroupedExperience } from '@/lib/portfolio-data';
import Link from 'next/link';
import { useId, useState } from 'react';

type Education = {
  readonly degree: string;
  readonly school: string;
  readonly logo: string;
  readonly years: string;
};

/** Highlights shown per role; the rest are a link away on /work. */
const PREVIEW_POINTS = 2;

type Props = {
  /** Roles already grouped by company (`groupExperience`), done on the server. */
  groups: GroupedExperience[];
  education?: Education;
};

export function HomeExperiencePreview({ groups: grouped, education }: Props) {
  const [expanded, setExpanded] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section aria-labelledby="home-experience">
      <SectionHeading
        id="home-experience"
        title="Experience"
        action={{ href: '/work', subject: 'experience', label: 'View full timeline' }}
      />

      <ol className="relative mt-5">
        {/* timeline rail */}
        <span className="absolute top-4 bottom-4 left-4 w-px bg-[var(--border)]" aria-hidden />
        {grouped.map((group, i) => {
          const isOpen = expanded === i;
          const panelId = `${baseId}-panel-${i}`;
          const latest = group.roles[0];
          const hasMore = latest.highlights.length > PREVIEW_POINTS;
          return (
            <li key={`${group.company}-${group.period}`} className="relative">
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-start gap-4 rounded-xl py-3 text-left"
              >
                <span className="relative z-[1] rounded-lg bg-[var(--background)]">
                  <CompanyLogo src={group.logo} name={group.company} size="sm" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-subheading text-[var(--foreground)] underline-offset-4 group-hover:underline">
                      {group.company}
                    </span>
                    {group.current ? <StatusBadge>Current</StatusBadge> : null}
                  </span>
                  <span className="mt-0.5 block text-small text-[var(--muted-fg)]">
                    {latest.role}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-2 pt-0.5">
                  <span className="hidden text-small text-[var(--muted-fg)] tabular-nums sm:inline">
                    {group.periodShort}
                  </span>
                  <ChevronIndicator open={isOpen} />
                </span>
              </button>

              <DisclosurePanel id={panelId} open={isOpen} onReveal={() => setExpanded(i)}>
                <div className="pb-4 pl-12">
                  <p className="text-small text-[var(--muted-fg)] tabular-nums sm:hidden">
                    {group.periodShort}, {group.location}
                  </p>
                  <ul className="mt-1 space-y-1.5 text-body text-[var(--muted-fg)]">
                    {latest.highlights.slice(0, PREVIEW_POINTS).map((h) => (
                      <li key={h} className="relative pl-3.5">
                        <span
                          className="absolute top-[0.65rem] left-0 h-1 w-1 rounded-full bg-[var(--subtle)]"
                          aria-hidden
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {hasMore ? (
                    <Link
                      href={`/work#${roleAnchor(latest)}`}
                      className="touch-target mt-1.5 -ml-2 inline-block rounded-lg px-2 py-1 text-small font-medium text-[var(--muted-fg)] tabular-nums transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)] print:hidden"
                    >
                      See all {latest.highlights.length} points
                      <span className="sr-only"> for {group.company}</span>
                    </Link>
                  ) : null}
                  <TechChipList items={latest.tech.slice(0, 6)} size="sm" className="mt-3" />
                </div>
              </DisclosurePanel>
            </li>
          );
        })}

        {education ? (
          <li className="relative flex items-start gap-4 py-3">
            <span className="relative z-[1] rounded-lg bg-[var(--background)]">
              <CompanyLogo src={education.logo} name={education.school} size="sm" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-subheading text-[var(--foreground)]">
                {education.school}
              </span>
              <span className="mt-0.5 block text-small text-[var(--muted-fg)]">
                {education.degree}
              </span>
            </span>
            <span className="hidden shrink-0 pt-0.5 pr-6 text-small text-[var(--muted-fg)] tabular-nums sm:inline">
              {education.years}
            </span>
          </li>
        ) : null}
      </ol>
    </section>
  );
}
