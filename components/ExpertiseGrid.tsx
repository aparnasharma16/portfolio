"use client";

import type { ReactNode } from "react";
import type { ExpertiseArea, ExpertiseGroup } from "@/lib/portfolio-data";
import { SectionIntro } from "@/components/SectionIntro";
import { MotionItem, MotionStagger } from "@/components/SubtleMotion";

export function ExpertiseGrid({ items }: { items: ExpertiseArea[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Specialization"
        title="What I specialize in"
        description="I work best on product teams that need strong frontend judgment, dependable end-to-end delivery, and a quality-first approach to shipping."
        icon={<SparkIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 grid gap-4 sm:grid-cols-2" delay={0.06}>
        {items.map((item) => (
          <MotionItem key={item.label}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5 transition-colors hover:border-[var(--foreground)]/10">
              <h3 className="text-[0.98rem] font-semibold text-[var(--foreground)]">
                {item.label}
              </h3>
              <p className="mt-2.5 text-[0.88rem] leading-6 text-[var(--muted-fg)]">
                {item.description}
              </p>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

export function CoreExpertiseGroups({ groups }: { groups: ExpertiseGroup[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Core Expertise"
        title="How I contribute across the stack"
        description="A recruiter should be able to see my shape quickly: strong frontend depth, practical backend delivery, modern testing discipline, and product-minded leadership."
        icon={<GridIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 grid gap-4 sm:grid-cols-2" delay={0.04}>
        {groups.map((group) => (
          <MotionItem key={group.title}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-5 transition-colors hover:border-[var(--foreground)]/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--foreground)]">
                  {getExpertiseIcon(group.title)}
                </span>
                <h3 className="text-[0.94rem] font-bold text-[var(--foreground)]">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--secondary)] px-3 py-1 text-[0.78rem] text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

function getExpertiseIcon(title: string): ReactNode {
  switch (title) {
    case "Frontend":
      return <MonitorIcon className="h-4 w-4" />;
    case "Backend":
      return <ServerIcon className="h-4 w-4" />;
    case "Testing":
      return <ShieldIcon className="h-4 w-4" />;
    case "Commerce":
      return <CartIcon className="h-4 w-4" />;
    case "Leadership":
      return <UsersIcon className="h-4 w-4" />;
    default:
      return <SparkIcon className="h-4 w-4" />;
  }
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m12 3 1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9L12 3Z" />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 6 5v5c0 4.1 2.4 7.8 6 9 3.6-1.2 6-4.9 6-9V5l-6-2Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
      <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a3 3 0 0 1 0 5.74" />
    </svg>
  );
}
