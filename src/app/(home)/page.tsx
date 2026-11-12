/**
 * Home page server component providing metadata and rendering the animated hero content.
 */
import type { Metadata } from 'next';
import { HomeContent } from './home-content';
import { buildPageMetadata, siteName, siteTaglineEn } from '@/lib/seo/config';

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Senior Full Stack Developer in Uruguay',
    description: siteTaglineEn,
    path: '/',
    keywords: ['portfolio', 'software engineer Montevideo'],
    type: 'profile',
  }),
  title: { absolute: siteName },
};

export default function HomePage() {
  return <HomeContent />;
}
