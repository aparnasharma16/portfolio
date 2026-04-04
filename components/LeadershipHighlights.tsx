import { SectionIntro } from "@/components/SectionIntro";

export function LeadershipHighlights({
  items,
}: {
  items: readonly string[];
}) {
  return (
    <section className="mt-14">
      <SectionIntro
        eyebrow="Leadership"
        title="How I support teams"
        description="My contribution is not just shipping code. I help teams move faster by improving quality, clarifying direction, and supporting the people around me."
      />
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-4 text-[0.88rem] leading-6 text-[var(--muted-fg)]"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--foreground)] align-middle" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
