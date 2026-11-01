'use client';

import { isActivePath, navIcons } from '@/components/navIcons';
import { siteNav } from '@/lib/portfolio-data';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Floating bottom navigation for small screens: thumb-reachable, always visible,
 * and the active tab's pill slides between items.
 */
export function MobileDock() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-[max(0.875rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-3 sm:hidden print:hidden"
    >
      <ul className="flex items-center gap-0.5 rounded-full border border-[var(--border)] bg-[var(--background)] p-1.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.3)]">
        {siteNav.map((item) => {
          const active = isActivePath(pathname, item.href);
          const Icon = navIcons[item.href];
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                className={`relative flex h-10 items-center justify-center gap-1.5 rounded-full text-[0.8rem] font-medium transition-colors ${
                  active
                    ? 'px-3.5 text-[var(--background)]'
                    : 'w-10 text-[var(--muted-fg)] active:scale-95'
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="dock-active"
                    className="absolute inset-0 rounded-full bg-[var(--foreground)]"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 500, damping: 38 }
                    }
                    aria-hidden
                  />
                ) : null}
                <Icon className="relative h-[1.1rem] w-[1.1rem]" />
                {active ? <span className="relative">{item.label}</span> : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
