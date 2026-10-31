'use client';

import { MoonIcon, SunIcon } from '@/components/icons';
import { toggleTheme, useIsDark } from '@/lib/theme';

export function ThemeToggle() {
  const dark = useIsDark();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {dark === null ? (
        <MoonIcon className="h-3.5 w-3.5 opacity-0" />
      ) : dark ? (
        <SunIcon className="h-3.5 w-3.5" />
      ) : (
        <MoonIcon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
