import type { ReactNode } from 'react';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
};

export function SectionIntro({ eyebrow, title, description, icon }: SectionIntroProps) {
  return (
    <div>
      {eyebrow || icon ? (
        <div className="flex items-center gap-2">
          {icon ? (
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--chip-bg)] text-[var(--foreground)]">
              {icon}
            </span>
          ) : null}
          {eyebrow ? (
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--subtle)]">
              {eyebrow}
            </p>
          ) : null}
        </div>
      ) : null}
      <h2 className="mt-3 text-[1.32rem] font-bold tracking-[-0.03em] text-[var(--foreground)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 max-w-2xl text-[0.92rem] leading-7 text-[var(--muted-fg)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
