'use client';

import { profile } from '@/lib/portfolio-data';
import { useCallback, useState } from 'react';

export function CopyEmailButton() {
  const [done, setDone] = useState(false);
  const addr = profile.links.emailDisplay;

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(addr);
      setDone(true);
      window.setTimeout(() => setDone(false), 2000);
    } catch {
      /* ignore */
    }
  }, [addr]);

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1 rounded-md p-0.5 text-[var(--muted-fg)] transition-colors hover:bg-[var(--chip-bg)] hover:text-[var(--foreground)]"
      aria-label={done ? 'Copied' : 'Copy email'}
      title="Copy email"
    >
      {done ? <span className="text-xs">Copied</span> : <CopyIcon className="h-3.5 w-3.5" />}
    </button>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
