import type { Metadata } from "next";
import { blogPosts, profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: "Writing on engineering and delivery.",
};

export default function BlogPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
        Blog
      </h1>
      <p className="mt-3 text-sm text-[var(--muted-fg)] md:text-base">
        Notes and longer-form posts — swap in your real URLs when ready.
      </p>
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
              <span className="shrink-0 pt-1 text-sm text-[var(--subtle)] sm:text-right">
                Read more →
              </span>
            </div>
          </li>
        ))}
      </ul>
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
