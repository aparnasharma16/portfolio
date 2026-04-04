import type { Metadata } from "next";
import { PageQuote } from "@/components/PageQuote";
import { blogPosts, profile, sitePageQuotes, upcomingBlogTopics } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: "Writing on engineering and delivery.",
};

export default function BlogPage() {
  const hasPublishedPosts = blogPosts.length > 0;

  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
        Blog
      </h1>
      <p className="mt-3 text-sm text-[var(--muted-fg)] md:text-base">
        Writing focused on frontend quality, delivery, and practical engineering lessons from commerce and payments work.
      </p>
      {hasPublishedPosts ? (
        <ul className="mt-12 space-y-8">
          {blogPosts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-[var(--border)] pb-8 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">
                    {post.title}
                  </h2>
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
          <h2 className="mt-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            Practical writing, not filler content
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-fg)]">
            I&apos;m preparing a few focused posts based on real engineering work rather than publishing generic content for the sake of it.
          </p>
          <ul className="mt-6 space-y-3">
            {upcomingBlogTopics.map((topic) => (
              <li
                key={topic}
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--muted-fg)]"
              >
                {topic}
              </li>
            ))}
          </ul>
        </section>
      )}
      <PageQuote quote={sitePageQuotes.blog} />
    </main>
  );
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
