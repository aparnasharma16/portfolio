import type { Metadata } from "next";
import { WorkExperienceList } from "@/components/WorkExperienceList";
import { WorkPageQuote } from "@/components/WorkPageQuote";
import { experience, profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `Work — ${profile.name}`,
  description: "Work experience across companies and roles.",
};

export default function WorkPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-10 md:py-14">
      <h1 className="text-[1.7rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-[2rem]">
        Work Experience
      </h1>
      <p className="mt-2 text-[0.9rem] leading-6 text-[var(--muted-fg)]">
        My work experiences across different companies and roles.
      </p>
      <div className="mt-8">
        <WorkExperienceList jobs={experience} />
      </div>
      <WorkPageQuote />
    </main>
  );
}
