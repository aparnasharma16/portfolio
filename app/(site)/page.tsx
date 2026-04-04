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
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[var(--muted-fg)]">
          <span>{profile.identityLine}</span>
          <span className="text-[var(--subtle)]">·</span>
          <span className="inline-flex items-center gap-1">
            {profile.links.emailDisplay}
            <CopyEmailButton />
          </span>
        </p>
        <p className="mt-3 text-base leading-relaxed text-[var(--muted-fg)]">
          {profile.tagline}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <SocialLinks />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[var(--muted-fg)]">
          {profile.summary.slice(0, 280)}
          {profile.summary.length > 280 ? "…" : ""}
        </p>
      </div>

      <HomeExperiencePreview jobs={experience} previewCount={3} />

      <section className="mt-12 border-t border-[var(--border)] pt-10">
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
  return (
    <>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-[var(--border)] p-2 text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
        aria-label="GitHub"
      >
        <GithubIcon className="h-5 w-5" />
      </a>
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-[var(--border)] p-2 text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
        aria-label="LinkedIn"
      >
        <LinkedInIcon className="h-5 w-5" />
      </a>
      <a
        href={profile.links.email}
        className="rounded-lg border border-[var(--border)] p-2 text-[var(--muted-fg)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
        aria-label="Email"
      >
        <MailIcon className="h-5 w-5" />
      </a>
    </>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
