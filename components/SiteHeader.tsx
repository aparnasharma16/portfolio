"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchCommand } from "@/components/SearchCommand";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center gap-2 px-5 py-4">
        <div className="w-[4.5rem] shrink-0 sm:w-24" aria-hidden />
        <nav
          className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[0.92rem] font-medium tracking-[-0.015em]"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex w-[4.5rem] shrink-0 items-center justify-end gap-2 sm:w-24">
          <SearchCommand />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
