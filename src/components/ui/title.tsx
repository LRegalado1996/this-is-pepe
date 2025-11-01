/**
 * Main title component (h1) with Lora font and optional fade-in animation.
 */
'use client';

import { Lora } from 'next/font/google';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const titleFont = Lora({ subsets: ['latin'] });

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
        titleFont.className,
        'antialiased text-xl md:text-2xl font-bold text-secondary uppercase',
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
