'use client';

import { isActivePath } from '@/components/navIcons';
import { SearchCommand } from '@/components/SearchCommand';
import { ThemeToggle } from '@/components/ThemeToggle';
import type { siteNav } from '@/lib/portfolio-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';

/** Browsers with scroll-state queries show the divider from CSS alone (globals.css). */
const cssHandlesDivider = () => CSS.supports('container-type', 'scroll-state');

function subscribeToScroll(onChange: () => void) {
  if (cssHandlesDivider()) return () => {};
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

/**
 * Fallback for browsers without scroll-state queries: true once the page has scrolled,
 * so the header can show its divider. Always false where CSS does the job.
 */
function useScrolledFallback() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => !cssHandlesDivider() && window.scrollY > 4,
    () => false
  );
}

/**
 * Top bar. Desktop shows the primary nav inline; on mobile the nav lives in the
 * bottom `MobileDock`, so the bar only carries the name, search, and theme.
 */
export function SiteHeader({ name, nav }: { name: string; nav: typeof siteNav }) {
  const pathname = usePathname();
  const scrolled = useScrolledFallback();

  return (
    <header
      data-scrolled={scrolled ? '' : undefined}
      className="site-header group/header sticky top-0 z-50 border-b border-transparent bg-[var(--background)] print:hidden"
    >
      {/* Divider once scrolled: CSS scroll-state query, or `data-scrolled` as a fallback. */}
      <span
        className="site-header-rule pointer-events-none absolute inset-x-0 -bottom-px h-px bg-[var(--border)] opacity-0 transition-opacity duration-200 group-data-[scrolled]/header:opacity-100"
        aria-hidden
      />
      <div className="mx-auto flex h-14 max-w-2xl items-center gap-4 px-5">
        {/* Mobile brand on every page, so the bar looks the same across routes. */}
        <Link href="/" className="touch-target text-subheading text-[var(--foreground)] sm:hidden">
          {name}
        </Link>

        <nav className="nav-underline relative hidden items-center sm:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`touch-target inline-flex h-8 items-center rounded-lg px-3 text-control transition-colors ${
                  active
                    ? 'font-medium text-[var(--foreground)]'
                    : 'font-medium text-[var(--muted-fg)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]'
                }`}
              >
                {item.label}
                {active ? (
                  // Static underline for browsers without anchor positioning; elsewhere one
                  // underline on the nav slides between links (`.nav-underline`, globals.css).
                  <span
                    className="nav-underline-fallback absolute inset-x-3 -bottom-3 rounded-full border-b-2 border-[var(--foreground)]"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 pointer-coarse:gap-3">
          <SearchCommand />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
