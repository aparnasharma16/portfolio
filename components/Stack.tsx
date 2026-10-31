import {
  CartIcon,
  CloudIcon,
  DatabaseIcon,
  MonitorIcon,
  ServerIcon,
  ShieldCheckIcon,
  SitemapIcon,
  UsersIcon,
} from '@/components/icons';
import { SectionHeading } from '@/components/SectionHeading';
import { SectionIntro } from '@/components/SectionIntro';
import { TechChipList } from '@/components/TechChip';
import type { StackGroup, StackGroupId } from '@/lib/portfolio-data';
import type { ComponentType } from 'react';

const groupIcons: Record<StackGroupId, ComponentType<{ className?: string }>> = {
  frontend: MonitorIcon,
  backend: ServerIcon,
  data: DatabaseIcon,
  testing: ShieldCheckIcon,
  commerce: CartIcon,
  delivery: CloudIcon,
  architecture: SitemapIcon,
  practice: UsersIcon,
};

type StackPreviewProps = {
  groups: readonly StackGroup[];
  /** How many groups, and items per group, to show before linking out. */
  groupLimit?: number;
  itemLimit?: number;
  href: string;
};

/** Home page teaser: the core of the stack, with everything else one click away. */
export function StackPreview({ groups, groupLimit = 3, itemLimit = 4, href }: StackPreviewProps) {
  const visible = groups
    .slice(0, groupLimit)
    .map((group) => ({ ...group, items: group.items.slice(0, itemLimit) }));
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section aria-labelledby="stack-preview">
      <SectionHeading
        id="stack-preview"
        title="Stack"
        action={{ href, subject: 'tools and practices', count: total }}
      />
      <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border)]">
        <dl className="divide-y divide-[var(--border)]">
          {visible.map((group) => (
            <div key={group.id} className="grid gap-2 px-5 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
              <dt className="text-[0.8rem] font-medium text-[var(--muted-fg)] sm:pt-1.5">
                {group.title}
              </dt>
              <dd>
                <TechChipList items={group.items} label={group.title} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Impact page: every group, with what it is used for. */
export function StackBreakdown({ groups }: { groups: readonly StackGroup[] }) {
  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-20">
      <SectionIntro
        id="stack-title"
        title="Stack"
        description="Grouped by the job each tool does. Most of my work sits in the first three rows."
      />
      <div className="mt-6 divide-y divide-[var(--border)] overflow-hidden rounded-xl border border-[var(--border)]">
        {groups.map((group) => {
          const Icon = groupIcons[group.id];
          return (
            <div key={group.id} className="grid gap-4 px-5 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--secondary)] text-[var(--foreground)]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-[0.92rem] font-semibold text-[var(--foreground)]">
                    {group.title}
                  </h3>
                  <p className="mt-0.5 text-[0.78rem] leading-5 text-[var(--muted-fg)]">
                    {group.summary}
                  </p>
                </div>
              </div>
              <TechChipList items={group.items} label={group.title} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
