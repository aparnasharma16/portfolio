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
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-18">
      <h1 className="text-[2.45rem] font-semibold leading-none tracking-[-0.045em] text-[var(--foreground)] md:text-[2.7rem]">
        Work Experience
      </h1>
      <p className="mt-3 text-[0.98rem] font-normal leading-7 tracking-[-0.01em] text-[var(--muted-fg)] md:text-[1.02rem]">
        My work experiences across different companies and roles.
      </p>
      <div className="mt-12 md:mt-14">
        <WorkExperienceList jobs={experience} />
      </div>
      <WorkPageQuote />
    </main>
  );
}
