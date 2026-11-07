import { ButtonLink } from '@/components/ButtonLink';
import { PageHeader } from '@/components/PageHeader';
import { PageQuote } from '@/components/PageQuote';
import { SectionIntro } from '@/components/SectionIntro';
import { blogPosts, profile, sitePageQuotes, upcomingBlogTopics } from '@/lib/portfolio-data';
import { pageMetadata, titleFor } from '@/lib/metadata';
import type { Metadata } from 'next';

const description = 'Notes on frontend quality, delivery, and leading engineering teams.';

export const metadata: Metadata = pageMetadata({
  title: titleFor('Blog'),
  description,
  // Hidden from navigation until there are posts; keep it out of search results too.
  extra: { robots: { index: false, follow: true } },
});

const rowList = 'divide-y divide-[var(--border)] border-y border-[var(--border)]';

export default function BlogPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-12">
      <PageHeader title="Blog" description={description} />

      {blogPosts.length > 0 ? (
        <ul className={`mt-10 ${rowList}`}>
          {blogPosts.map((post) => (
            <li key={post.slug} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
              <div>
                <h2 className="text-subheading text-[var(--foreground)]">{post.title}</h2>
                <p className="mt-1 text-body text-[var(--muted-fg)]">{post.description}</p>
              </div>
              <p className="text-small text-[var(--muted-fg)] tabular-nums sm:pt-1">{post.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <section aria-labelledby="upcoming-title" className="mt-10">
          <SectionIntro
            id="upcoming-title"
            title="Coming up"
            description="A few focused posts from real engineering work, not filler. Here’s what I’m writing."
          />
          <ul className={`mt-6 ${rowList}`}>
            {upcomingBlogTopics.map((topic) => (
              <li key={topic.title} className="py-4">
                <p className="text-subheading text-[var(--foreground)]">{topic.title}</p>
                <p className="mt-0.5 text-small text-[var(--muted-fg)]">{topic.hint}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="text-small text-[var(--muted-fg)]">Get notified when they land:</p>
            <ButtonLink href={profile.links.linkedin} variant="outline" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.twitter} variant="outline" external>
              X
            </ButtonLink>
          </div>
        </section>
      )}

      <PageQuote quote={sitePageQuotes.blog} />
    </main>
  );
}
