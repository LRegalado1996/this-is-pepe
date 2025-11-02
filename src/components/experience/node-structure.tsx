/**
 * Timeline component that displays job experiences with animated nodes and connections.
 */
'use client';

import { motion } from 'framer-motion';
import { JobStructure } from './types';
import { JobDescription } from './job-description';

interface Props {
  jobsStructure: JobStructure[];
}

export const NodeStructure = ({ jobsStructure }: Props) => {
  return (
    <div className="grid grid-cols-[32px_1fr]">
      {jobsStructure.map((job, i) => [
        <div key={'node-' + i} className="flex justify-center relative w-full h-full">
          {/* Animated vertical line */}
          <motion.div
            className="w-0.5 h-full absolute top-0 bottom-0 bg-primary"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Animated nodes */}
          <motion.div
            className="w-4 h-4 rounded-full bg-dark-primary z-10 relative top-5.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              type: 'spring' as const,
              stiffness: 200,
              delay: i * 0.1 + 0.3,
            }}
            whileHover={{ scale: 1.5 }}
          />
        </div>,
        <motion.div
          key={'job-' + i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
        >
          <JobDescription job={job} />
        </motion.div>,
      ])}
    </div>
  );
};
