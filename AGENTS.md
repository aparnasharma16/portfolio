# Agent and contributor guide

Read this whole file before changing anything. It applies to people and AI agents alike.

## Confidentiality (required reading for every contributor and AI agent)

This portfolio is a public website. Any content about current or past employers, or their
clients, must follow the confidentiality policy below. Read it before editing portfolio content,
including `lib/portfolio-data.ts`, the resume PDF, blog posts, testimonials, page metadata, and
anything else rendered publicly.

### Employer confidentiality policy

This is the standard most employers and agencies expect. If an employer has its own written
policy or contract terms, those win wherever they are stricter.

Do not publicly share or upload confidential or non-public employer or client information on
LinkedIn, resumes, portfolios, personal websites, GitHub, presentations, or any other public
platform.

This includes, but is not limited to:

- Client names or client relationships that have not been approved for public disclosure
- Internal product names, codenames, or projects that have not been publicly announced
- Client-specific projects, initiatives, requirements, deliverables, or business information
- Project documents, reports, presentations, screenshots, designs, or other work artifacts
- Technical architecture, data sources, workflows, configurations, or implementation details
- Non-public business numbers: revenue, traffic, transaction volumes, user counts, error rates
- Confidential or proprietary information received from clients or other third parties

You may describe your role, skills, and experience at a high level, provided this does not
disclose confidential or non-public information.

If unsure whether something can be shared, check with the employer (manager or HR) before
publishing.

### Checklist for editing portfolio content

- **No client or internal product names.** A public employer name is fine (it is on LinkedIn);
  the internal tool or client you worked on there usually is not.
- **No domain-specific module or feature names.** Describe features generically, for example
  "multi-step approval workflow", "product listing page", or "internal operations dashboard".
  Standard industry terms that reveal nothing about the business (RBAC, caching, version history,
  rollback, mini cart, checkout) are fine.
- **No architecture, endpoint, database table, configuration, infrastructure, or token-mechanics
  details.**
- **No screenshots, designs, documents, or other artifacts** from work.
- **Numbers: relative, not absolute.** "Cut response time by about 40%" is fine;
  "50K transactions/day" is not, unless the company has published it.
- **Describe skills, responsibilities, and impact at a high level.**
- **Team work is team work.** Never claim "sole developer", "single developer", or "owned end to
  end" for a team project. Use "led", "built", "contributed to", or "delivered" for the specific
  part you did.
- **Testimonials must be real and approved.** If a quote names a client or internal product,
  replace it with a generic phrase ("the platform", "the client project") before it goes in the
  repo. Placeholder quotes must be marked `PLACEHOLDER` in the data and replaced before launch.
- **When in doubt, leave it out**, and ask the site owner to check with their employer.

## Code conventions

- **Content lives in `lib/portfolio-data.ts`.** Pages and components never hardcode profile facts,
  company names, stack items, or nav links. Derive values from the data (for example
  `currentRole`, `stack`, `siteNav`) instead of repeating them.
- **Reuse shared building blocks before writing new ones:**
  - Icons: `components/icons.tsx` (no one-off inline SVG components in pages).
  - Section headings with a "View all" link: `SectionHeading` + `ViewAllLink`.
  - Tech and skill pills: `TechChip` / `TechChipList`. Add missing brand glyphs there.
  - Expandable rows: `Disclosure` + `useDisclosureSet` (with `ExpandAllButton`). Bullets: `BulletList`.
  - Page chrome (header, footer, dock): `SiteShell`. Theme state: `lib/theme.ts` (`useIsDark`, `toggleTheme`).
  - Social links: `SocialLinks`. Logos: `CompanyLogo` (has a monogram fallback).
  - Status dot and badge: `StatusDot` / `StatusBadge`.
  - Buttons: `ButtonLink`. Page intros: `PageHeader`. Section titles: `SectionIntro` (full
    sections) or `SectionHeading` (previews with a "View all").
  - Motion: `components/SubtleMotion.tsx`. Every animation must respect reduced motion.
- **Colors come from CSS variables** in `app/globals.css` (`--foreground`, `--muted-fg`,
  `--border`, `--status`, …). Do not hardcode hex colors in components; add a token instead.
- **Accessibility:** decorative visuals get `aria-hidden`; icon-only links need `aria-label`;
  interactive disclosure uses `aria-expanded` and `aria-controls`.
- **Delete dead code** when replacing a component. No unused exports or files.
- Before finishing: `npm run format`, `npm run lint`, `npx tsc --noEmit`, and `npm run build`
  must all pass.

## Design rules

- **No gradients and no glassmorphism** (no `backdrop-blur`, no translucent surfaces). Surfaces
  are solid; elevation comes from a hairline border, or a small shadow only for floating UI
  (dock, toast, search dialog).
- **One bold element per page.** On home it is the headline. Everything else stays quiet: rows,
  hairlines, and plain text before boxes. Use a box only for something you act on.
- **Radius scale:** controls `rounded-lg`, containers `rounded-xl`, pills `rounded-full`.
- **Color:** neutral tokens plus one accent, `--accent-ink`, used for focus rings and link
  states only. Green `--status` means "current / available" and nothing else.
- **Type:** Hanken Grotesk only. Sentence case everywhere; no all-caps labels, no eyebrow text
  above headings, no `→` glued onto link text, no "A · B · C" meta strings. Numbers that compare
  (dates, metrics) use `tabular-nums`.
- **Motion answers the user** (expand, toast, dock tab). The only automatic motion is the home
  hero fading in on load. Never animate every section on scroll. Respect reduced motion.
