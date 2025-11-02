/**
 * Client-side home content featuring the hero section, introduction, and social networks.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { SocialNetworks, Title } from '@/components';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100 },
  },
};

export const HomeContent = () => {
  return (
    <>
      <section className="relative -mt-[52px] w-screen h-screen mb-8">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-light-primary opacity-20" />

        <motion.div
          className="absolute bottom-8 right-0 left-0 max-w-[1280px] flex flex-col items-center gap-8 m-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex gap-4 items-center" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/images/me.png"
                alt="Lucas Regalado smiling"
                width={400}
                height={400}
                className="w-40 h-40 object-cover rounded-full border-2 border-dark-primary bg-light-primary"
              />
            </motion.div>

            <motion.div
              className={clsx(
                'backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50',
                'rounded-xl md:rounded-full p-4 md:px-8 h-fit',
                'shadow-lg'
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Title animated={false} className="text-center">
                <span className="hidden md:inline-block">Welcome!</span> I&apos;m Lucas Regalado
              </Title>
            </motion.div>
          </motion.div>

          <motion.p
            className={clsx(
              'text-center backdrop-blur-md bg-light-primary/90',
              'border-2 border-dark-primary/50 rounded-xl md:rounded-full',
              'p-4 md:px-8 shadow-lg'
            )}
            variants={itemVariants}
          >
            I&apos;m a software developer with over 8 years of experience. I&apos;m passionate about my
            craft, enjoy working in a team, and always seek new challenges that enable me to grow and
            help others. I invite you to explore this site, where you&apos;ll find more information about
            who I am, my past projects, and how to contact me. Thank you for being here!
          </motion.p>

          <motion.p
            className={clsx(
              'flex items-center w-fit text-center',
              'backdrop-blur-md bg-light-primary/90',
              'border-2 border-dark-primary/50 rounded-xl md:rounded-full',
              'p-2 md:px-8 shadow-lg'
            )}
            variants={itemVariants}
          >
            <MapPin size={20} strokeWidth={1} className="mr-2" />
            Montevideo, Uruguay
          </motion.p>
        </motion.div>
      </section>

      <motion.section
        className="w-full max-w-[1280px] px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SocialNetworks className="flex flex-col items-center" />
      </motion.section>
    </>
  );
};


