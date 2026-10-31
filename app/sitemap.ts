import { profile, siteNav } from '@/lib/portfolio-data';
import type { MetadataRoute } from 'next';

/** Every page in the primary navigation. The blog stays out until it has posts. */
export default function sitemap(): MetadataRoute.Sitemap {
  return siteNav.map((item) => ({
    url: new URL(item.href, profile.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.7,
  }));
}
