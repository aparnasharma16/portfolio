import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'touch-target inline-flex h-9 items-center print:hidden justify-center gap-2 rounded-lg px-4 text-control font-medium transition active:scale-[0.98]';

const variants = {
  solid: `${base} bg-[var(--foreground)] text-[var(--background)] hover:opacity-90`,
  outline: `${base} border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-[var(--secondary)]`,
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  /** Triggers a file download (for local files such as the resume PDF). */
  download?: boolean;
  /** Layout-only additions, e.g. full width on phones. */
  className?: string;
};

/** Link styled as a button. Internal routes use Next's `Link`; everything else a plain anchor. */
export function ButtonLink({
  href,
  children,
  variant = 'solid',
  external = false,
  download = false,
  className: extra,
}: ButtonLinkProps) {
  const className = extra ? `${variants[variant]} ${extra}` : variants[variant];

  if (href.startsWith('/') && !external && !download) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}

      download={download || undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
