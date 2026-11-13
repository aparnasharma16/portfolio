'use client';

import { SearchIcon } from '@/components/icons';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';

const loadPalette = () => import('@/components/SearchPalette');
const SearchPalette = dynamic(loadPalette, { ssr: false });

/**
 * The search trigger and ⌘K / Ctrl K shortcut. The palette itself (commands, search
 * index, icons, dialog) is a separate chunk: fetched once the page is idle, or on first
 * hover/focus of the trigger, so it never competes with the first paint.
 */
export function SearchCommand() {
  // `session` remounts the palette on every opening, so it starts with a fresh query
  // and recents; 0 means it hasn't been needed yet.
  const [session, setSession] = useState(0);
  const [open, setOpen] = useState(false);

  const openPalette = useCallback(() => {
    setSession((count) => count + 1);
    setOpen(true);
  }, []);

  // ⌘K / Ctrl+K toggles the palette from anywhere.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (open) setOpen(false);
        else openPalette();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, openPalette]);

  // Warm the chunk once the browser is idle, so the first ⌘K opens instantly.
  useEffect(() => {
    const prefetch = () => void loadPalette();
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(prefetch, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        onPointerEnter={loadPalette}
        onFocus={loadPalette}
        className="touch-target flex h-8 items-center gap-1.5 rounded-full border border-[var(--border)] px-2 text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)] sm:pr-1.5 sm:pl-2.5"
        aria-label="Search the site"
        aria-haspopup="dialog"
        aria-keyshortcuts="Meta+K Control+K"
      >
        <SearchIcon className="h-3.5 w-3.5" />
        <kbd className="hidden rounded bg-[var(--secondary)] px-1.5 py-px font-sans text-caption font-medium sm:pointer-fine:inline">
          <span className="not-mac:hidden">⌘K</span>
          <span className="mac:hidden">Ctrl K</span>
        </kbd>
      </button>

      {session > 0 ? (
        <SearchPalette key={session} open={open} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
