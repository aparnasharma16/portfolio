import { ButtonLink } from '@/components/ButtonLink';
import { CopyEmailButton, EmailPill } from '@/components/EmailPill';
import { HomeExperiencePreview } from '@/components/HomeExperiencePreview';
import { FileIcon, LinkedInIcon, MailIcon } from '@/components/icons';
import { PageQuote } from '@/components/PageQuote';
import { SocialLinks } from '@/components/SocialLinks';
import { StatusDot } from '@/components/StatusDot';
import { MotionReveal } from '@/components/SubtleMotion';
import { StackPreview } from '@/components/Stack';
import { TestimonialsPreview } from '@/components/Testimonials';
import {
  currentRole,
  education,
  experience,
  profile,
  sitePageQuotes,
  stack,
  publishedTestimonials,
} from '@/lib/portfolio-data';
import { pageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Image from 'next/image';

const pageTitle = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = pageMetadata({
  title: pageTitle,
  description: profile.valueProposition,
});

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 pt-10 pb-16 md:pt-16">
      {/* The page's one orchestrated moment: the hero settles in on load. */}
      <MotionReveal>
        <Hero />
      </MotionReveal>

      <div className="mt-16 space-y-16">
        <HomeExperiencePreview jobs={experience} education={education} />
        <StackPreview groups={stack} href="/impact#stack" />
        <TestimonialsPreview items={publishedTestimonials} href="/impact#testimonials" />
        <ContactCard />
      </div>

      <PageQuote quote={sitePageQuotes.home} />
    </main>
  );
}

function Hero() {
  return (
    <header>
      <div className="flex items-center gap-3.5">
        <div className="relative shrink-0">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[var(--border)]">
            <Image
              src="/new_image.jpeg"
              alt={profile.name}
              fill
              sizes="56px"
              className="object-cover object-top"
              priority
            />
          </div>
          <span
            className="absolute -right-0.5 -bottom-0.5 flex rounded-full ring-2 ring-[var(--background)]"
            title={profile.availabilityNote}
          >
            <StatusDot className="h-3 w-3" />
          </span>
        </div>
        <div className="min-w-0">
          <h1 className="text-subheading text-[var(--foreground)]">{profile.name}</h1>
          <p className="text-small text-[var(--muted-fg)]">
            {profile.title}
            {currentRole ? ` at ${currentRole.company}` : null}, {profile.location}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-[18ch] text-display text-balance text-[var(--foreground)] sm:max-w-none md:text-display-lg">
        {profile.headline}
      </p>
      <p className="mt-4 max-w-lg text-lead text-pretty text-[var(--muted-fg)]">
        {profile.subhead}
      </p>

      {/* One action row: contact first, resume second, then profiles. On phones the two
          buttons share a row at equal width and the icons sit underneath. */}
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        <div className="grid grid-cols-2 gap-3 sm:flex">
          <ButtonLink href={profile.links.email}>
            <MailIcon className="h-4 w-4" />
            Get in touch
          </ButtonLink>
          <ButtonLink href="/resume" variant="outline">
            <FileIcon className="h-4 w-4" />
            View resume
          </ButtonLink>
        </div>
        <div className="-ml-1.5 flex items-center gap-1 sm:ml-0 pointer-coarse:gap-4">
          <SocialLinks />
          <span className="mx-1 h-4 w-px bg-[var(--border-strong)] print:hidden" aria-hidden />
          <CopyEmailButton />
        </div>
      </div>
    </header>
  );
}

function ContactCard() {
  return (
    <section
      aria-labelledby="home-contact"
      className="rounded-xl bg-[var(--secondary)] px-5 py-6 sm:px-6 print:hidden"
    >
      <h2 id="home-contact" className="text-heading text-[var(--foreground)]">
        Hiring for a senior frontend or full-stack role?
      </h2>
      <p className="mt-2 max-w-lg text-body text-[var(--muted-fg)]">{profile.availabilityNote}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <EmailPill className="w-full bg-[var(--background)] sm:w-auto" />
        <ButtonLink
          href={profile.links.linkedin}
          variant="outline"
          external
          className="w-full bg-[var(--background)] sm:w-auto"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
