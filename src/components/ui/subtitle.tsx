/**
 * Section subtitle component (h2) with decorative line and fade-in animation.
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

export const Subtitle = ({ children, className, animated = true }: Props) => {
  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-1 w-8 bg-dark-primary mb-1"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        />
        <h2 className={clsx(titleFont.className, 'antialiased text-lg font-semibold', className)}>
          {children}
        </h2>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="h-1 w-8 bg-dark-primary mb-1" />
      <h2 className={clsx(titleFont.className, 'antialiased text-lg font-semibold', className)}>
        {children}
      </h2>
    </div>
  );
};
