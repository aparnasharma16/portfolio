import { BriefcaseIcon, FileIcon, HeartIcon, HomeIcon, SparklesIcon } from '@/components/icons';
import type { SiteNavHref } from '@/lib/portfolio-data';
import type { ComponentType } from 'react';

/** Icon for each primary route, shared by the mobile dock and search. */
export const navIcons: Record<SiteNavHref, ComponentType<{ className?: string }>> = {
  '/': HomeIcon,
  '/work': BriefcaseIcon,
  '/impact': SparklesIcon,
  '/hobbies': HeartIcon,
  '/resume': FileIcon,
};

export function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}
