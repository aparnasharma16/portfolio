type SectionIntroProps = {
  /** Heading id, so the parent `<section>` can use `aria-labelledby`. */
  id?: string;
  title: string;
  description?: string;
};

/** Title + short description at the top of a full-page section. */
export function SectionIntro({ id, title, description }: SectionIntroProps) {
  return (
    <div>
      <h2
        id={id}
        className="text-[1.25rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-xl text-[0.9rem] leading-6 text-pretty text-[var(--muted-fg)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
