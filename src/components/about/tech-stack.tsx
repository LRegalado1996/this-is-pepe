/**
 * Technology stack display component showing skill badges with hover animations.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface Props {
  items: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200 },
  },
};

export const TechStack = ({ items, className }: Props) => {
  return (
    <motion.div
      className={clsx('flex flex-wrap gap-3 justify-center', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className={clsx(
            'px-4 py-2 rounded-lg font-semibold text-sm',
            'bg-light-primary border-2 border-dark-primary',
            'backdrop-blur-sm shadow-md',
            'transition-all'
          )}
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
};

