'use client';

import Image from 'next/image';
import { useState } from 'react';

type CompanyLogoProps = {
  /** Remote or local logo. When missing or broken, a monogram tile is shown instead. */
  src?: string;
  /** Organisation name, used for the monogram fallback. */
  name: string;
  size?: 'sm' | 'md';
};

const styles = {
  sm: { frame: 'h-8 w-8 rounded-lg text-[0.72rem]', image: 'p-1', sizes: '32px' },
  md: { frame: 'h-11 w-11 rounded-xl text-[0.9rem]', image: 'p-1.5', sizes: '44px' },
} as const;

function monogram(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

/**
 * Decorative company/school mark. The name is always rendered as visible text next to
 * it, so the logo is hidden from assistive tech.
 */
export function CompanyLogo({ src, name, size = 'md' }: CompanyLogoProps) {
  const [failed, setFailed] = useState(false);
  const variant = styles[size];

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-[var(--border)] bg-[var(--card)] font-semibold text-[var(--muted-fg)] ${variant.frame}`}
      aria-hidden
    >
      {src && !failed ? (
        <Image
          src={src}
          alt=""
          fill
          sizes={variant.sizes}
          className={`object-contain ${variant.image}`}
          onError={() => setFailed(true)}
        />
      ) : (
        monogram(name)
      )}
    </div>
  );
}
