import { profile } from '@/lib/portfolio-data';
import { themeInitScript } from '@/lib/theme-init';
import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.metaDescription,
  metadataBase: new URL(profile.siteUrl),
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
    siteName: profile.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        {children}
      </body>
    </html>
  );
}
