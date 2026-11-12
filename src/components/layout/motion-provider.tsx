/**
 * Applies the visitor's reduced-motion preference to every animation.
 */
'use client';

import { MotionConfig } from 'framer-motion';

export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
