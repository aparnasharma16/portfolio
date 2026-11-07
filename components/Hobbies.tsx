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

/** Interests as a plain icon-and-label list: static content, so no button-like boxes. */
export function Hobbies({ items }: { items: readonly Hobby[] }) {
  return (
    <section aria-labelledby="interests-title">
      <SectionIntro id="interests-title" title="Things I enjoy" />
      <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
        {items.map((hobby) => {
          const Icon = hobbyIcons[hobby.icon];
          return (
            <li
              key={hobby.label}
              className="flex items-center gap-2.5 text-body text-[var(--foreground)]"
            >
              <Icon className="h-4 w-4 shrink-0 text-[var(--subtle)]" />
              {hobby.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
