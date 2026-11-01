'use client';

import { isActivePath } from '@/components/navIcons';
import { SearchCommand } from '@/components/SearchCommand';
import { ThemeToggle } from '@/components/ThemeToggle';
import { profile, siteNav } from '@/lib/portfolio-data';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';

function subscribeToScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

/** True once the page has scrolled, so the header can show its divider. */
function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 4,
    () => false
  );
}

/**
 * Top bar. Desktop shows the primary nav inline; on mobile the nav lives in the
 * bottom `MobileDock`, so the bar only carries the name, search, and theme.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const reduceMotion = useReducedMotion();

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--background)] transition-colors duration-200 print:hidden ${
        scrolled ? 'border-[var(--border)]' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-2xl items-center gap-4 px-5">
        {/* Mobile brand; skipped on home, where the hero already shows the name. */}
        {pathname === '/' ? null : (
          <Link
            href="/"
            className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:hidden"
          >
            {profile.name}
          </Link>
        )}

        <nav className="hidden items-center sm:flex" aria-label="Primary">
          {siteNav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative inline-flex h-8 items-center rounded-lg px-3 text-[0.88rem] tracking-[-0.01em] transition-colors ${
                  active
                    ? 'font-semibold text-[var(--foreground)]'
                    : 'font-medium text-[var(--muted-fg)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]'
                }`}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-3 h-0.5 rounded-full bg-[var(--foreground)]"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 500, damping: 38 }
                    }
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchCommand />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
