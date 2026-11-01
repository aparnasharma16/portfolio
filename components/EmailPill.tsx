'use client';

import { CopyIcon, MailIcon } from '@/components/icons';
import { Toast, useToast } from '@/components/Toast';
import { profile } from '@/lib/portfolio-data';

/** The email address as a mailto link, with a one-tap copy button and confirmation toast. */
export function EmailPill() {
  const { message, show } = useToast();

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.links.emailDisplay);
      show('Email copied');
    } catch {
      show('Copy failed. Long-press the address instead');
    }
  }

  return (
    <>
      <span className="inline-flex h-9 items-center rounded-lg border border-[var(--border)] text-sm">
        <a
          href={profile.links.email}
          className="flex h-full items-center gap-2 rounded-l-lg pr-2.5 pl-3 font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
        >
          <MailIcon className="h-4 w-4 shrink-0 text-[var(--muted-fg)]" />
          {profile.links.emailDisplay}
        </a>
        <span className="h-4 w-px bg-[var(--border)] print:hidden" aria-hidden />
        <button
          type="button"
          onClick={copy}
          aria-label="Copy email address"
          title="Copy email"
          className="flex h-full items-center rounded-r-lg px-2.5 text-[var(--muted-fg)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)] print:hidden"
        >
          <CopyIcon className="h-3.5 w-3.5" />
        </button>
      </span>
      <Toast message={message} />
    </>
  );
}
