type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--subtle)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-[1.28rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-[0.92rem] leading-7 text-[var(--muted-fg)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
