import { SectionIntro } from "@/components/SectionIntro";

type Item = {
  title: string;
  org: string;
  date: string;
  note: string;
};

export function RecognitionList({ items }: { items: readonly Item[] }) {
  return (
    <section className="mt-14">
      <SectionIntro
        eyebrow="Recognition"
        title="Certifications and awards"
        description="Signals of consistency matter too. These recognitions support the delivery and ownership story shown across the rest of the portfolio."
      />
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.date}`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-[0.94rem] font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.82rem] text-[var(--muted-fg)]">
                  {item.org}
                </p>
              </div>
              <p className="text-[0.78rem] text-[var(--subtle)]">{item.date}</p>
            </div>
            <p className="mt-3 text-[0.85rem] leading-6 text-[var(--muted-fg)]">
              {item.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
