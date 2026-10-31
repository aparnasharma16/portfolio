type JumpNavProps = {
  items: readonly { id: string; label: string }[];
};

/** In-page shortcuts for long pages. Scrolls sideways on small screens. */
export function JumpNav({ items }: JumpNavProps) {
  return (
    <nav aria-label="On this page" className="-mx-5 [scrollbar-width:none] overflow-x-auto px-5">
      <ul className="flex w-max gap-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="inline-flex h-8 items-center rounded-full border border-[var(--border)] px-3 text-[0.8rem] font-medium text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
