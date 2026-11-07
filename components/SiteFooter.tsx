import { SocialLinks } from '@/components/SocialLinks';
import { currentRole, profile, siteNav } from '@/lib/portfolio-data';
import Link from 'next/link';

const linkClass =
  'touch-target text-small text-[var(--muted-fg)] transition-colors hover:text-[var(--foreground)]';

/** Quiet sign-off: who she is and how to reach her on the left; pages and profiles on the right. */
export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-2xl px-5 pt-10 pb-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="text-subheading text-[var(--foreground)]">{profile.name}</p>
            <p className="mt-0.5 text-small text-[var(--muted-fg)]">
              {profile.title}
              {currentRole ? ` at ${currentRole.company}` : null}
            </p>
            <a
              href={profile.links.email}
              className="touch-target mt-3 inline-block text-small font-medium text-[var(--foreground)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[var(--accent-ink)]"
            >
              {profile.links.emailDisplay}
            </a>
          </div>

          <div className="flex flex-col gap-4 sm:items-end print:hidden pointer-coarse:gap-6">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {siteNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <SocialLinks className="-ml-1.5 sm:-mr-1.5 sm:ml-0" />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 text-small text-[var(--muted-fg)] print:hidden">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#main" className="touch-target transition-colors hover:text-[var(--foreground)]">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
