import { MobileDock } from '@/components/MobileDock';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { ToastRegion } from '@/components/Toast';
import type { ReactNode } from 'react';

/** Page chrome shared by every route: skip link, header, footer, the mobile dock, and the toast. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[var(--background)] pb-[calc(5rem+env(safe-area-inset-bottom))] text-[var(--foreground)] sm:pb-0 print:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--foreground)] focus:px-4 focus:py-2 focus:text-[var(--background)] print:hidden"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <MobileDock />
      <ToastRegion />
    </div>
  );
}
