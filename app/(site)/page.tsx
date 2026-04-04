import { CopyEmailButton } from "@/components/CopyEmailButton";
import { HomeExperiencePreview } from "@/components/HomeExperiencePreview";
import {
  accomplishments,
  education,
  experience,
  profile,
} from "@/lib/portfolio-data";

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-10 md:py-16">
      <div>
        <h1 className="text-[1.75rem] font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-[2rem]">
          {profile.name}
        </h1>
        <p className="mt-1.5 text-[0.88rem] text-[var(--muted-fg)]">
          {profile.identityLine}
          <span className="text-[var(--subtle)]"> · </span>
          <span className="inline-flex items-center gap-1">
            {profile.links.emailDisplay}
            <CopyEmailButton />
          </span>
        </p>
        <p className="mt-4 text-[0.92rem] leading-relaxed text-[var(--muted-fg)]">
          {profile.tagline}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <SocialLinks />
        </div>
      </div>

      <HomeExperiencePreview jobs={experience} previewCount={3} />

      <section className="mt-8 border-t border-[var(--border)] pt-6">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Education
        </h2>
        <p className="mt-2 text-sm text-[var(--muted-fg)]">
          {education.degree} — {education.school} ({education.years})
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Accomplishments
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-[var(--muted-fg)]">
          {accomplishments.map((a) => (
            <li key={a.title}>
              <span className="font-medium text-[var(--foreground)]">
                {a.title}
              </span>
              <span className="text-[var(--subtle)]"> · </span>
              {a.org} ({a.date})
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function SocialLinks() {
  const iconClass =
    "group relative text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]";
  const tooltipClass =
    "pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--foreground)] px-2 py-0.5 text-[0.65rem] font-medium text-[var(--background)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100";
  const arrowClass =
    "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rotate-45 bg-[var(--foreground)]";
  return (
    <>
      <a
        href={profile.links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="X / Twitter"
      >
        <XIcon className="h-[1.1rem] w-[1.1rem]" />
        <span className={tooltipClass}>X / Twitter<span className={arrowClass} /></span>
      </a>
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="LinkedIn"
      >
        <LinkedInIcon className="h-[1.1rem] w-[1.1rem]" />
        <span className={tooltipClass}>LinkedIn<span className={arrowClass} /></span>
      </a>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="GitHub"
      >
        <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
        <span className={tooltipClass}>GitHub<span className={arrowClass} /></span>
      </a>
      <a
        href={profile.links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClass}
        aria-label="Instagram"
      >
        <InstagramIcon className="h-[1.1rem] w-[1.1rem]" />
        <span className={tooltipClass}>Instagram<span className={arrowClass} /></span>
      </a>
      <a
        href={profile.links.email}
        className={iconClass}
        aria-label="Email"
      >
        <MailIcon className="h-[1.1rem] w-[1.1rem]" />
        <span className={tooltipClass}>Email<span className={arrowClass} /></span>
      </a>
    </>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
