import { IconTooltip } from '@/components/IconTooltip';
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
              <IconTooltip label={label} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
