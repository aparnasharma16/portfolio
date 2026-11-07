import { ChevronRightIcon } from '@/components/icons';
import Link from 'next/link';

export type ViewAllAction = {
  href: string;
  /** What the link opens, read by screen readers: "View all 6 roles". */
  subject: string;
  /** Total shown in the label, so the count always says what it counts. */
  count?: number;
  /** Short noun shown after the count ("roles", "tools"); defaults to `subject`. */
  unit?: string;
  /** Visible text instead of "View all …", when a count would not match what the preview shows. */
  label?: string;
};

/** The single "see more" affordance used by every preview section. */
export function ViewAllLink({ href, subject, count, unit = subject, label }: ViewAllAction) {
  return (
    <Link
      href={href}
      aria-label={label ?? (count ? `View all ${count} ${subject}` : `View all ${subject}`)}
      className="group touch-target inline-flex h-7 shrink-0 items-center gap-1 rounded-full border border-[var(--border)] pr-2 pl-3 text-caption font-medium text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--secondary)] hover:text-[var(--accent-ink)] print:hidden"
    >
      {label ? (
        <span>{label}</span>
      ) : count ? (
        <span>
          View all <span className="tabular-nums">{count}</span> {unit}
        </span>
      ) : (
        'View all'
      )}
      <ChevronRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}
