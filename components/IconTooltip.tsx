'use client';

import { useEffect, useRef } from 'react';

/** Triggers on the page right now; one shared `Esc` listener serves all of them. */
const triggers = new Set<HTMLElement>();

function onKeyDown(event: KeyboardEvent) {
  if (event.key !== 'Escape') return;
  for (const trigger of triggers) {
    if (trigger.matches(':hover, :focus-visible')) trigger.dataset.tooltipDismissed = '';
  }
}

/**
 * Hover/focus label for icon-only controls (social links, copy email). Place it inside a
 * `group` trigger that already has an `aria-label`, so it stays decorative for assistive
 * tech. It meets WCAG 1.4.13: `Esc` hides it while the pointer or focus stays on the
 * trigger, and the pointer can move onto it (a bridge spans the gap) without it vanishing.
 */
export function IconTooltip({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const trigger = ref.current?.parentElement;
    if (!trigger) return;
    const reset = () => delete trigger.dataset.tooltipDismissed;
    if (triggers.size === 0) document.addEventListener('keydown', onKeyDown);
    triggers.add(trigger);
    trigger.addEventListener('pointerleave', reset);
    trigger.addEventListener('focusout', reset);
    return () => {
      triggers.delete(trigger);
      if (triggers.size === 0) document.removeEventListener('keydown', onKeyDown);
      trigger.removeEventListener('pointerleave', reset);
      trigger.removeEventListener('focusout', reset);
    };
  }, []);

  return (
    <span
      ref={ref}
      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-[var(--foreground)] px-2 py-0.5 text-caption font-medium whitespace-nowrap text-[var(--background)] opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[tooltip-dismissed]:pointer-events-none group-data-[tooltip-dismissed]:opacity-0! before:absolute before:inset-x-0 before:top-full before:h-3"
      aria-hidden
    >
      {label}
      <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[var(--foreground)]" />
    </span>
  );
}
