/**
 * About Me page server component that provides metadata and renders the animated profile content.
 */
import type { Metadata } from 'next';
import { AboutContent } from './about-content';
import {
  openGraphImagePath,
  primaryKeywords,
  siteName,
  siteTaglineEn,
  siteTaglineEs,
  siteUrl,
} from '@/lib/seo/config';

const pageTitle = 'About Lucas Regalado | Senior Full Stack Developer';
const pageDescription = `${siteTaglineEn} ${siteTaglineEs} Discover career milestones, stack, and personal values.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [...primaryKeywords, 'about lucas regalado', 'software developer biography'],
  alternates: {
    canonical: '/about-me',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/about-me`,
    siteName,
    type: 'profile',
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

export default function AboutMePage() {
  return <AboutContent />;
}
