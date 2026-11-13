import { profile } from '@/lib/portfolio-data';
import { platformInitScript } from '@/lib/platform-init';
import { themeInitScript } from '@/lib/theme-init';
import { pageMetadata } from '@/lib/metadata';
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
  metadataBase: new URL(profile.siteUrl),
  ...pageMetadata({
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Both schemes supported, so the browser themes the canvas before CSS loads.
            lib/theme.ts rewrites `content` to pin a scheme; CSS reads it from here. */}
        <meta name="color-scheme" content="light dark" suppressHydrationWarning />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Script
          id="document-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: themeInitScript + platformInitScript,
          }}
        />
        {children}
      </body>
    </html>
  );
}
