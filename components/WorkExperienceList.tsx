'use client';

import { BulletList } from '@/components/BulletList';
import { CompanyLogo } from '@/components/CompanyLogo';
import {
  Disclosure,
  ExpandAllButton,
  useDisclosureSet,
  useOpenFromHash,
} from '@/components/Disclosure';
import { StatusBadge } from '@/components/StatusDot';
import { TechChipList } from '@/components/TechChip';
import { roleAnchor } from '@/lib/anchors';
import type { GroupedExperience } from '@/lib/portfolio-data';
import type { ReactNode } from 'react';

/** Width of the rail column; matches the `md` company logo so dots centre under it. */
const RAIL = 'grid grid-cols-[2.75rem_1fr] gap-x-4';

/**
 * Career path, no cards. Each company is a node on a thin rail (its logo); each role
 * is a dot on that rail with its own dates, so promotions read as a line going up.
 * Dates live only on roles, never repeated on the company. Role details open inline.
 */
export function WorkExperienceList({
  groups,
  summary,
}: {
  groups: readonly GroupedExperience[];
  /** Shown on the left of the toolbar row, sharing it with Expand all (e.g. the stats). */
  summary?: ReactNode;
}) {
  const allKeys = groups.flatMap((group) => group.roles.map(roleAnchor));
  const roles = useDisclosureSet(allKeys, allKeys.slice(0, 1));
  // Keys are the anchors, so a `/work#<role>` link opens that role.
  useOpenFromHash((anchor) => (allKeys.includes(anchor) ? anchor : undefined), roles.show);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        {summary}
        {/* Pull the button's padding out so its text lines up with the right edge. */}
        <div className="-mr-2 ml-auto">
          <ExpandAllButton allOpen={roles.allOpen} onClick={roles.toggleAll} />
        </div>
      </div>

      <ol className="mt-8 space-y-10">
        {groups.map((group) => (
          <li key={`${group.company}-${group.period}`}>
            <div className={`${RAIL} items-center`}>
              <CompanyLogo src={group.logo} name={group.company} size="md" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-subheading text-[var(--foreground)]">{group.company}</h2>
                  {group.current ? <StatusBadge>Current</StatusBadge> : null}
                </div>
                <p className="text-small text-[var(--muted-fg)]">
                  {group.location}, {group.workType.toLowerCase()}
                </p>
              </div>
            </div>

            <ol className="mt-1">
              {group.roles.map((role, index) => {
                const key = roleAnchor(role);
                const open = roles.isOpen(key);
                const isLast = index === group.roles.length - 1;
                return (
                  <li key={key} id={key} className={RAIL}>
                    <RailNode active={open} continues={!isLast} />
                    <div className="min-w-0">
                      <Disclosure
                        variant="plain"
                        heading
                        open={open}
                        onToggle={() => roles.toggle(key)}
                        summary={
                          <span className="sm:flex sm:items-baseline sm:justify-between sm:gap-4">
                            <span className="block text-body font-medium text-[var(--foreground)]">
                              {role.role}
                            </span>
                            <span className="block text-small text-[var(--muted-fg)] tabular-nums">
                              {role.periodShort}
                            </span>
                          </span>
                        }
                      >
                        <BulletList items={role.highlights} />
                        <TechChipList items={role.tech} size="sm" className="mt-4" />
                      </Disclosure>
                    </div>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * One role's piece of the rail: a line in from above (from the logo or previous role),
 * the dot, and a line on down only if another role follows.
 */
function RailNode({ active, continues }: { active: boolean; continues: boolean }) {
  return (
    <span className="relative flex justify-center" aria-hidden>
      <span className="absolute top-0 h-[1.1rem] w-px bg-[var(--border-strong)]" />
      {continues ? (
        <span className="absolute top-[1.1rem] bottom-0 w-px bg-[var(--border-strong)]" />
      ) : null}
      <span
        className={`relative mt-[0.95rem] h-2.5 w-2.5 rounded-full border-2 transition-colors ${
          active
            ? 'border-[var(--foreground)] bg-[var(--foreground)]'
            : 'border-[var(--border-strong)] bg-[var(--background)]'
        }`}
      />
    </span>
  );
}
