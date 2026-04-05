'use client';

import { SectionIntro } from '@/components/SectionIntro';
import { MotionItem, MotionStagger } from '@/components/SubtleMotion';
import type { Hobby } from '@/lib/portfolio-data';
import type { ReactNode } from 'react';

function getHobbyIcon(key: string): ReactNode {
  switch (key) {
    case 'painting':
      return <PaletteIcon className="h-5 w-5" />;
    case 'drives':
      return <CarIcon className="h-5 w-5" />;
    case 'music':
      return <MusicIcon className="h-5 w-5" />;
    case 'coffee':
      return <CoffeeIcon className="h-5 w-5" />;
    case 'reading':
      return <BookIcon className="h-5 w-5" />;
    case 'cooking':
      return <CookingIcon className="h-5 w-5" />;
    case 'travel':
      return <PlaneIcon className="h-5 w-5" />;
    default:
      return <HeartIcon className="h-5 w-5" />;
  }
}

export function Hobbies({ items }: { items: readonly Hobby[] }) {
  return (
    <section className="mt-16">
      <SectionIntro
        eyebrow="Beyond work"
        title="Things I enjoy"
        description="When I'm not building products, you'll find me exploring these."
        icon={<HeartIcon className="h-4 w-4" />}
      />
      <MotionStagger
        className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        delay={0.04}
      >
        {items.map((hobby) => (
          <MotionItem key={hobby.label}>
            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-6 text-center transition-colors hover:border-[var(--foreground)]/10 hover:bg-[var(--background)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-transform duration-200 group-hover:scale-110">
                {getHobbyIcon(hobby.emoji)}
              </span>
              <span className="text-[0.86rem] font-medium text-[var(--foreground)]">
                {hobby.label}
              </span>
            </div>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.2-.3-.4-.7-.4-1 0-.9.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9-10-9Z" />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3.65a1 1 0 0 0-.22-.62l-3.03-3.87A1.01 1.01 0 0 0 17.96 7H6.04a1.01 1.01 0 0 0-.79.39L2.22 11.7a1 1 0 0 0-.22.62V16c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M9 17h6" />
    </svg>
  );
}

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function CoffeeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 2v2M10 2v2M14 2v2" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
    </svg>
  );
}

function CookingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 4v3M8 4v1M16 4v1" />
      <path d="M3 11h18" />
      <path d="M5 11v2a7 7 0 0 0 14 0v-2" />
      <path d="M7 20h10" />
    </svg>
  );
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" />
    </svg>
  );
}
