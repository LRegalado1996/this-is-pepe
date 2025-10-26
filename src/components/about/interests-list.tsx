/**
 * Animated list component displaying personal interests and values.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Sparkles } from 'lucide-react';

interface Props {
  items: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export const InterestsList = ({ items, className }: Props) => {
  return (
    <motion.ul
      className={clsx('flex flex-col gap-3', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-start gap-3"
          variants={itemVariants}
        >
          <Sparkles 
            size={20} 
            strokeWidth={1.5} 
            className="text-secondary flex-shrink-0 mt-1"
            aria-label="Interest icon"
          />
          <span className="text-tertiary">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

