import type { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description: ReactNode;
  /** Optional row under the description: stats, actions, or filters. */
  children?: ReactNode;
};

/** Shared top-of-page intro used by every inner page, so they all open the same way. */
export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-title text-[var(--foreground)]">{title}</h1>
      <p className="mt-2 max-w-xl text-lead text-pretty text-[var(--muted-fg)]">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </header>
  );
}

type Stat = { value: string | number; label: string };

/** Compact inline stats on one line: "8+ years  3 companies  6 roles". */
export function StatRow({ items }: { items: readonly Stat[] }) {
  return (
    <dl className="flex flex-wrap gap-x-5 gap-y-1 text-small">
      {items.map((item) => (
        <div key={item.label} className="flex flex-row-reverse items-baseline gap-1.5">
          <dt className="text-[var(--muted-fg)]">{item.label}</dt>
          <dd className="font-semibold text-[var(--foreground)] tabular-nums">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
