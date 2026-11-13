import type { ReactNode } from 'react';

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Fades its children in on load. Pure CSS (`.motion-reveal` in globals.css), so the content
 * is visible in the server HTML and doesn't wait for hydration, and reduced motion gets
 * no animation at all.
 */
export function MotionReveal({ children, className }: MotionRevealProps) {
  return <div className={`motion-reveal ${className ?? ''}`}>{children}</div>;
}
