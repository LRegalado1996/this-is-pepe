/**
 * Currently list component showing ongoing activities and projects.
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

export const CurrentlyList = ({ items, className }: Props) => {
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
          className="flex items-start gap-3 text-tertiary"
          variants={itemVariants}
        >
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

