'use client';

import { SectionIntro } from '@/components/SectionIntro';
import { MotionItem, MotionStagger } from '@/components/SubtleMotion';

export function LeadershipHighlights({ items }: { items: readonly string[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Leadership"
        title="How I support teams"
        description="My contribution is not just shipping code. I help teams move faster by improving quality, clarifying direction, and supporting the people around me."
        icon={<UsersIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 grid gap-4 sm:grid-cols-2" delay={0.04}>
        {items.map((item) => (
          <MotionItem key={item}>
            <li className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5 text-[0.88rem] leading-7 text-[var(--muted-fg)] transition-colors hover:border-[var(--foreground)]/10">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span>{item}</span>
            </li>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a3 3 0 0 1 0 5.74" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
