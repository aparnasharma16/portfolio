import { GithubIcon, InstagramIcon, LinkedInIcon, XBrandIcon } from '@/components/icons';
import { profile } from '@/lib/portfolio-data';

export const socialLinks = [
  { key: 'linkedin', href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { key: 'github', href: profile.links.github, label: 'GitHub', Icon: GithubIcon },
  { key: 'twitter', href: profile.links.twitter, label: 'X / Twitter', Icon: XBrandIcon },
  { key: 'instagram', href: profile.links.instagram, label: 'Instagram', Icon: InstagramIcon },
] as const;

type SocialLinksProps = {
  className?: string;
};

/** Icon-only profile links with hover labels (hero and footer). Email has its own pill and link. */
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-1 print:hidden pointer-coarse:gap-4 ${className ?? ''}`}
      aria-label="Social links"
    >
      {socialLinks.map(({ key, href, label, Icon }) => {
        const external = href.startsWith('http');
        return (
          <li key={key}>
            <a
              href={href}
              aria-label={label}
              className={`group touch-target inline-flex rounded-md p-1.5 text-[var(--muted-fg)] transition-all hover:bg-[var(--secondary)] hover:text-[var(--foreground)]`}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon className="h-4 w-4" />
              <Tooltip label={label} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Tooltip({ label }: { label: string }) {
  return (
    <span
      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-[var(--foreground)] px-2 py-0.5 text-caption font-medium whitespace-nowrap text-[var(--background)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      aria-hidden
    >
      {label}
      <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[var(--foreground)]" />
    </span>
  );
}
