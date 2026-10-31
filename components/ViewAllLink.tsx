import { ChevronRightIcon } from '@/components/icons';
import Link from 'next/link';

export type ViewAllAction = {
  href: string;
  /** What the link opens, read by screen readers: "View all experience". */
  subject: string;
  /** Optional total shown as a small badge, e.g. 6 roles. */
  count?: number;
};

/** The single "see more" affordance used by every preview section. */
export function ViewAllLink({ href, subject, count }: ViewAllAction) {
  return (
    <Link
      href={href}
      aria-label={`View all ${subject}${count ? ` (${count})` : ''}`}
      className="group inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border)] pr-2 pl-3 text-[0.75rem] font-medium text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--secondary)] hover:text-[var(--accent-ink)]"
    >
      View all
      {count ? (
        <span className="text-[var(--subtle)] tabular-nums group-hover:text-[var(--muted-fg)]">
          {count}
        </span>
      ) : null}
      <ChevronRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
