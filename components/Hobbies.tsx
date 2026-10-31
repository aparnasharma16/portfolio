import {
  BookIcon,
  CarIcon,
  CoffeeIcon,
  CookingIcon,
  MusicIcon,
  PaletteIcon,
  PlaneIcon,
} from '@/components/icons';
import { SectionIntro } from '@/components/SectionIntro';
import type { Hobby, HobbyIconKey } from '@/lib/portfolio-data';
import type { ComponentType } from 'react';

const hobbyIcons: Record<HobbyIconKey, ComponentType<{ className?: string }>> = {
  painting: PaletteIcon,
  drives: CarIcon,
  music: MusicIcon,
  coffee: CoffeeIcon,
  reading: BookIcon,
  cooking: CookingIcon,
  travel: PlaneIcon,
};

/** Interests as friendly icon pills. */
export function Hobbies({ items }: { items: readonly Hobby[] }) {
  return (
    <section aria-labelledby="interests-title">
      <SectionIntro id="interests-title" title="Things I enjoy" />
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((hobby) => {
          const Icon = hobbyIcons[hobby.icon];
          return (
            <li
              key={hobby.label}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--chip-bg)] pr-4 pl-2 text-[0.88rem] font-medium text-[var(--foreground)]"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--muted-fg)]"
                aria-hidden
              >
                <Icon className="h-4 w-4" />
              </span>
              {hobby.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
