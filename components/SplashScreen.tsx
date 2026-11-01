import { currentRole, profile } from '@/lib/portfolio-data';
import Image from 'next/image';

/**
 * Brief first-visit intro. Pure CSS (see `.splash` in globals.css): it fades itself out
 * after ~0.7s without blocking hydration. It only plays on the first visit of a session
 * that starts on the home page (see `splashInitScript`), never for reduced motion.
 */
export function SplashScreen() {
  return (
    <div
      className="splash fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)] print:hidden"
      aria-hidden
    >
      <div className="splash-mark flex items-center gap-3">
        <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[var(--border)]">
          <Image
            src="/new_image.jpeg"
            alt=""
            fill
            sizes="44px"
            className="object-cover object-top"
            priority
          />
        </span>
        <span>
          <span className="block text-[1rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
            {profile.name}
          </span>
          <span className="block text-[0.82rem] text-[var(--muted-fg)]">
            {profile.title}
            {currentRole ? ` at ${currentRole.company}` : null}
          </span>
        </span>
      </div>
    </div>
  );
}
