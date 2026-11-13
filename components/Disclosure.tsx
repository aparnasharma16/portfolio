'use client';

import { ChevronRightIcon } from '@/components/icons';
import { usePrefersReducedMotion } from '@/lib/reduced-motion';
import {
  useCallback,
  useEffect,
  useEffectEvent,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';

type DisclosureProps = {
  /** Always-visible row content (title, dates, one-line summary). */
  summary: ReactNode;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  /** `row`: full-bleed row inside a bordered list. `plain`: borderless, for open layouts. */
  variant?: keyof typeof variants;
  /** Wrap the trigger in an `<h3>` so each row shows up in the page's heading outline. */
  heading?: boolean;
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
  heading = false,
}: DisclosureProps) {
  const panelId = useId();

  const trigger = (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={panelId}
      className={`flex items-center gap-3 text-left transition-colors ${variants[variant].button}`}
    >
      <span className="min-w-0 flex-1">{summary}</span>
      <ChevronIndicator open={open} />
    </button>
  );
  return (
    <>
      {heading ? <h3>{trigger}</h3> : trigger}

      <DisclosurePanel id={panelId} open={open} onReveal={onToggle}>
        <div className={variants[variant].panel}>{children}</div>
      </DisclosurePanel>
    </>
  );
}

/** The chevron every disclosure row ends with; turns to point down when open. */
export function ChevronIndicator({ open }: { open: boolean }) {
  return (
    <ChevronRightIcon
      className={`h-4 w-4 shrink-0 text-[var(--subtle)] transition-transform duration-200 motion-reduce:transition-none ${
        open ? 'rotate-90' : ''
      }`}
    />
  );
}

type DisclosurePanelProps = {
  id: string;
  open: boolean;
  /** Called when the browser's find-in-page (Ctrl/⌘ F) matches text in a closed panel. */
  onReveal: () => void;
  children: ReactNode;
};

/**
 * The collapsible body of a disclosure. It stays in the DOM while closed, marked
 * `hidden="until-found"`, so find-in-page can still match its text and open it.
 * Height eases with a CSS grid-rows transition (skipped for reduced motion).
 */
export function DisclosurePanel({ id, open, onReveal, children }: DisclosurePanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  // True once the panel is fully collapsed (closing transition finished).
  const [collapsed, setCollapsed] = useState(!open);
  const [wasOpen, setWasOpen] = useState(open);
  if (wasOpen !== open) {
    setWasOpen(open);
    setCollapsed(!open && reduceMotion);
  }

  const reveal = useEffectEvent(() => {
    if (ref.current) openWithoutTransition(ref.current, onReveal);
  });

  useEffect(() => {
    const panel = ref.current;
    panel?.addEventListener('beforematch', reveal);
    return () => panel?.removeEventListener('beforematch', reveal);
  }, []);

  // Set by hand: React renders any `hidden` value as the boolean form, which would
  // remove the text from find-in-page. Until this runs, the closed grid row already
  // collapses the panel visually.
  const hide = collapsed && !open;
  useLayoutEffect(() => {
    if (hide) ref.current?.setAttribute('hidden', 'until-found');
    else ref.current?.removeAttribute('hidden');
  }, [hide]);

  return (
    <div
      ref={ref}
      id={id}
      data-disclosure-panel=""
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && !open) setCollapsed(true);
      }}
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

/**
 * Applies `open` to a panel with its transition switched off for a frame, so the panel
 * is full height straight away and the browser can scroll to what's inside it.
 */
function openWithoutTransition(panel: HTMLElement, open: () => void) {
  panel.style.transition = 'none';
  flushSync(open);
  requestAnimationFrame(() => requestAnimationFrame(() => (panel.style.transition = '')));
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

  const show = useCallback((key: string) => {
    setOpen((current) => (current.has(key) ? current : new Set(current).add(key)));
  }, []);

  const allOpen = allKeys.length > 0 && allKeys.every((key) => open.has(key));
  const toggleAll = useCallback(() => setOpen(new Set(allOpen ? [] : allKeys)), [allOpen, allKeys]);

  return { isOpen: (key: string) => open.has(key), toggle, show, allOpen, toggleAll };
}

/**
 * Opens the disclosure a URL hash points at (e.g. `/work#merkle-frontend-developer` from search),
 * on load and whenever the hash changes, then brings it into view.
 */
export function useOpenFromHash(
  keyForAnchor: (anchor: string) => string | undefined,
  show: (key: string) => void
) {
  const openFromHash = useEffectEvent(() => {
    const anchor = decodeURIComponent(window.location.hash.slice(1));
    const key = anchor ? keyForAnchor(anchor) : undefined;
    const target = document.getElementById(anchor);
    const panel = target?.querySelector<HTMLElement>('[data-disclosure-panel]');
    if (!key || !target || !panel) return;
    // Open at full height first; scrolling during the height animation would stop short
    // for rows near the bottom of the page.
    openWithoutTransition(panel, () => show(key));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  });

  useEffect(() => {
    // Next frame: opening uses flushSync, which can't run inside an effect.
    const frame = requestAnimationFrame(openFromHash);
    window.addEventListener('hashchange', openFromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', openFromHash);
    };
  }, []);
}

/** The small "Expand all / Collapse all" control that sits above a disclosure list. */
export function ExpandAllButton({ allOpen, onClick }: { allOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="touch-target shrink-0 rounded-lg px-2 py-1 text-small font-medium whitespace-nowrap text-[var(--muted-fg)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)] print:hidden"
    >
      {allOpen ? 'Collapse all' : 'Expand all'}
    </button>
  );
}
