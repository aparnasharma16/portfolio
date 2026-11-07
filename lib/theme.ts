import { THEME_STORAGE_KEY } from '@/lib/theme-init';
import { useSyncExternalStore } from 'react';

const isDarkNow = () => document.documentElement.classList.contains('dark');

/** Flip light/dark and remember the choice. */
export function toggleTheme() {
  const next = !isDarkNow();
  document.documentElement.classList.toggle('dark', next);
  localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

/**
 * Live dark-mode state, shared by every control that changes the theme (header
 * toggle, search palette), so they never disagree. `null` until mounted on the client.
 */
export function useIsDark(): boolean | null {
  return useSyncExternalStore(subscribe, isDarkNow, () => null);
}
