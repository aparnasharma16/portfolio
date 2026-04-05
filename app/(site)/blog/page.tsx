import { PageQuote } from '@/components/PageQuote';
import { MotionReveal } from '@/components/SubtleMotion';
import { blogPosts, profile, sitePageQuotes, upcomingBlogTopics } from '@/lib/portfolio-data';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: 'Writing on engineering and delivery.',
  openGraph: {
    title: `Blog — ${profile.name}`,
    description: 'Writing on engineering and delivery.',
  },
};

export default function BlogPage() {
  const hasPublishedPosts = blogPosts.length > 0;

  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-20">
      <MotionReveal>
        <>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-sm text-[var(--muted-fg)] md:text-base">
            Writing focused on frontend quality, delivery, and practical engineering lessons from
            commerce and payments work.
          </p>
        </>
      </MotionReveal>
      <MotionReveal delay={0.05}>
        {hasPublishedPosts ? (
          <ul className="mt-12 space-y-8">
            {blogPosts.map((post) => (
              <li
                key={post.slug}
                className="border-b border-[var(--border)] pb-8 last:border-0 last:pb-0"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-[var(--foreground)]">{post.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted-fg)]">
                      {post.description}
                    </p>
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-[var(--subtle)]">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {post.date}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <section className="mt-12 rounded-[1.5rem] border border-[var(--border)] bg-[var(--chip-bg)] px-6 py-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--subtle)]">
              Coming soon
            </p>
            <h2 className="mt-2 text-[1.3rem] font-bold tracking-[-0.03em] text-[var(--foreground)]">
              Practical writing, not filler content
            </h2>
            <p className="mt-3 text-[0.88rem] leading-7 text-[var(--muted-fg)]">
              I&apos;m preparing a few focused posts based on real engineering work rather than
              publishing generic content for the sake of it.
            </p>
            <div className="mt-6 space-y-3">
              {upcomingBlogTopics.map((topic, i) => (
                <article
                  key={topic.title}
                  className="flex items-start gap-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-4 transition-colors hover:border-[var(--foreground)]/10"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--secondary)] text-[var(--foreground)]">
                    {getTopicIcon(topic.icon)}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[0.88rem] font-semibold text-[var(--foreground)]">
                        {topic.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-dashed border-[var(--border)] px-2 py-0.5 text-[0.65rem] font-medium text-[var(--subtle)]">
                        Draft {i + 1}
                      </span>
                    </div>
                    <p className="mt-1 text-[0.8rem] leading-relaxed text-[var(--muted-fg)]">
                      {topic.hint}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="text-[0.82rem] text-[var(--muted-fg)]">Follow for updates:</p>
              <Link
                href={profile.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-[0.8rem] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
              >
                Twitter
              </Link>
              <Link
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-[0.8rem] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
              >
                LinkedIn
              </Link>
            </div>
          </section>
        )}
      </MotionReveal>
      <MotionReveal delay={0.08}>
        <PageQuote quote={sitePageQuotes.blog} />
      </MotionReveal>
    </main>
  );
}

function getTopicIcon(key: string): ReactNode {
  switch (key) {
    case 'quality':
      return <ShieldIcon className="h-4 w-4" />;
    case 'leadership':
      return <UsersIcon className="h-4 w-4" />;
    case 'testing':
      return <FlaskIcon className="h-4 w-4" />;
    default:
      return <PenIcon className="h-4 w-4" />;
  }
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 6 5v5c0 4.1 2.4 7.8 6 9 3.6-1.2 6-4.9 6-9V5l-6-2Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a3 3 0 0 1 0 5.74" />
    </svg>
  );
}

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 3h6M10 3v7.4L4 20h16l-6-9.6V3" />
      <path d="M8 14h8" />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}
