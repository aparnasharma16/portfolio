import { RuledCell, RuledGrid } from '@/components/RuledGrid';
import { SectionIntro } from '@/components/SectionIntro';
import type { FeaturedWin } from '@/lib/portfolio-data';

/** Headline outcomes: number first, then what it means. */
export function ResultsGrid({ wins }: { wins: readonly FeaturedWin[] }) {
  return (
    <section id="results" aria-labelledby="results-title" className="scroll-mt-20">
      <SectionIntro
        id="results-title"
        title="Results"
        description="Outcomes from team projects I led or contributed to."
      />
      <div className="mt-6">
        <RuledGrid>
          {wins.map((win) => (
            <RuledCell key={win.title}>
              <p className="text-[1.75rem] leading-none font-bold tracking-[-0.04em] text-[var(--foreground)] tabular-nums">
                {win.metric}
              </p>
              <h3 className="mt-2 text-[0.9rem] font-semibold text-[var(--foreground)]">
                {win.title}
              </h3>
              <p className="mt-1 text-[0.84rem] leading-6 text-[var(--muted-fg)]">{win.summary}</p>
            </RuledCell>
          ))}
        </RuledGrid>
      </div>
    </section>
  );
}
