'use client';

import { isActivePath, navIcons } from '@/components/navIcons';
import type { siteNav } from '@/lib/portfolio-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { CSSProperties } from 'react';

/**
 * Floating bottom navigation for small screens: thumb-reachable, always visible, every
 * tab labelled (icons alone are ambiguous), and the active tab's pill slides between items.
 */
export function MobileDock({ nav }: { nav: typeof siteNav }) {
  const pathname = usePathname();
  const activeIndex = nav.findIndex((item) => isActivePath(pathname, item.href));
  // Tab width: 3.9rem, shrinking on very narrow phones (320px) so the dock never overflows.
  // The viewport minus the nav's side padding, the list's padding and its border.
  const tabWidth = { '--tab': `min(3.9rem, calc((100vw - 2rem - 2px) / ${nav.length}))` };

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-[max(0.875rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-3 sm:hidden print:hidden"
    >
      <ul
        style={tabWidth as CSSProperties}
        className="relative flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] p-1 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.3)]"
      >
        {/* One pill behind the active tab; tabs are equal width, so it slides by index. */}
        {activeIndex >= 0 ? (
          <li
            aria-hidden
            className="pointer-events-none absolute top-1 left-1 h-12 w-(--tab) rounded-full bg-[var(--foreground)] transition-[translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ translate: `${activeIndex * 100}% 0` }}
          />
        ) : null}
        {nav.map((item) => {
          const active = isActivePath(pathname, item.href);
          const Icon = navIcons[item.href];
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative flex h-12 w-(--tab) flex-col items-center justify-center gap-1 rounded-full text-micro leading-none font-medium transition-colors ${
                  active
                    ? 'text-[var(--background)]'
                    : 'text-[var(--muted-fg)] hover:text-[var(--foreground)] active:scale-95 motion-reduce:active:scale-100'
                }`}
              >
                <Icon className="relative h-[1.1rem] w-[1.1rem]" />
                <span className="relative">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
