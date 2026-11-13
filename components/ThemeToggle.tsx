'use client';

import { MoonIcon, SunIcon } from '@/components/icons';
import { toggleTheme } from '@/lib/theme';

/**
 * Light/dark switch. Both states are in the markup and CSS (`dark:`) shows the right one,
 * so the icon and its label are correct from the first paint, with or without JS.
 */
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="touch-target flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
    >
      <span className="dark:hidden">
        <MoonIcon className="h-3.5 w-3.5" />
        <span className="sr-only">Switch to dark theme</span>
      </span>
      <span className="hidden dark:inline">
        <SunIcon className="h-3.5 w-3.5" />
        <span className="sr-only">Switch to light theme</span>
      </span>
    </button>
  );
}
