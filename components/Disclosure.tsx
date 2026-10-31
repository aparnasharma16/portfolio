'use client';

import { ChevronRightIcon } from '@/components/icons';
import { getExpandTransition } from '@/components/SubtleMotion';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useId, useState, type ReactNode } from 'react';

type DisclosureProps = {
  /** Always-visible row content (title, dates, one-line summary). */
  summary: ReactNode;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  /** `row`: full-bleed row inside a bordered list. `plain`: borderless, for open layouts. */
  variant?: keyof typeof variants;
};

const variants = {
  row: {
    button: 'w-full px-4 py-3.5 hover:bg-[var(--secondary)]',
    panel: 'px-4 pb-5',
  },
  plain: {
    button: '-mx-3 w-[calc(100%+1.5rem)] rounded-lg px-3 py-2.5 hover:bg-[var(--secondary)]',
    panel: 'pt-1 pb-5',
  },
} as const;

/**
 * Accessible expandable row (work roles, case studies). Controlled,
 * so a parent can offer "Expand all"; pair with `useDisclosureSet` for the state.
 */
export function Disclosure({
  summary,
  open,
  onToggle,
  children,
  variant = 'row',
}: DisclosureProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const panelId = useId();

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex items-center gap-3 text-left transition-colors ${variants[variant].button}`}
      >
        <span className="min-w-0 flex-1">{summary}</span>
        <ChevronRightIcon
          className={`h-4 w-4 shrink-0 text-[var(--subtle)] transition-transform duration-200 ${
            open ? 'rotate-90' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={getExpandTransition(reduceMotion)}
            className="overflow-hidden"
          >
            <div className={variants[variant].panel}>{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/** Open/closed state for a list of disclosures, with "expand all" support. */
export function useDisclosureSet(
  allKeys: readonly string[],
  initiallyOpen: readonly string[] = []
) {
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set(initiallyOpen));

  const toggle = useCallback((key: string) => {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const allOpen = allKeys.length > 0 && allKeys.every((key) => open.has(key));
  const toggleAll = useCallback(() => setOpen(new Set(allOpen ? [] : allKeys)), [allOpen, allKeys]);

  return { isOpen: (key: string) => open.has(key), toggle, allOpen, toggleAll };
}

/** The small "Expand all / Collapse all" control that sits above a disclosure list. */
export function ExpandAllButton({ allOpen, onClick }: { allOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 rounded-lg px-2 py-1 text-[0.8rem] font-medium whitespace-nowrap text-[var(--muted-fg)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
    >
      {allOpen ? 'Collapse all' : 'Expand all'}
    </button>
  );
}
