/**
 * Introduction card component with glassmorphism design displaying personal description.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface Props {
  title?: string;
  paragraphs?: string[];
  children?: React.ReactNode;
  className?: string;
}

export const IntroCard = ({ title, paragraphs = [], children, className }: Props) => {
  return (
    <motion.div
      className={clsx(
        'backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50',
        'rounded-xl p-6 shadow-lg',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {title && <h2 className="text-secondary text-xl font-bold mb-4">{title}</h2>}
      <div className="flex flex-col gap-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-tertiary leading-relaxed">
            {paragraph}
          </p>
        ))}
        {children}
      </div>
    </motion.div>
  );
};

