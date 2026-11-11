/**
 * Main title component (h1) in the brand display face with optional fade-in.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export const Title = ({ children, className, animated = true }: Props) => {
  const Component = animated ? motion.h1 : 'h1';

  return (
    <Component
      className={clsx(
        'font-display antialiased text-2xl md:text-4xl text-moss',
        className
      )}
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' },
      })}
    >
      {children}
    </Component>
  );
};
