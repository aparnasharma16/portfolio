import { MobileDock } from '@/components/MobileDock';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SplashScreen } from '@/components/SplashScreen';
import type { ReactNode } from 'react';

/** Page chrome shared by every route: skip link, header, footer, and the mobile dock. */
export function SiteShell({
  children,
  splash = true,
}: {
  children: ReactNode;
  /** The first-visit splash; off for error pages. */
  splash?: boolean;
}) {
  return (
    <div className="flex min-h-full flex-col bg-[var(--background)] pb-[calc(4.5rem+env(safe-area-inset-bottom))] text-[var(--foreground)] sm:pb-0">
      {splash ? <SplashScreen /> : null}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--foreground)] focus:px-4 focus:py-2 focus:text-[var(--background)]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <MobileDock />
    </div>
  );
}
