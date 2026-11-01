import { roleAnchor, studyAnchor } from '@/lib/anchors';
import { caseStudies, experience, expertiseAreas, featuredWins, stack } from '@/lib/portfolio-data';

export type ContentGroup = 'Experience' | 'Case studies' | 'Stack' | 'Results' | 'How I work';

export type ContentEntry = {
  id: string;
  group: ContentGroup;
  title: string;
  description: string;
  /** Extra text a query can match on but that isn't shown. */
  keywords: readonly string[];
  href: string;
};

/**
 * Everything the ⌘K palette can find beyond the pages themselves: each role, case
 * study, stack item, result, and working practice, linked to where it lives.
 */
export const contentIndex: readonly ContentEntry[] = [
  ...experience.map((role) => ({
    id: `role:${roleAnchor(role)}`,
    group: 'Experience' as const,
    title: role.role,
    description: role.company,
    keywords: [role.periodShort, ...role.tech, ...role.highlights],
    href: `/work#${roleAnchor(role)}`,
  })),
  ...caseStudies.map((study) => ({
    id: `study:${studyAnchor(study)}`,
    group: 'Case studies' as const,
    title: study.title,
    description: study.company,
    keywords: [...study.tech, study.outcome, study.context],
    href: `/impact#${studyAnchor(study)}`,
  })),
  ...stack.flatMap((group) =>
    group.items.map((item) => ({
      id: `stack:${item}`,
      group: 'Stack' as const,
      title: item,
      description: group.title,
      keywords: [] as string[],
      href: '/impact#stack',
    }))
  ),
  ...featuredWins.map((win) => ({
    id: `result:${win.title}`,
    group: 'Results' as const,
    title: win.title,
    description: win.metric,
    keywords: [win.summary],
    href: '/impact#results',
  })),
  ...expertiseAreas.map((area) => ({
    id: `practice:${area.label}`,
    group: 'How I work' as const,
    title: area.label,
    description: area.description,
    keywords: area.details ?? [],
    href: '/impact#how-i-work',
  })),
];
