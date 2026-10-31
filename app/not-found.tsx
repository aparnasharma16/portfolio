import { ButtonLink } from '@/components/ButtonLink';
import { HomeIcon } from '@/components/icons';
import { SiteShell } from '@/components/SiteShell';
import { siteNav } from '@/lib/portfolio-data';
import { titleFor } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: titleFor('Page not found') };

/** Unknown URLs: say so plainly, then offer the way back. */
export default function NotFound() {
  return (
    <SiteShell splash={false}>
      <main id="main" className="mx-auto max-w-2xl px-5 pt-16 pb-24 md:pt-24">
        <p className="text-[0.86rem] font-medium text-[var(--muted-fg)] tabular-nums">404</p>
        <h1 className="mt-2 text-[1.75rem] leading-tight font-bold tracking-[-0.04em] text-[var(--foreground)] md:text-[2rem]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-2 max-w-md text-[0.95rem] leading-6 text-[var(--muted-fg)]">
          The link may be old or mistyped. Head home, or pick a page below.
        </p>
        <div className="mt-6">
          <ButtonLink href="/">
            <HomeIcon className="h-4 w-4" />
            Back to home
          </ButtonLink>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem]">
          {siteNav
            .filter((item) => item.href !== '/')
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[var(--muted-fg)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:decoration-[var(--accent-ink)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </main>
    </SiteShell>
  );
}
