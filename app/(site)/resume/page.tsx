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
          <p className="text-[0.8rem] text-[var(--muted-fg)]">
            Updated {profile.resumeLastUpdated}
          </p>
        </div>
      </PageHeader>

      <div className="mt-10">
        {/* Inline PDF preview is unreliable on phones, so they get a tap target instead. */}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors hover:bg-[var(--secondary)] sm:hidden"
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

        <figure className="hidden overflow-hidden rounded-xl border border-[var(--border)] sm:block">
          <figcaption className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--secondary)]/60 px-4 py-2.5 text-[0.78rem] text-[var(--muted-fg)]">
            <FileIcon className="h-3.5 w-3.5" />
            {fileName}
          </figcaption>
          <iframe title={`${profile.name} resume`} src={pdf} className="h-[80vh] w-full bg-white" />
        </figure>
      </div>

      <PageQuote quote={sitePageQuotes.resume} />
    </main>
  );
}
