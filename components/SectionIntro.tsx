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
      <h2 id={id} className="text-heading text-[var(--foreground)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-xl text-body text-pretty text-[var(--muted-fg)]">{description}</p>
      ) : null}
    </div>
  );
}
