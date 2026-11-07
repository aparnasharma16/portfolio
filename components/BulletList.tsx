/** Muted bullet list for highlights inside rows and panels. */
export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-body text-[var(--muted-fg)]">
      {items.map((item) => (
        <li key={item} className="relative pl-4">
          <span
            className="absolute top-[0.65rem] left-0 h-1 w-1 rounded-full bg-[var(--subtle)]"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
