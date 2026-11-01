import { ButtonLink } from '@/components/ButtonLink';
import { EmailPill } from '@/components/EmailPill';
import { HomeExperiencePreview } from '@/components/HomeExperiencePreview';
import { FileIcon } from '@/components/icons';
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
          <h1 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
            {profile.name}
          </h1>
          <p className="text-[0.84rem] text-[var(--muted-fg)]">
            {profile.title}
            {currentRole ? ` at ${currentRole.company}` : null}, {profile.location}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-[18ch] text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-[var(--foreground)] sm:max-w-none md:text-[2.6rem]">
        {profile.headline}
      </p>
      <p className="mt-4 max-w-lg text-[1rem] leading-7 text-pretty text-[var(--muted-fg)]">
        {profile.subhead}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <ButtonLink href="/resume">
          <FileIcon className="h-4 w-4" />
          View resume
        </ButtonLink>
        <EmailPill />
      </div>
      <SocialLinks className="mt-4 -ml-1.5" />
    </header>
  );
}

function ContactCard() {
  return (
    <section
      aria-labelledby="home-contact"
      className="rounded-xl bg-[var(--secondary)] px-6 py-6 print:hidden"
    >
      <h2
        id="home-contact"
        className="text-[1.1rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]"
      >
        Hiring for a senior frontend or full-stack role?
      </h2>
      <p className="mt-2 max-w-lg text-[0.88rem] leading-6 text-[var(--muted-fg)]">
        {profile.availabilityNote}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <EmailPill />
        <ButtonLink href={profile.links.linkedin} variant="outline" external>
          LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
