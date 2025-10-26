/**
 * Badge list component displaying colorful status badges with animations.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { badges } from './data';

interface Props {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export const BadgeList = ({ className }: Props) => {
  return (
    <motion.div
      className={clsx('flex flex-wrap gap-2 justify-center', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {badges.map((badge, index) => (
        <motion.span
          key={index}
          className={clsx(
            'px-3 py-1 rounded-full text-xs font-semibold',
            'bg-light-primary border-2 border-dark-primary',
            'backdrop-blur-sm'
          )}
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {badge.label}
        </motion.span>
      ))}
    </motion.div>
  );
};

