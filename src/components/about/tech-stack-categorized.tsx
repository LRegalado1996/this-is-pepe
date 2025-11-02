/**
 * Categorized technology stack display with organized sections for different skill areas.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { StackCategory } from './data';

interface Props {
  categories: StackCategory[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 200 },
  },
};

export const TechStackCategorized = ({ categories, className }: Props) => {
  return (
    <motion.div
      className={clsx('flex flex-col gap-8', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          className={clsx(
            'backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50',
            'rounded-xl p-6 shadow-lg'
          )}
          variants={categoryVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-secondary text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">{category.emoji}</span>
            {category.title}
          </h3>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {category.items.map((item, itemIndex) => (
              <motion.span
                key={itemIndex}
                className={clsx(
                  'px-3 py-1.5 rounded-lg text-sm font-semibold',
                  'bg-primary border border-dark-primary',
                  'transition-all'
                )}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  backgroundColor: '#a99985',
                  color: '#f5f1ed',
                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

