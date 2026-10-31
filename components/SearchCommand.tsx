'use client';

import {
  CopyIcon,
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '@/components/icons';
import { navIcons } from '@/components/navIcons';
import { Toast, useToast } from '@/components/Toast';
import { profile, siteNav } from '@/lib/portfolio-data';
import { toggleTheme, useIsDark } from '@/lib/theme';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useRouter } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ComponentType,
} from 'react';
import { createPortal } from 'react-dom';

type Command = {
  id: string;
  group: 'Pages' | 'Actions';
  title: string;
  description: string;
  keywords: readonly string[];
  Icon: ComponentType<{ className?: string }>;
  run: () => void;
};

const RECENT_KEY = 'portfolio-recent-commands';
const RECENT_LIMIT = 2;

function readRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function rememberRecent(id: string) {
  try {
    const next = [id, ...readRecent().filter((item) => item !== id)].slice(0, 5);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: recents are a nicety */
  }
}

const subscribeNever = () => () => {};

/**
 * ⌘K palette: jump to a page or run a quick action (copy email, download resume,
 * switch theme, open profiles). Recent picks surface first when the query is empty.
 */
export function SearchCommand() {
  const router = useRouter();
  const isDark = useIsDark();
  const reduceMotion = useReducedMotion();
  const { message: toastMessage, show: showToast } = useToast();
  const listId = useId();
  const mounted = useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false
  );

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const openPalette = useCallback(() => {
    setRecent(readRecent());
    setQuery('');
    setActive(0);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const commands = useMemo<Command[]>(
    () => [
      ...siteNav.map((item) => ({
        id: `page:${item.href}`,
        group: 'Pages' as const,
        title: item.label,
        description: item.description,
        keywords: item.keywords,
        Icon: navIcons[item.href],
        run: () => router.push(item.href),
      })),
      {
        id: 'copy-email',
        group: 'Actions',
        title: 'Copy email',
        description: profile.links.emailDisplay,
        keywords: ['email', 'contact', 'mail', 'hire'],
        Icon: CopyIcon,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.links.emailDisplay);
            showToast('Email copied');
          } catch {
            showToast('Copy failed. Use the email link instead');
          }
        },
      },
      {
        id: 'download-resume',
        group: 'Actions',
        title: 'Download resume',
        description: 'PDF',
        keywords: ['resume', 'cv', 'pdf', 'download'],
        Icon: DownloadIcon,
        run: () => {
          const link = document.createElement('a');
          link.href = profile.resumePdfPath;
          link.download = '';
          link.click();
        },
      },
      {
        id: 'theme',
        group: 'Actions',
        title: isDark ? 'Switch to light theme' : 'Switch to dark theme',
        description: 'Appearance',
        keywords: ['theme', 'dark', 'light', 'mode', 'appearance'],
        Icon: isDark ? SunIcon : MoonIcon,
        run: toggleTheme,
      },
      {
        id: 'linkedin',
        group: 'Actions',
        title: 'Open LinkedIn',
        description: 'New tab',
        keywords: ['linkedin', 'profile', 'social'],
        Icon: LinkedInIcon,
        run: () => window.open(profile.links.linkedin, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'github',
        group: 'Actions',
        title: 'Open GitHub',
        description: 'New tab',
        keywords: ['github', 'code', 'social'],
        Icon: GithubIcon,
        run: () => window.open(profile.links.github, '_blank', 'noopener,noreferrer'),
      },
    ],
    [router, isDark, showToast]
  );

  /** Groups in display order; `results` is the same items flattened for keyboard nav. */
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = q
      ? commands.filter((command) =>
          [command.title, command.description, ...command.keywords]
            .join(' ')
            .toLowerCase()
            .includes(q)
        )
      : commands;

    const recentCommands = q
      ? []
      : recent
          .map((id) => commands.find((command) => command.id === id))
          .filter((command): command is Command => command !== undefined)
          .slice(0, RECENT_LIMIT);
    const recentIds = new Set(recentCommands.map((command) => command.id));

    return [
      { title: 'Recent', items: recentCommands },
      { title: 'Pages', items: matches.filter((c) => c.group === 'Pages' && !recentIds.has(c.id)) },
      {
        title: 'Actions',
        items: matches.filter((c) => c.group === 'Actions' && !recentIds.has(c.id)),
      },
    ].filter((group) => group.items.length > 0);
  }, [commands, query, recent]);

  const results = useMemo(() => groups.flatMap((group) => group.items), [groups]);
  const activeCommand = results[Math.min(active, results.length - 1)];

  const runCommand = useCallback((command: Command) => {
    rememberRecent(command.id);
    setOpen(false);
    command.run();
  }, []);

  // ⌘K / Ctrl+K toggles the palette from anywhere.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (open) close();
        else openPalette();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, openPalette]);

  // Lock page scroll and focus the input while open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = overflow;
      cancelAnimationFrame(frame);
    };
  }, [open]);

  // Keep the active row in view.
  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((index) => (index + 1) % Math.max(results.length, 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((index) => (index - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === 'Enter' && activeCommand) {
      event.preventDefault();
      runCommand(activeCommand);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      close();
    }
  }

  const optionId = (command: Command) => `${listId}-${command.id}`;

  const palette = (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center px-4 pt-[min(18vh,10rem)]">
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.15 }}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search and commands"
            className="relative w-full max-w-[32rem] overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--background)] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.4)]"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-4">
              <SearchIcon className="h-4 w-4 shrink-0 text-[var(--muted-fg)]" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls={listId}
                aria-activedescendant={activeCommand ? optionId(activeCommand) : undefined}
                aria-autocomplete="list"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="Search pages or actions"
                className="h-11 w-full bg-transparent text-[0.92rem] text-[var(--foreground)] placeholder:text-[var(--muted-fg)] focus-visible:outline-none"
              />
              <kbd className="shrink-0 rounded border border-[var(--border)] px-1.5 py-0.5 font-sans text-[0.68rem] text-[var(--muted-fg)]">
                Esc
              </kbd>
            </div>

            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              aria-label="Results"
              className="max-h-[min(20rem,50vh)] overflow-y-auto overscroll-contain p-1"
            >
              {results.length === 0 ? (
                <li className="px-3 py-10 text-center text-[0.86rem] text-[var(--muted-fg)]">
                  No results for &ldquo;{query}&rdquo;. Try &ldquo;resume&rdquo; or
                  &ldquo;email&rdquo;.
                </li>
              ) : (
                groups.map((group) => (
                  <li key={group.title} role="presentation">
                    <p className="px-2.5 pt-2 pb-0.5 text-[0.72rem] font-medium text-[var(--muted-fg)]">
                      {group.title}
                    </p>
                    <ul role="presentation">
                      {group.items.map((command) => {
                        const index = results.indexOf(command);
                        const selected = command === activeCommand;
                        return (
                          <li
                            key={command.id}
                            id={optionId(command)}
                            role="option"
                            aria-selected={selected}
                            onMouseMove={() => setActive(index)}
                            onClick={() => runCommand(command)}
                            className={`flex h-9 cursor-pointer items-center gap-2.5 rounded-md px-2.5 ${
                              selected ? 'bg-[var(--secondary)]' : ''
                            }`}
                          >
                            <command.Icon className="h-3.5 w-3.5 shrink-0 text-[var(--muted-fg)]" />
                            <span className="text-[0.86rem] text-[var(--foreground)]">
                              {command.title}
                            </span>
                            <span className="hidden min-w-0 flex-1 truncate text-[0.78rem] text-[var(--muted-fg)] sm:block">
                              {command.description}
                            </span>
                            <kbd
                              className={`ml-auto shrink-0 font-sans text-[0.75rem] text-[var(--muted-fg)] ${
                                selected ? 'opacity-100' : 'opacity-0'
                              }`}
                              aria-hidden
                            >
                              ↵
                            </kbd>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))
              )}
            </ul>

            <div className="flex items-center gap-4 border-t border-[var(--border)] px-4 py-1.5 text-[0.7rem] text-[var(--muted-fg)]">
              <span>↑↓ to move</span>
              <span>↵ to open</span>
              <span className="ml-auto">⌘K to toggle</span>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openPalette}
        className="flex h-8 items-center gap-1.5 rounded-full border border-[var(--border)] px-2 text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)] sm:pr-1.5 sm:pl-2.5"
        aria-label="Search pages and actions"
        aria-haspopup="dialog"
        aria-keyshortcuts="Meta+K Control+K"
      >
        <SearchIcon className="h-3.5 w-3.5" />
        <kbd className="hidden rounded bg-[var(--secondary)] px-1.5 py-px font-sans text-[0.68rem] leading-4 font-medium sm:inline">
          ⌘K
        </kbd>
      </button>

      {mounted ? createPortal(palette, document.body) : null}
      <Toast message={toastMessage} />
    </>
  );
}
