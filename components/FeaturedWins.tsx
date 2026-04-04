"use client";

import type { FeaturedWin } from "@/lib/portfolio-data";
import { SectionIntro } from "@/components/SectionIntro";
import { MotionItem, MotionStagger } from "@/components/SubtleMotion";

export function FeaturedWins({ wins }: { wins: FeaturedWin[] }) {
  return (
    <section className="mt-14">
      <SectionIntro
        eyebrow="Selected Wins"
        title="Proof of impact"
        description="These are the kinds of outcomes I aim for: better performance, stronger delivery confidence, healthier engineering practices, and clearer product results."
      />
      <MotionStagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" delay={0.06}>
        {wins.map((win) => (
          <MotionItem key={`${win.metric}-${win.title}`}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5">
              <p className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                {win.metric}
              </p>
              <h3 className="mt-2 text-[0.94rem] font-semibold text-[var(--foreground)]">
                {win.title}
              </h3>
              <p className="mt-2 text-[0.85rem] leading-6 text-[var(--muted-fg)]">
                {win.summary}
              </p>
            </article>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}
