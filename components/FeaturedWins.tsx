"use client";

import type { FeaturedWin } from "@/lib/portfolio-data";
import { SectionIntro } from "@/components/SectionIntro";
import { MotionCounter, MotionItem, MotionStagger } from "@/components/SubtleMotion";

function TrendUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function FeaturedWins({ wins }: { wins: FeaturedWin[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Selected Wins"
        title="Proof of impact"
        description="These are the kinds of outcomes I aim for: better performance, stronger delivery confidence, healthier engineering practices, and clearer product results."
        icon={<TrendUpIcon className="h-4 w-4" />}
      />
      <MotionStagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.06}>
        {wins.map((win) => (
          <MotionItem key={`${win.metric}-${win.title}`}>
            <article className="group rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5 transition-colors hover:border-[var(--foreground)]/10">
              <p className="text-[1.5rem] font-bold tracking-[-0.04em] text-[var(--foreground)]">
                <MotionCounter value={win.metric} />
              </p>
              <h3 className="mt-1.5 text-[0.92rem] font-semibold text-[var(--foreground)]">
                {win.title}
              </h3>
              <p className="mt-2.5 text-[0.84rem] leading-6 text-[var(--muted-fg)]">
                {win.summary}
              </p>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

export function FeaturedWinsGrid({ wins }: { wins: FeaturedWin[] }) {
  return (
    <section className="mt-8">
      <MotionStagger className="grid gap-4 sm:grid-cols-3" delay={0.02}>
        {wins.slice(0, 3).map((win) => (
          <MotionItem key={`${win.metric}-${win.title}`}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5 transition-colors hover:border-[var(--foreground)]/10">
              <p className="text-[1.5rem] font-bold tracking-[-0.04em] text-[var(--foreground)]">
                <MotionCounter value={win.metric} />
              </p>
              <p className="mt-1.5 text-[0.86rem] font-semibold text-[var(--foreground)]">
                {win.title}
              </p>
              <p className="mt-2.5 text-[0.8rem] leading-6 text-[var(--muted-fg)]">
                {win.summary}
              </p>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>

      <MotionStagger className="mt-4 grid gap-4 sm:grid-cols-2" delay={0.08}>
        {wins.slice(3, 5).map((win) => (
          <MotionItem key={`${win.metric}-${win.title}`}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5 transition-colors hover:border-[var(--foreground)]/10">
              <p className="text-[1.5rem] font-bold tracking-[-0.04em] text-[var(--foreground)]">
                <MotionCounter value={win.metric} />
              </p>
              <p className="mt-1.5 text-[0.86rem] font-semibold text-[var(--foreground)]">
                {win.title}
              </p>
              <p className="mt-2.5 text-[0.8rem] leading-6 text-[var(--muted-fg)]">
                {win.summary}
              </p>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}
