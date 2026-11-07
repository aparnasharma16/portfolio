import { CaseStudiesList } from '@/components/CaseStudiesList';
import { ResultsGrid } from '@/components/FeaturedWins';
import { HowIWork } from '@/components/HowIWork';
import { JumpNav } from '@/components/JumpNav';
import { PageHeader } from '@/components/PageHeader';
import { PageQuote } from '@/components/PageQuote';
import { Recognition } from '@/components/RecognitionList';
import { StackBreakdown } from '@/components/Stack';
import {
  accomplishments,
  caseStudies,
  expertiseAreas,
  featuredWins,
  sitePageQuotes,
  stack,
  publishedTestimonials,
} from '@/lib/portfolio-data';
import { pageMetadata, titleFor } from '@/lib/metadata';
import type { Metadata } from 'next';

const description = 'Results, case studies, how I work, my stack, and recognition.';

export const metadata: Metadata = pageMetadata({ title: titleFor('Impact'), description });

/** Page chapters, in reading order. Ids match each section's anchor. */
const chapters = [
  { id: 'results', label: 'Results' },
  { id: 'case-studies', label: 'Case studies' },
  { id: 'how-i-work', label: 'How I work' },
  { id: 'stack', label: 'Expertise' },
  { id: 'recognition', label: 'Recognition' },
] as const;

export default function ImpactPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-12">
      <PageHeader title="Impact" description="Results, case studies, and how I work.">
        <JumpNav items={chapters} />
      </PageHeader>

      <div className="mt-12 space-y-20">
        <ResultsGrid wins={featuredWins} />
        <CaseStudiesList studies={caseStudies} />
        <HowIWork areas={expertiseAreas} />
        <StackBreakdown groups={stack} />
        <Recognition awards={accomplishments} testimonials={publishedTestimonials} />
      </div>

      <PageQuote quote={sitePageQuotes.impact} />
    </main>
  );
}
