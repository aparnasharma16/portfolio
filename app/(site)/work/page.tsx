import { PageHeader, StatRow } from '@/components/PageHeader';
import { PageQuote } from '@/components/PageQuote';
import { WorkExperienceList } from '@/components/WorkExperienceList';
import { experience, groupExperience, profile, sitePageQuotes } from '@/lib/portfolio-data';
import { pageMetadata, titleFor } from '@/lib/metadata';
import type { Metadata } from 'next';

const description = 'Roles, companies, and what I worked on at each.';

export const metadata: Metadata = pageMetadata({ title: titleFor('Work'), description });

const companies = groupExperience(experience);

export default function WorkPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 pt-8 pb-16 md:pt-12">
      <PageHeader title="Work" description="My work experience across companies and roles." />

      <div className="mt-5">
        <WorkExperienceList
          groups={companies}
          summary={
            <StatRow
              items={[
                { value: profile.experienceYears, label: 'years' },
                { value: companies.length, label: 'companies' },
                { value: experience.length, label: 'roles' },
              ]}
            />
          }
        />
      </div>

      <PageQuote quote={sitePageQuotes.work} />
    </main>
  );
}
