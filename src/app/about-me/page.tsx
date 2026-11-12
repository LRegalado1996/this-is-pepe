/**
 * About Me page server component that provides metadata and renders the profile content.
 */
import type { Metadata } from 'next';
import { AboutContent } from './about-content';
import { buildPageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Me · Senior Full Stack Developer',
  description:
    'Who Lucas Regalado is: a senior full stack developer from Montevideo, Uruguay. How he works, the stack he uses and his life outside the code.',
  path: '/about-me',
  keywords: ['about lucas regalado', 'software developer biography'],
  type: 'profile',
});

export default function AboutMePage() {
  return <AboutContent />;
}
