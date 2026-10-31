'use client';

import { BulletList } from '@/components/BulletList';
import { CompanyLogo } from '@/components/CompanyLogo';
import { Disclosure, ExpandAllButton, useDisclosureSet } from '@/components/Disclosure';
import { StatusBadge } from '@/components/StatusDot';
import { TechChipList } from '@/components/TechChip';
import type { ExperienceEntry, GroupedExperience } from '@/lib/portfolio-data';

const roleKey = (role: ExperienceEntry) => `${role.company}-${role.period}`;

/** Width of the rail column; matches the `md` company logo so dots centre under it. */
const RAIL = 'grid grid-cols-[2.75rem_1fr] gap-x-4';

/**
 * Career path, no cards. Each company is a node on a thin rail (its logo); each role
 * is a dot on that rail with its own dates, so promotions read as a line going up.
 * Dates live only on roles, never repeated on the company. Role details open inline.
 */
export function WorkExperienceList({ groups }: { groups: readonly GroupedExperience[] }) {
  const allKeys = groups.flatMap((group) => group.roles.map(roleKey));
  const roles = useDisclosureSet(allKeys, allKeys.slice(0, 1));

  return (
    <div>
      <div className="flex justify-end">
        <ExpandAllButton allOpen={roles.allOpen} onClick={roles.toggleAll} />
      </div>

      <ol className="mt-4 space-y-10">
        {groups.map((group) => (
          <li key={`${group.company}-${group.period}`}>
            <div className={`${RAIL} items-center`}>
              <CompanyLogo src={group.logo} name={group.company} size="md" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                    {group.company}
                  </h2>
                  {group.current ? <StatusBadge>Current</StatusBadge> : null}
                </div>
                <p className="text-[0.82rem] text-[var(--muted-fg)]">
                  {group.location}, {group.workType.toLowerCase()}
                </p>
              </div>
            </div>

            <ol className="mt-1">
              {group.roles.map((role, index) => {
                const key = roleKey(role);
                const open = roles.isOpen(key);
                const isLast = index === group.roles.length - 1;
                return (
                  <li key={key} className={RAIL}>
                    <RailNode active={open} continues={!isLast} />
                    <div className="min-w-0">
                      <Disclosure
                        variant="plain"
                        open={open}
                        onToggle={() => roles.toggle(key)}
                        summary={
                          <span className="sm:flex sm:items-baseline sm:justify-between sm:gap-4">
                            <span className="block text-[0.92rem] font-medium text-[var(--foreground)]">
                              {role.role}
                            </span>
                            <span className="block text-[0.78rem] text-[var(--muted-fg)] tabular-nums">
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
