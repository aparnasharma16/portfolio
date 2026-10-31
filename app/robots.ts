import { profile } from '@/lib/portfolio-data';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/blog' },
    sitemap: new URL('/sitemap.xml', profile.siteUrl).toString(),
  };
}
