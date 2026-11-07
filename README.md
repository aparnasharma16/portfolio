# Aparna Sharma — portfolio

Personal site for Aparna Sharma, Senior Software Engineer. Built with Next.js (App Router),
React, TypeScript, Tailwind CSS v4, and Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Before opening a PR, all of these must pass:

```bash
npm run format     # Prettier (with Tailwind class sorting)
npm run lint
npx tsc --noEmit
npm run build
```

## Editing content

Almost everything on the site comes from one file: **`lib/portfolio-data.ts`**.

| To change…                               | Edit                                                       |
| ---------------------------------------- | ---------------------------------------------------------- |
| Name, headline, intro, links, email      | `profile`                                                  |
| Jobs and roles (Work page, home preview) | `experience`                                               |
| Results, case studies, how I work        | `featuredWins`, `caseStudies`, `expertiseAreas`            |
| Stack                                    | `stack`                                                    |
| Certifications and awards                | `accomplishments`                                          |
| Testimonials                             | `testimonials` (remove `placeholder: true` to publish one) |
| Hobbies and bookshelf                    | `hobbies`, `readingList`                                   |
| Navigation, search, footer links         | `siteNav`                                                  |

Images live in `public/`: the profile photo, company logos in `public/logos/`, and the resume
PDF (`profile.resumePdfPath`).

**Read [`AGENTS.md`](./AGENTS.md) before editing content.** It has the employer
confidentiality checklist (no internal product names, no non-public numbers, and so on) and the
code and design conventions.

## Notes

- The blog page exists but is hidden from navigation and search until `blogPosts` has entries.
  To launch it, add posts and a `/blog` entry to `siteNav`, then remove the `disallow` in
  `app/robots.ts` and the `robots` metadata in `app/(site)/blog/page.tsx`.
- `profile.siteUrl` drives the sitemap and robots URLs; update it if the domain changes.
