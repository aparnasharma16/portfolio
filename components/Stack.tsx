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

/**
 * Capabilities (design, leadership) read as statements, so they render as a plain list.
 * Pills are kept for tools, where the brand mark helps scanning.
 */
function GroupItems({ group }: { group: StackGroup }) {
  if (group.kind !== 'capability') return <TechChipList items={group.items} label={group.title} />;
  return (
    <ul
      className="grid gap-x-6 gap-y-2 text-control font-medium text-[var(--foreground)] sm:grid-cols-2 sm:pt-1.5"
      aria-label={group.title}
    >
      {group.items.map((item) => (
        <li key={item} className="relative pl-4">
          <span
            className="absolute top-[0.55rem] left-0 h-1 w-1 rounded-full bg-[var(--subtle)]"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Home page teaser: design and leadership first, then the core tools; the rest is one click away. */
export function StackPreview({ groups, groupLimit = 4, itemLimit = 4, href }: StackPreviewProps) {
  const visible = groups
    .slice(0, groupLimit)
    .map((group) => ({ ...group, items: group.items.slice(0, itemLimit) }));
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section aria-labelledby="stack-preview">
      <SectionHeading
        id="stack-preview"
        title="Expertise"
        action={{ href, subject: 'skills and tools', unit: '', count: total }}
      />
      <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border)]">
        <dl className="divide-y divide-[var(--border)]">
          {visible.map((group) => {
            const Icon = groupIcons[group.id];
            return (
              <div
                key={group.id}
                className="grid gap-3 px-5 py-4 sm:grid-cols-[10.5rem_1fr] sm:gap-4"
              >
                <dt className="flex items-center gap-2 text-small font-medium text-[var(--foreground)] sm:h-8">
                  <Icon className="h-4 w-4 shrink-0 text-[var(--subtle)]" />
                  {group.title}
                </dt>
                <dd>
                  <GroupItems group={group} />
                </dd>
              </div>
            );
          })}
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
        title="Expertise"
        description="How I design, lead, and build. Design and leadership come first, then the tools."
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
                  <h3 className="text-subheading text-[var(--foreground)]">{group.title}</h3>
                  <p className="mt-0.5 text-small text-[var(--muted-fg)]">{group.summary}</p>
                </div>
              </div>
              <GroupItems group={group} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
