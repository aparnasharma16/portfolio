'use client';

import { useEffect, useRef } from 'react';

/**
 * Hover/focus label for icon-only controls (social links, copy email). Place it inside a
 * `group` trigger that already has an `aria-label`, so it stays decorative for assistive
 * tech. `Esc` hides it while the pointer or focus stays on the trigger (WCAG 1.4.13).
 */
export function IconTooltip({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const trigger = ref.current?.parentElement;
    if (!trigger) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && trigger.matches(':hover, :focus-visible')) {
        trigger.dataset.tooltipDismissed = '';
      }
    };
    const reset = () => delete trigger.dataset.tooltipDismissed;
    document.addEventListener('keydown', onKeyDown);
    trigger.addEventListener('pointerleave', reset);
    trigger.addEventListener('focusout', reset);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      trigger.removeEventListener('pointerleave', reset);
      trigger.removeEventListener('focusout', reset);
    };
  }, []);

  return (
    <span
      ref={ref}
      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-[var(--foreground)] px-2 py-0.5 text-caption font-medium whitespace-nowrap text-[var(--background)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[tooltip-dismissed]:opacity-0!"
      aria-hidden
    >
      {label}
      <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[var(--foreground)]" />
    </span>
  );
}
