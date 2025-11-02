/**
 * Home page server component providing metadata and rendering the animated hero content.
 */
import type { Metadata } from 'next';
import { HomeContent } from './home-content';
import {
  openGraphImagePath,
  primaryKeywords,
  siteName,
  siteTaglineEn,
  siteTaglineEs,
  siteUrl,
} from '@/lib/seo/config';

const pageTitle = 'Full Stack Developer in Uruguay | Lucas Regalado';
const pageDescription = `${siteTaglineEn} ${siteTaglineEs}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [...primaryKeywords, 'portfolio', 'software engineer Montevideo'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: openGraphImagePath,
        width: 800,
        height: 800,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [openGraphImagePath],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
