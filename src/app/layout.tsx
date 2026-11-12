/**
 * Root layout that configures global metadata, fonts, and shared UI elements.
 */
import type { Metadata } from "next";
import { Anton, Mona_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header/header";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import {
  author,
  primaryKeywords,
  shareImage,
  siteName,
  siteTaglineEn,
  siteUrl,
  socialProfiles,
  structuredData,
} from "@/lib/seo/config";

import "./globals.css";

const displayFont = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const textFont = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Lucas Regalado",
    default: siteName,
  },
  description: siteTaglineEn,
  applicationName: siteName,
  category: "technology",
  keywords: [...primaryKeywords],
  authors: [{ name: author.name, url: siteUrl }],
  creator: author.name,
  publisher: author.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteName,
    description: siteTaglineEn,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteTaglineEn,
    creator: "@lucasregalado5",
    site: "@lucasregalado5",
    images: [shareImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [structuredData.person(), structuredData.website()];

  return (
    <html lang="en" className={`${displayFont.variable} ${textFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="UY-MO" />
        <meta name="geo.position" content="-34.9011;-56.1645" />
        <meta name="ICBM" content="-34.9011, -56.1645" />
        <link rel="me" href={socialProfiles.linkedin} />
        <link rel="me" href={socialProfiles.twitter} />
        <link rel="me" href={socialProfiles.instagram} />
      </head>
      <body
        className="font-sans antialiased flex flex-col items-center justify-center min-w-svw min-h-dvh bg-paper text-ink"
      >
        <SmoothScroll />
        <Header />

        <main className="flex-1 w-full flex flex-col items-center">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
