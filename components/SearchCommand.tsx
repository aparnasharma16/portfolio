"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

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
    href: "/impact",
    title: "Go to Impact",
    description: "View case studies and impact highlights",
    keywords: ["impact", "case studies", "proof", "highlights"],
    shortcut: "I",
    icon: SparklesIcon,
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => {
      const hay = [c.title, c.description, c.shortcut, ...c.keywords]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  // Keyboard nav
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        const el = listRef.current?.querySelector(
          `[data-index="${selectedIndex}"]`
        ) as HTMLAnchorElement | null;
        el?.click();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, selectedIndex]);

  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const modal = open ? (
    <div
      className="fixed inset-0"
      style={{ zIndex: 9999, isolation: "isolate" }}
    >
      {/* Full-screen dark overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={close}
        aria-hidden
      />
      {/* Centered dialog */}
      <div
        className="relative flex h-full w-full items-start justify-center px-4 pt-[min(20vh,12rem)]"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={close}
      >
        <div
          className="w-full max-w-[32rem] overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--background)] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3.5">
            <SearchIcon className="h-5 w-5 shrink-0 text-[var(--muted-fg)]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Type a command or search..."
              className="w-full bg-transparent text-[0.95rem] text-[var(--foreground)] outline-none placeholder:text-[var(--muted-fg)]"
            />
            <kbd className="shrink-0 rounded-md border border-[var(--border)] bg-[var(--secondary)] px-2 py-0.5 text-[0.7rem] font-medium text-[var(--muted-fg)]">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div
            ref={listRef}
            className="max-h-[min(26rem,55vh)] overflow-y-auto overscroll-contain p-2"
          >
            <p className="px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-widest text-[var(--muted-fg)]">
              Navigation
            </p>

            {filtered.length > 0 ? (
              <ul className="space-y-0.5">
                {filtered.map((command, i) => {
                  const Icon = command.icon;
                  const isSelected = i === selectedIndex;
                  return (
                    <li key={command.href}>
                      <Link
                        href={command.href}
                        data-index={i}
                        onClick={close}
                        onMouseEnter={() => setSelectedIndex(i)}
                        className={`flex items-center gap-3.5 rounded-xl px-3 py-3 transition-colors ${
                          isSelected
                            ? "bg-[var(--secondary)]"
                            : "hover:bg-[var(--secondary)]"
                        }`}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[var(--muted-fg)]">
                          <Icon className="h-[1.15rem] w-[1.15rem]" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.92rem] font-medium text-[var(--foreground)]">
                            {command.title}
                          </span>
                          <span className="block text-[0.8rem] leading-snug text-[var(--muted-fg)]">
                            {command.description}
                          </span>
                        </span>
                        <kbd className="shrink-0 rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[0.75rem] font-medium text-[var(--muted-fg)]">
                          {command.shortcut}
                        </kbd>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="px-3 py-8 text-center text-[0.88rem] text-[var(--muted-fg)]">
                No matching commands found.
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-2.5 text-[0.7rem] text-[var(--muted-fg)]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-[var(--border)] bg-[var(--secondary)] px-1.5 py-0.5">↑</kbd>
                <kbd className="rounded border border-[var(--border)] bg-[var(--secondary)] px-1.5 py-0.5">↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-[var(--border)] bg-[var(--secondary)] px-1.5 py-0.5">↵</kbd>
                select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-[var(--border)] bg-[var(--secondary)] px-1.5 py-0.5">⌘K</kbd>
              to open
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Mobile button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--control-bg)] text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)] sm:hidden"
        aria-label="Open search"
      >
        <SearchIcon className="h-4 w-4" />
      </button>
      {/* Desktop button */}
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

      {/* Portal to body so it's above everything including sticky header */}
      {mounted ? createPortal(modal, document.body) : null}
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

function SparklesIcon({ className }: { className?: string }) {
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
      <path d="m12 3 1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9L12 3Z" />
      <path d="M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16Z" />
      <path d="M19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
    </svg>
  );
}
