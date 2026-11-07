import type { CaseStudy, ExperienceEntry } from '@/lib/portfolio-data';

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** URL fragment for one role on /work, e.g. `#merkle-frontend-developer` (company name before any comma). */
export const roleAnchor = (role: ExperienceEntry) =>
  slug(`${role.company.split(/[,/]/)[0]} ${role.role}`);

/** URL fragment for one case study on /impact. */
export const studyAnchor = (study: CaseStudy) => slug(study.title);
