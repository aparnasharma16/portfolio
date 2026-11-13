import { THEME_STORAGE_KEY } from '@/lib/theme-init';
import { useEffect, useSyncExternalStore } from 'react';

type Pinned = 'light' | 'dark';

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)');

function schemeMeta(): HTMLMetaElement {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'color-scheme';
    document.head.appendChild(meta);
  }
  return meta;
}

/** Point the page at a pinned scheme, or back at the OS (`null`). CSS follows the meta. */
function applyScheme(pinned: Pinned | null) {
  schemeMeta().content = pinned ?? 'light dark';
}

/** The scheme the page is rendering right now: the pinned one, else the OS's. */
function isDarkNow() {
  const content = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')?.content;
  if (content === 'dark') return true;
  if (content === 'light') return false;
  return darkQuery().matches;
}

/**
 * Flip to the opposite of what's on screen. Flipping to what the OS already shows undoes
 * the override (follow the OS again) rather than pinning it, so a later OS change still
 * applies. An existing pin is never cleared just because the OS came to match it.
 */
export function toggleTheme() {
  const target: Pinned = isDarkNow() ? 'light' : 'dark';
  const osScheme: Pinned = darkQuery().matches ? 'dark' : 'light';
  const pinned = target === osScheme ? null : target;
  applyScheme(pinned);
  try {
    if (pinned) localStorage.setItem(THEME_STORAGE_KEY, pinned);
    else localStorage.removeItem(THEME_STORAGE_KEY);
  } catch {
    /* storage unavailable: the theme still applies for this page view */
  }
}

/** Apply a theme change made in another tab. */
function onStorage(event: StorageEvent) {
  if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
  const value = event.key === null ? null : event.newValue;
  applyScheme(value === 'light' || value === 'dark' ? value : null);
}

/** Keep this tab's theme in sync with toggles in other tabs. Mount once (ThemeToggle does). */
export function useThemeSync() {
  useEffect(() => {
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
}

function subscribe(onChange: () => void) {
  // Pinned scheme changes (this tab), and OS scheme changes while following the OS.
  const observer = new MutationObserver(onChange);
  observer.observe(document.head, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['content'],
  });
  const query = darkQuery();
  query.addEventListener('change', onChange);
  return () => {
    observer.disconnect();
    query.removeEventListener('change', onChange);
  };
}

/**
 * Live dark-mode state for script that needs it (e.g. the search palette's "Switch to …"
 * label). Styling should use the `dark:` variant instead. `null` until mounted.
 */
export function useIsDark(): boolean | null {
  return useSyncExternalStore(subscribe, isDarkNow, () => null);
}
