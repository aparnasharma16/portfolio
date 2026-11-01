import { profile } from '@/lib/portfolio-data';
import { platformInitScript } from '@/lib/platform-init';
import { splashInitScript } from '@/lib/splash-init';
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
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Script
          id="document-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: themeInitScript + splashInitScript + platformInitScript,
          }}
        />
        {children}
      </body>
    </html>
  );
}
