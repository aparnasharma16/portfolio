type JumpNavProps = {
  items: readonly { id: string; label: string }[];
};

/** In-page shortcuts for long pages. Scrolls sideways on small screens. */
export function JumpNav({ items }: JumpNavProps) {
  return (
    <nav
      aria-label="On this page"
      className="-mx-5 -my-1.5 [scrollbar-width:none] overflow-x-auto px-5 py-1.5 print:hidden"
    >
      <ul className="flex w-max gap-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="touch-target inline-flex h-8 items-center rounded-full border border-[var(--border)] px-3 text-small font-medium text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
