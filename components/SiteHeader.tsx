'use client';

import { SearchCommand } from '@/components/SearchCommand';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/impact', label: 'Impact' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center px-5 py-4">
        <nav
          className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[0.92rem] font-medium tracking-[-0.015em]"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]'
                }
              >
                {item.label}
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
