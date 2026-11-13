import { profile, siteNav } from '@/lib/portfolio-data';
import type { MetadataRoute } from 'next';

/**
 * Every page in the primary navigation. The blog stays out until it has posts. No
 * `lastModified`: a build timestamp would claim every page changed on every deploy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return siteNav.map((item) => ({
    url: new URL(item.href, profile.siteUrl).toString(),
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.7,
  }));
}
