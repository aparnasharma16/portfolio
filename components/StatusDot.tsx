import type { ReactNode } from 'react';

type StatusDotProps = {
  /** Adds the soft "live" ping ring. Disabled automatically for reduced motion. */
  pulse?: boolean;
  className?: string;
};

/** Single source for the green "active / available" indicator used across the site. */
export function StatusDot({ pulse = false, className = 'h-2 w-2' }: StatusDotProps) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`} aria-hidden>
      {pulse ? (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--status)] opacity-60 motion-reduce:hidden" />
      ) : null}
      <span className="relative inline-flex h-full w-full rounded-full bg-[var(--status)]" />
    </span>
  );
}

/** Pill badge ("Current", "Working", …) built on the same status color. */
export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--status-bg)] px-2 py-0.5 text-[0.68rem] font-medium text-[var(--status-fg)]">
      <StatusDot className="h-1.5 w-1.5" />
      {children}
    </span>
  );
}
