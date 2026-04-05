import type { Metadata } from "next";
import { PageQuote } from "@/components/PageQuote";
import { Hobbies } from "@/components/Hobbies";
import { MotionReveal } from "@/components/SubtleMotion";
import { hobbies, profile, sitePageQuotes } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `Hobbies — ${profile.name}`,
  description: "Beyond code — the things I enjoy outside of engineering.",
};

export default function HobbiesPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-10 md:py-14">
      <MotionReveal>
        <div>
          <h1 className="text-[1.85rem] font-bold tracking-[-0.04em] text-[var(--foreground)] md:text-[2.15rem]">
            Beyond work
          </h1>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-[var(--muted-fg)]">
            When I&apos;m not building products, these are the things that keep me energized and inspired.
          </p>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.04}>
        <Hobbies items={hobbies} />
      </MotionReveal>

      <MotionReveal delay={0.08}>
        <PageQuote quote={sitePageQuotes.home} />
      </MotionReveal>
    </main>
  );
}
