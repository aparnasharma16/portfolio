import { ButtonLink } from '@/components/ButtonLink';
import { DownloadIcon, ExternalIcon, FileIcon } from '@/components/icons';
import { PageHeader } from '@/components/PageHeader';
import { PageQuote } from '@/components/PageQuote';
import { profile, sitePageQuotes } from '@/lib/portfolio-data';
import { pageMetadata, titleFor } from '@/lib/metadata';
import type { Metadata } from 'next';

const description = `View or download ${profile.name}'s resume.`;

export const metadata: Metadata = pageMetadata({ title: titleFor('Resume'), description });

const pdf = profile.resumePdfPath;
const fileName = pdf.split('/').pop() ?? 'resume.pdf';

export default function ResumePage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-12">
      <PageHeader title="Resume" description="My resume, to view or download.">
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href={pdf} download>
            <DownloadIcon className="h-4 w-4" />
            Download PDF
          </ButtonLink>
          <ButtonLink href={pdf} variant="outline" external>
            <ExternalIcon className="h-4 w-4" />
            Open in new tab
          </ButtonLink>
          <p className="text-small text-[var(--muted-fg)] tabular-nums">
            Updated {profile.resumeLastUpdated}
          </p>
        </div>
      </PageHeader>

      {/* The preview below can't print, so a printout says where the resume itself is. */}
      <p className="mt-8 hidden text-body print:block">
        The full resume is a PDF: {new URL(pdf, profile.siteUrl).toString()}
      </p>

      <div className="mt-10 print:hidden">
        {/* Inline PDF preview is unreliable on phones and tablets (iOS shows one page and
            won't scroll it), so touch screens get a tap target and the system viewer. */}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors hover:bg-[var(--secondary)] sm:pointer-fine:hidden"
        >
          <span className="flex h-12 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--secondary)] text-[var(--muted-fg)]">
            <FileIcon className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-body font-medium text-[var(--foreground)]">
              {fileName}
            </span>
            <span className="block text-small text-[var(--muted-fg)]">Tap to open the PDF</span>
          </span>
        </a>

        <figure className="hidden overflow-hidden rounded-xl border border-[var(--border)] sm:pointer-fine:block">
          <figcaption className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-small text-[var(--muted-fg)]">
            <FileIcon className="h-3.5 w-3.5" />
            {fileName}
          </figcaption>
          {/* The placeholder sits behind the frame; the PDF viewer covers it once it paints. */}
          <div className="relative h-[80vh] bg-[var(--secondary)]">
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center"
              aria-hidden
            >
              <FileIcon className="h-6 w-6 text-[var(--subtle)]" />
              <p className="text-small font-medium text-[var(--foreground)]">Loading preview…</p>
              <p className="max-w-xs text-small text-[var(--muted-fg)]">
                If it doesn’t appear, use Open in new tab above.
              </p>
            </div>
            <iframe
              title={`${profile.name} resume`}
              src={pdf}
              className="relative block h-full w-full"
            />
          </div>
        </figure>
      </div>

      <PageQuote quote={sitePageQuotes.resume} />
    </main>
  );
}
