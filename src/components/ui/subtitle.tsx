/**
 * Section subtitle component (h2) with a volt tick and fade-in animation.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export const Subtitle = ({ children, className, animated = true }: Props) => {
  const heading = (
    <h2
      className={clsx(
        'antialiased text-lg font-semibold uppercase tracking-[0.08em]',
        className
      )}
    >
      {children}
    </h2>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-1 w-8 bg-volt mb-1"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        />
        {heading}
      </motion.div>
    );
  }

  return (
    <div>
      <div className="h-1 w-8 bg-volt mb-1" />
      {heading}
    </div>
  );
};
