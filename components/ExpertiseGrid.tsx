"use client";

import type { ExpertiseArea, ExpertiseGroup } from "@/lib/portfolio-data";
import { SectionIntro } from "@/components/SectionIntro";
import { MotionItem, MotionStagger } from "@/components/SubtleMotion";

export function ExpertiseGrid({ items }: { items: ExpertiseArea[] }) {
  return (
    <section className="mt-14">
      <SectionIntro
        eyebrow="Specialization"
        title="What I specialize in"
        description="I work best on product teams that need strong frontend judgment, dependable end-to-end delivery, and a quality-first approach to shipping."
      />
      <MotionStagger className="mt-6 grid gap-3 sm:grid-cols-2" delay={0.06}>
        {items.map((item) => (
          <MotionItem key={item.label}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-5 py-5">
              <h3 className="text-[0.98rem] font-semibold text-[var(--foreground)]">
                {item.label}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-6 text-[var(--muted-fg)]">
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
    <section className="mt-14">
      <SectionIntro
        eyebrow="Core Expertise"
        title="How I contribute across the stack"
        description="A recruiter should be able to see my shape quickly: strong frontend depth, practical backend delivery, modern testing discipline, and product-minded leadership."
      />
      <MotionStagger className="mt-6 grid gap-3 sm:grid-cols-2" delay={0.04}>
        {groups.map((group) => (
          <MotionItem key={group.title}>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-5">
              <h3 className="text-[0.92rem] font-semibold text-[var(--foreground)]">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
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
