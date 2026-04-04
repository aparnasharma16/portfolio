import type { Metadata } from "next";
import { profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: "View and download resume.",
};

export default function ResumePage() {
  const pdf = profile.resumePdfPath;

  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
        Resume
      </h1>
      <p className="mt-3 text-sm text-[var(--muted-fg)] md:text-base">
        View and download my professional resume.
      </p>

      {pdf ? (
        <div className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] shadow-lg">
          <iframe
            title="Resume PDF"
            src={pdf}
            className="h-[75vh] w-full"
          />
          <div className="border-t border-[var(--border)] p-4 text-center">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--foreground)] underline-offset-4 hover:underline"
            >
              Open in new tab
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-12 rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--chip-bg)] px-6 py-16 text-center">
          <p className="text-sm text-[var(--muted-fg)]">
            Add your PDF to the{" "}
            <code className="rounded bg-[var(--background)] px-1.5 py-0.5 font-mono text-xs">
              public/
            </code>{" "}
            folder, then set{" "}
            <code className="rounded bg-[var(--background)] px-1.5 py-0.5 font-mono text-xs">
              resumePdfPath
            </code>{" "}
            in{" "}
            <code className="rounded bg-[var(--background)] px-1.5 py-0.5 font-mono text-xs">
              lib/portfolio-data.ts
            </code>{" "}
            (e.g.{" "}
            <code className="rounded bg-[var(--background)] px-1.5 py-0.5 font-mono text-xs">
              &quot;/resume.pdf&quot;
            </code>
            ).
          </p>
        </div>
      )}
    </main>
  );
}
