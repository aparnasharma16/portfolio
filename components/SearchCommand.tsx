"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const commands = [
  {
    href: "/",
    title: "Go to Home",
    description: "Navigate to the homepage",
    keywords: ["home", "landing", "index"],
    shortcut: "H",
    icon: HomeIcon,
  },
  {
    href: "/work",
    title: "Go to Work",
    description: "View work experience",
    keywords: ["work", "experience", "career"],
    shortcut: "W",
    icon: BriefcaseIcon,
  },
  {
    href: "/blog",
    title: "Go to Blog",
    description: "Browse all blog posts",
    keywords: ["blog", "writing", "articles"],
    shortcut: "B",
    icon: BookOpenIcon,
  },
  {
    href: "/resume",
    title: "Go to Resume",
    description: "View and download resume",
    keywords: ["resume", "cv", "profile"],
    shortcut: "R",
    icon: FileTextIcon,
  },
] as const;

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((value) => !value);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;

    return commands.filter((command) => {
      const haystack = [
        command.title,
        command.description,
        command.shortcut,
        ...command.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--control-bg)] text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)] sm:hidden"
        aria-label="Open search"
      >
        <SearchIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-10 min-w-[6.8rem] items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3.5 text-[0.9rem] text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)] sm:flex"
        aria-label="Open search"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="rounded-md bg-[var(--secondary)] px-1.5 py-0.5 font-sans text-[0.85rem] font-medium tracking-[-0.02em] opacity-90">
          ⌘K
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-white/20 p-4 pt-[18vh] backdrop-blur-md dark:bg-black/40"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          onClick={close}
        >
          <div
            className="w-full max-w-[33.5rem] overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--background)] shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-[var(--border)] px-4 py-3">
              <label className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-4 py-3">
                <SearchIcon className="h-5 w-5 shrink-0 text-[var(--muted-fg)]" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent text-[1.05rem] text-[var(--foreground)] outline-none placeholder:text-[var(--muted-fg)]"
                />
              </label>
            </div>

            <div className="max-h-[38rem] overflow-y-auto px-4 pb-4 pt-3">
              <p className="px-2 text-[0.95rem] font-medium text-[var(--muted-fg)]">
                Navigation
              </p>

              <ul className="mt-3 space-y-1.5">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command) => {
                    const Icon = command.icon;

                    return (
                      <li key={command.href}>
                        <Link
                          href={command.href}
                          onClick={close}
                          className="flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-[var(--secondary)]"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[var(--foreground)]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[0.98rem] font-medium tracking-[-0.02em] text-[var(--foreground)]">
                              {command.title}
                            </span>
                            <span className="mt-0.5 block text-[0.92rem] leading-6 text-[var(--muted-fg)]">
                              {command.description}
                            </span>
                          </span>
                          <span className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[0.82rem] font-medium text-[var(--muted-fg)] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                            {command.shortcut}
                          </span>
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <li className="rounded-2xl px-3 py-8 text-center text-[0.95rem] text-[var(--muted-fg)]">
                    No matching commands found.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function SearchIcon({ className }: { className?: string }) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12h18" />
      <path d="M10 12v1m4-1v1" />
    </svg>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22Z" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}
