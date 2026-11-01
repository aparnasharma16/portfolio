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
          <p className="text-[0.8rem] text-[var(--muted-fg)] tabular-nums">
            Updated {profile.resumeLastUpdated}
          </p>
        </div>
      </PageHeader>

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
            <span className="block truncate text-[0.9rem] font-medium text-[var(--foreground)]">
              {fileName}
            </span>
            <span className="block text-[0.78rem] text-[var(--muted-fg)]">Tap to open the PDF</span>
          </span>
        </a>

        <figure className="hidden overflow-hidden rounded-xl border border-[var(--border)] sm:pointer-fine:block">
          <figcaption className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--secondary)] px-4 py-2.5 text-[0.78rem] text-[var(--muted-fg)]">
            <FileIcon className="h-3.5 w-3.5" />
            {fileName}
          </figcaption>
          <iframe
            title={`${profile.name} resume`}
            src={pdf}
            className="block h-[80vh] w-full bg-[var(--secondary)]"
          />
        </figure>
      </div>

      <PageQuote quote={sitePageQuotes.resume} />
    </main>
  );
}
