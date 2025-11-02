/**
 * Root layout that configures global metadata, fonts, and shared UI elements.
 */
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components";
import {
  author,
  defaultOgImageAlt,
  openGraphImagePath,
  primaryKeywords,
  siteName,
  siteTaglineEn,
  siteTaglineEs,
  siteUrl,
  socialProfiles,
  structuredData,
} from "@/lib/seo/config";

import "./globals.css";

const textFont = DM_Sans({ subsets: ["latin"] });

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
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteName,
    description: siteTaglineEn,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_UY"],
    images: [
      {
        url: openGraphImagePath,
        width: 800,
        height: 800,
        alt: defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteTaglineEn,
    creator: "@lucasregalado5",
    site: "@lucasregalado5",
    images: [openGraphImagePath],
  },
  other: {
    "description:es": siteTaglineEs,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [structuredData.person(), structuredData.website()];

  return (
    <html lang="en">
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
        className={`${textFont.className} antialiased flex flex-col items-center justify-center min-w-svw min-h-dvh bg-light-primary text-tertiary`}
      >
        <Header />

        {/* max-w-[1280px] */}
        <main className="flex-1 w-full flex flex-col items-center">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
