'use client';

import { CopyIcon, MailIcon } from '@/components/icons';
import { IconTooltip } from '@/components/IconTooltip';
import { showToast } from '@/components/Toast';
import { profile } from '@/lib/portfolio-data';

/** Copies the email address and confirms with the site toast. */
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.links.emailDisplay);
    showToast('Email copied');
  } catch {
    showToast('Copy failed. Long-press the address instead');
  }
}

/** The email address as a mailto link, with a one-tap copy button and confirmation toast. */
export function EmailPill({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 min-w-0 items-center rounded-lg border border-[var(--border)] text-control ${className ?? ''}`}
    >
      <a
        href={profile.links.email}
        className="touch-target flex h-full min-w-0 flex-1 items-center gap-2 rounded-l-lg pr-2.5 pl-3 font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
      >
        <MailIcon className="h-4 w-4 shrink-0 text-[var(--muted-fg)]" />
        <span className="truncate">{profile.links.emailDisplay}</span>
      </a>
      <span className="h-4 w-px bg-[var(--border)] print:hidden" aria-hidden />
      <button
        type="button"
        onClick={copyEmail}
        aria-label="Copy email address"
        title="Copy email"
        className="touch-target flex h-full items-center rounded-r-lg px-2.5 text-[var(--muted-fg)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--foreground)] print:hidden pointer-coarse:px-4"
      >
        <CopyIcon className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}

/** Icon-only copy-email control, styled like the social links it sits next to. */
export function CopyEmailButton() {
  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label="Copy email address"
      className="group touch-target inline-flex rounded-md p-1.5 text-[var(--muted-fg)] transition-all hover:bg-[var(--secondary)] hover:text-[var(--foreground)] print:hidden"
    >
      <CopyIcon className="h-4 w-4" />
      <IconTooltip label="Copy email" />
    </button>
  );
}
