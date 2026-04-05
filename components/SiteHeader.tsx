'use client';

import { SearchCommand } from '@/components/SearchCommand';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/impact', label: 'Impact' },
  { href: '/blog', label: 'Blog' },
  { href: '/hobbies', label: 'Hobbies' },
  { href: '/resume', label: 'Resume' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change + lock body scroll
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center px-5 py-4">
          <nav
            className="hidden flex-wrap items-center gap-x-8 gap-y-2 text-[0.92rem] font-medium tracking-[-0.015em] sm:flex"
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

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--control-bg)] text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)] sm:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>

          <div className="ml-auto flex items-center gap-2">
            <SearchCommand />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[55] bg-[var(--background)] sm:hidden">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
            <span className="text-[0.92rem] font-semibold text-[var(--foreground)]">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--control-bg)] text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Close menu"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile navigation">
            {nav.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-[var(--border)] py-3.5 text-[1rem] font-medium ${
                    active
                      ? 'text-[var(--foreground)]'
                      : 'text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
