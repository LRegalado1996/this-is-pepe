/**
 * Featured projects component showcasing key professional achievements.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { featuredProjects } from './data';

interface Props {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const FeaturedProjects = ({ className }: Props) => {
  return (
    <motion.div
      className={clsx('grid grid-cols-1 md:grid-cols-2 gap-6', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {featuredProjects.map((project) => (
        <motion.div
          key={project.id}
          className={clsx(
            'backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50',
            'rounded-xl p-6 shadow-lg',
            'flex flex-col h-full'
          )}
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-secondary text-xl font-bold">{project.title}</h3>
              {project.link && project.isExternal && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  aria-label={`Visit ${project.title} (opens in new tab)`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <ExternalLink
                      size={20}
                      strokeWidth={2}
                      className="text-dark-primary group-hover:text-secondary transition-colors"
                    />
                  </motion.div>
                </Link>
              )}
            </div>
            <p className="text-secondary text-xs font-semibold">{project.company}</p>
          </div>

          {/* Description */}
          <p className="text-tertiary text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Highlights */}
          <div className="mt-auto">
            <ul className="flex flex-col gap-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    strokeWidth={2}
                    className="text-secondary flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-tertiary text-xs leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

