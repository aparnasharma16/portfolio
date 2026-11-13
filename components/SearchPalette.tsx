'use client';

import {
  BookOpenIcon,
  BriefcaseIcon,
  CopyIcon,
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  TrendingUpIcon,
  UsersIcon,
} from '@/components/icons';
import { navIcons } from '@/components/navIcons';
import { TechGlyph } from '@/components/TechChip';
import { showToast } from '@/components/Toast';
import { profile, siteNav } from '@/lib/portfolio-data';
import { contentIndex, type ContentGroup } from '@/lib/search-index';
import { toggleTheme, useIsDark } from '@/lib/theme';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';

type GroupTitle = 'Pages' | ContentGroup | 'Actions';

type Command = {
  id: string;
  group: GroupTitle;
  title: string;
  description: string;
  keywords: readonly string[];
  icon: ReactNode;
  run: () => void;
};

/** Display order when nothing outranks it. Content only appears once you type. */
const groupOrder: readonly GroupTitle[] = [
  'Pages',
  'Experience',
  'Case studies',
  'Expertise',
  'Results',
  'How I work',
  'Actions',
];
const PER_GROUP = 4;

const RECENT_KEY = 'portfolio-recent-commands';
const RECENT_LIMIT = 2;

const iconClass = 'h-3.5 w-3.5';
const contentIcons: Record<Exclude<ContentGroup, 'Expertise'>, ReactNode> = {
  Experience: <BriefcaseIcon className={iconClass} />,
  'Case studies': <BookOpenIcon className={iconClass} />,
  Results: <TrendingUpIcon className={iconClass} />,
  'How I work': <UsersIcon className={iconClass} />,
};

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

/**
 * How well a command matches: lower is better, null is no match. Every word of the
 * query must appear somewhere; a hit at the start of the title ranks first.
 */
function matchScore(command: Command, query: string): number | null {
  const title = command.title.toLowerCase();
  const haystack = [title, command.description, ...command.keywords]
    .join(' ')
    .toLowerCase()
    .replace(/[‘’]/g, "'");
  if (!query.split(/\s+/).every((word) => haystack.includes(word))) return null;
  if (title.startsWith(query)) return 0;
  if (title.includes(` ${query}`)) return 1;
  if (title.includes(query)) return 2;
  return 3;
}

/**
 * Light dismiss (click the backdrop to close) where `<dialog closedby="any">` isn't
 * supported yet. Tests the pointer position, not the event target, since the dialog is
 * also the target for its own padding; press and release must both land outside.
 */
function addLightDismissFallback(dialog: HTMLDialogElement) {
  if ('closedBy' in HTMLDialogElement.prototype) return () => {};
  const outside = (event: PointerEvent) => {
    const rect = dialog.getBoundingClientRect();
    return (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    );
  };
  let pressedOutside = false;
  const onDown = (event: PointerEvent) => (pressedOutside = outside(event));
  const onUp = (event: PointerEvent) => {
    if (pressedOutside && outside(event)) dialog.close();
  };
  dialog.addEventListener('pointerdown', onDown);
  dialog.addEventListener('pointerup', onUp);
  return () => {
    dialog.removeEventListener('pointerdown', onDown);
    dialog.removeEventListener('pointerup', onUp);
  };
}

type SearchPaletteProps = {
  /** Show or hide the dialog. Each opening mounts a fresh palette (see SearchCommand). */
  open: boolean;
  /** The dialog closed (Esc, backdrop, a command ran, or `open` went false). */
  onClose: () => void;
};

/**
 * ⌘K palette: jump to a page, a role, a case study, or a tool in the stack, or run a
 * quick action (copy email, download resume, switch theme, open profiles). Loaded on
 * demand by `SearchCommand`, so none of this ships with the first page load.
 */
export default function SearchPalette({ open, onClose }: SearchPaletteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isDark = useIsDark();
  const listId = useId();

  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [recent] = useState(readRecent);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  /** Closing goes through the dialog; its `close` event syncs `open` (Esc and backdrop too). */
  const close = useCallback(() => dialogRef.current?.close(), []);

  /** Go to `href`. Same-page anchors use the hash directly so open rows react to it. */
  const navigate = useCallback(
    (href: string) => {
      const [path, hash] = href.split('#');
      if (path !== pathname || !hash) {
        router.push(href);
      } else if (window.location.hash === `#${hash}`) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      } else {
        window.location.hash = hash;
      }
    },
    [pathname, router]
  );

  const commands = useMemo<Command[]>(
    () => [
      ...siteNav.map((item) => {
        const Icon = navIcons[item.href];
        return {
          id: `page:${item.href}`,
          group: 'Pages' as const,
          title: item.label,
          description: item.description,
          keywords: item.keywords,
          icon: <Icon className={iconClass} />,
          run: () => router.push(item.href),
        };
      }),
      ...contentIndex.map((entry) => ({
        ...entry,
        icon:
          entry.group === 'Expertise' ? (
            <TechGlyph
              name={entry.title}
              className={iconClass}
              fallback={<span className="h-1.5 w-1.5 rounded-full bg-[var(--subtle)]" />}
            />
          ) : (
            contentIcons[entry.group]
          ),
        run: () => navigate(entry.href),
      })),
      {
        id: 'copy-email',
        group: 'Actions',
        title: 'Copy email',
        description: profile.links.emailDisplay,
        keywords: ['email', 'contact', 'mail', 'hire'],
        icon: <CopyIcon className={iconClass} />,
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
        icon: <DownloadIcon className={iconClass} />,
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
        icon: isDark ? <SunIcon className={iconClass} /> : <MoonIcon className={iconClass} />,
        run: toggleTheme,
      },
      {
        id: 'linkedin',
        group: 'Actions',
        title: 'Open LinkedIn',
        description: 'New tab',
        keywords: ['linkedin', 'profile', 'social'],
        icon: <LinkedInIcon className={iconClass} />,
        run: () => window.open(profile.links.linkedin, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'github',
        group: 'Actions',
        title: 'Open GitHub',
        description: 'New tab',
        keywords: ['github', 'code', 'social'],
        icon: <GithubIcon className={iconClass} />,
        run: () => window.open(profile.links.github, '_blank', 'noopener,noreferrer'),
      },
    ],
    [router, navigate, isDark]
  );

  /** Groups in display order; `results` is the same items flattened for keyboard nav. */
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[‘’]/g, "'");

    if (!q) {
      const recentCommands = recent
        .map((id) => commands.find((command) => command.id === id))
        .filter((command): command is Command => command !== undefined)
        .slice(0, RECENT_LIMIT);
      const recentIds = new Set(recentCommands.map((command) => command.id));
      const rest = (group: GroupTitle) =>
        commands.filter((c) => c.group === group && !recentIds.has(c.id));
      return [
        { title: 'Recent', items: recentCommands },
        { title: 'Pages', items: rest('Pages') },
        { title: 'Actions', items: rest('Actions') },
      ].filter((group) => group.items.length > 0);
    }

    const scored = commands
      .map((command) => ({ command, score: matchScore(command, q) }))
      .filter((hit): hit is { command: Command; score: number } => hit.score !== null);

    return groupOrder
      .map((title) => {
        const hits = scored
          .filter((hit) => hit.command.group === title)
          .sort((a, b) => a.score - b.score);
        return {
          title,
          best: hits[0]?.score ?? Infinity,
          items: hits.slice(0, PER_GROUP).map((hit) => hit.command),
        };
      })
      .filter((group) => group.items.length > 0)
      .sort((a, b) => a.best - b.best);
  }, [commands, query, recent]);

  const results = useMemo(() => groups.flatMap((group) => group.items), [groups]);
  const activeCommand = results[Math.min(active, results.length - 1)];

  const runCommand = useCallback(
    (command: Command) => {
      rememberRecent(command.id);
      close();
      command.run();
    },
    [close]
  );

  // Open as a native modal: the browser makes the page inert, keeps focus inside, closes
  // on Esc / back gesture, and returns focus to whatever opened it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    return dialog ? addLightDismissFallback(dialog) : undefined;
  }, []);

  // Keep the active row in view. Scrolls the list only: `scrollIntoView` would also scroll
  // the page, since the dialog's DOM parent (the sticky header) sits in the document.
  useEffect(() => {
    const list = listRef.current;
    const row = list?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!list || !row) return;
    const top = row.offsetTop - list.offsetTop;
    const bottom = top + row.offsetHeight;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (bottom > list.scrollTop + list.clientHeight)
      list.scrollTop = bottom - list.clientHeight;
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
    }
  }

  const optionId = (command: Command) => `${listId}-${command.id}`;

  return (
    <dialog
      ref={dialogRef}
      // Click the backdrop to close (fallback above for browsers without `closedby`).
      {...({ closedby: 'any' } as object)}
      aria-label="Search and commands"
      onClose={onClose}
      className="command-dialog mx-auto mt-[min(18vh,10rem)] w-[calc(100%-2rem)] max-w-[32rem] overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--background)] p-0 text-[var(--foreground)] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center gap-3 border-b border-[var(--border)] pr-2 pl-4">
        <SearchIcon className="h-4 w-4 shrink-0 text-[var(--muted-fg)]" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-label="Search"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={activeCommand ? optionId(activeCommand) : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          enterKeyHint="go"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={onInputKeyDown}
          placeholder="Search roles, skills, pages"
          // 16px on phones: anything smaller makes iOS Safari zoom the page on focus.
          className="h-12 w-full min-w-0 bg-transparent text-base text-[var(--foreground)] placeholder:text-[var(--muted-fg)] focus-visible:outline-none sm:h-11 sm:text-body"
        />
        <button
          type="button"
          onClick={close}
          aria-label="Close search"
          className="shrink-0 rounded-md px-2 py-1 text-small font-medium text-[var(--muted-fg)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)] pointer-fine:border pointer-fine:border-[var(--border)] pointer-fine:px-1.5 pointer-fine:py-0.5 pointer-fine:text-caption"
        >
          <span className="pointer-coarse:hidden">Esc</span>
          <span className="pointer-fine:hidden">Cancel</span>
        </button>
      </div>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-label="Results"
        className="max-h-[min(22rem,55vh)] overflow-y-auto overscroll-contain p-1"
      >
        {results.length === 0 ? (
          <li className="px-6 py-10 text-center text-small text-pretty text-[var(--muted-fg)]">
            Nothing matches &ldquo;{query.trim()}&rdquo;. Try a skill like &ldquo;React&rdquo;, or
            &ldquo;resume&rdquo;.
          </li>
        ) : (
          groups.map((group) => (
            <li key={group.title} role="presentation">
              <p
                className="px-2.5 pt-2.5 pb-1 text-caption font-medium text-[var(--muted-fg)]"
                aria-hidden
              >
                {group.title}
              </p>
              <ul role="group" aria-label={group.title}>
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
                      className={`flex min-h-10 cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-1.5 sm:min-h-9 ${
                        selected ? 'bg-[var(--secondary)]' : ''
                      }`}
                    >
                      <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[var(--muted-fg)]">
                        {command.icon}
                      </span>
                      {/* Phones: title over description. Wider: one line, and the description
                                gives way first when space runs out. */}
                      <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-2.5">
                        <span className="truncate text-body text-[var(--foreground)] sm:text-control">
                          {command.title}
                        </span>
                        <span className="truncate text-small text-[var(--muted-fg)] sm:min-w-[4rem] sm:flex-1 sm:shrink-[4]">
                          {command.description}
                        </span>
                      </span>
                      <kbd
                        className={`ml-auto shrink-0 font-sans text-caption text-[var(--muted-fg)] pointer-coarse:hidden ${
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

      <p className="sr-only" role="status" aria-live="polite">
        {query.trim() ? `${results.length} ${results.length === 1 ? 'result' : 'results'}` : ''}
      </p>

      <div className="flex items-center gap-4 border-t border-[var(--border)] px-4 py-1.5 text-caption text-[var(--muted-fg)] pointer-coarse:hidden">
        <span>↑↓ to move</span>
        <span>↵ to open</span>
        <span className="ml-auto">Esc to close</span>
      </div>
    </dialog>
  );
}
