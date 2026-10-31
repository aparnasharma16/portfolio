import type { ReactNode } from 'react';

/**
 * Two-column grid with hairline dividers between cells. Dividers come from a 1px gap
 * over a border-coloured background; an odd last cell spans both columns.
 */
export function RuledGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
      {children}
    </div>
  );
}

export function RuledCell({ children }: { children: ReactNode }) {
  return <div className="bg-[var(--background)] p-5 sm:last:odd:col-span-2">{children}</div>;
}
