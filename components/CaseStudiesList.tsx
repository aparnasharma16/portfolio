'use client';

import { CompanyLogo } from '@/components/CompanyLogo';
import {
  Disclosure,
  ExpandAllButton,
  useDisclosureSet,
  useOpenFromHash,
} from '@/components/Disclosure';
import { SectionIntro } from '@/components/SectionIntro';
import { TechChipList } from '@/components/TechChip';
import { studyAnchor } from '@/lib/anchors';
import type { CaseStudy } from '@/lib/portfolio-data';

/** The story once opened; the outcome is shown in the summary (clamped until opened). */
const storySteps = [
  { key: 'context', label: 'Context' },
  { key: 'problem', label: 'Problem' },
  { key: 'ownership', label: 'What I did' },
] as const satisfies readonly { key: keyof CaseStudy; label: string }[];

/** Company-safe case studies: title and outcome up front, the full story on demand. */
export function CaseStudiesList({ studies }: { studies: readonly CaseStudy[] }) {
  const keys = studies.map(studyAnchor);
  const disclosure = useDisclosureSet(keys);
  // Keys are the anchors, so an `/impact#<study>` link opens that case study.
  useOpenFromHash((anchor) => (keys.includes(anchor) ? anchor : undefined), disclosure.show);

  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="scroll-mt-20">
      <div className="flex items-end justify-between gap-4">
        <SectionIntro
          id="case-studies-title"
          title="Case studies"
          description="Real team projects, described without confidential details. Open one for the full story."
        />
        <ExpandAllButton allOpen={disclosure.allOpen} onClick={disclosure.toggleAll} />
      </div>

      <ol className="mt-6 divide-y divide-[var(--border)] overflow-hidden rounded-xl border border-[var(--border)]">
        {studies.map((study) => {
          const key = studyAnchor(study);
          return (
            <li key={key} id={key} className="scroll-mt-20">
              <Disclosure
                open={disclosure.isOpen(key)}
                onToggle={() => disclosure.toggle(key)}
                summary={<StudySummary study={study} open={disclosure.isOpen(key)} />}
              >
                <dl className="space-y-4 border-t border-[var(--border)] pt-4 sm:pl-11">
                  {storySteps.map((step) => (
                    <div key={step.key}>
                      <dt className="text-small font-semibold text-[var(--foreground)]">
                        {step.label}
                      </dt>
                      <dd className="mt-1 text-body text-[var(--muted-fg)]">{study[step.key]}</dd>
                    </div>
                  ))}
                </dl>
                <div className="sm:pl-11">
                  <TechChipList items={study.tech} size="sm" className="mt-5" />
                  {study.artifacts ? <Artifacts items={study.artifacts} /> : null}
                </div>
              </Disclosure>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function StudySummary({ study, open }: { study: CaseStudy; open: boolean }) {
  return (
    <span className="flex items-start gap-3">
      <CompanyLogo src={study.logo} name={study.company} size="sm" />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline justify-between gap-x-4">
          <span className="text-subheading text-pretty text-[var(--foreground)]">
            {study.title}
          </span>
          <span className="text-small text-[var(--muted-fg)] tabular-nums">{study.period}</span>
        </span>
        <span className="block text-small font-medium text-[var(--muted-fg)]">{study.company}</span>
        <span
          className={`mt-2 block text-body text-[var(--muted-fg)] ${open ? '' : 'line-clamp-2 print:line-clamp-none'}`}
        >
          {study.outcome}
        </span>
      </span>
    </span>
  );
}

/** Long lists (e.g. a component library) stay folded until asked for. No JS needed. */
function Artifacts({ items }: { items: readonly string[] }) {
  return (
    <details className="group mt-5">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-small font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)] [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Show the {items.length} components</span>
        <span className="hidden group-open:inline">Hide components</span>
      </summary>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md bg-[var(--secondary)] px-2 py-0.5 text-caption text-[var(--muted-fg)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}
