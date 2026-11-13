import { profile } from '@/lib/portfolio-data';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    // The blog stays crawlable so search engines can read its `noindex` (a disallow would hide it).
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', profile.siteUrl).toString(),
  };
}
