/**
 * Quote card component displaying an inspirational quote with elegant styling.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Quote } from 'lucide-react';

interface Props {
  text: string;
  author: string;
  className?: string;
}

export const QuoteCard = ({ text, author, className }: Props) => {
  return (
    <motion.div
      className={clsx(
        'backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50',
        'rounded-xl p-6 shadow-lg relative',
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Quote
        size={40}
        strokeWidth={1}
        className="text-dark-primary/30 absolute top-4 left-4"
        aria-hidden="true"
      />
      <div className="relative z-10 mt-8">
        <p className="text-tertiary text-lg italic leading-relaxed mb-4">
          {text}
        </p>
        <p className="text-secondary font-semibold text-right">
          — {author}
        </p>
      </div>
    </motion.div>
  );
};

