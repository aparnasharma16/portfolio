import { BulletList } from '@/components/BulletList';
import { SectionIntro } from '@/components/SectionIntro';
import type { ExpertiseArea } from '@/lib/portfolio-data';

/** Strengths as ruled rows: the label on the left, what it means on the right. */
export function HowIWork({ areas }: { areas: readonly ExpertiseArea[] }) {
  return (
    <section id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionIntro
        id="how-i-work-title"
        title="How I work"
        description="What teams can count on me for, and how I support the people around me."
      />
      <dl className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {areas.map((area) => (
          <div key={area.label} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="text-subheading text-[var(--foreground)]">{area.label}</dt>
            <dd>
              <p className="text-body text-[var(--muted-fg)]">{area.description}</p>
              {area.details ? (
                <div className="mt-3">
                  <BulletList items={area.details} />
                </div>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
