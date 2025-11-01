/**
 * About Me page showcasing personal introduction, skills, experience summary, and inspirational quote.
 */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Title, 
  Subtitle, 
  BadgeList, 
  IntroCard, 
  InterestsList, 
  TechStackCategorized, 
  QuoteCard, 
  ExperienceCards,
  CurrentlyList,
  QuickStats,
  HobbiesCard,
  FeaturedProjects,
  PrimaryCTA,
  aboutDescription,
  interests,
  stackCategories,
  inspirationalQuote,
  currentlyDoing,
} from '@/components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutMePage() {
  return (
    <motion.div
      className="w-full max-w-[1280px] p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={sectionVariants}>
        <Title className="mb-4 text-center">Hello! I&apos;m Lucas Regalado</Title>
        <p className="text-center text-secondary text-lg mb-6">
          💻 Web Developer | 🧠 Lifelong Learner | 🤝 Passionate Collaborator
        </p>
      </motion.div>

      {/* Badges */}
      <motion.div variants={sectionVariants} className="mb-12">
        <BadgeList />
      </motion.div>

      {/* Quick Stats */}
      <motion.section variants={sectionVariants} className="mb-12">
        <QuickStats />
      </motion.section>

      {/* About Me Section with Avatar and Speech Bubble */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">🌱 About Me</Subtitle>
        <div className="flex flex-row-reverse gap-4 items-end">
          {/* Avatar */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: -3 }}
          >
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border-3 border-dark-primary overflow-hidden shadow-xl">
              <Image
                src="/images/me.png"
                alt="Lucas Regalado"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Chat bubble container */}
          <div className="flex-1 relative w-full">
            {/* WhatsApp-style tail pointing to avatar (right side, bottom aligned) */}
            <div className="hidden md:block absolute -right-3 bottom-4 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-dark-primary/50" />
            <div className="hidden md:block absolute -right-2.5 bottom-4 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-light-primary/90" />
            
            {/* Chat bubble */}
            <motion.div
              className="backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50 rounded-2xl rounded-br-sm p-5 md:p-6 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col gap-4">
                {aboutDescription.map((paragraph, index) => (
                  <p key={index} className="text-tertiary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Hobbies & Interests */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">🎯 Beyond Code</Subtitle>
        <HobbiesCard />
      </motion.section>

      {/* Interests - Professional */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">✨ I enjoy</Subtitle>
        <IntroCard title="" paragraphs={[]}>
          <InterestsList items={interests} />
        </IntroCard>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">🧩 Stack & Tools</Subtitle>
        <TechStackCategorized categories={stackCategories} />
      </motion.section>

      {/* Work Experience Summary */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">💼 Work Experience</Subtitle>
        <ExperienceCards />
      </motion.section>

      {/* Featured Projects */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">🚀 Featured Projects</Subtitle>
        <FeaturedProjects />
      </motion.section>

      {/* Primary CTA */}
      <motion.section variants={sectionVariants} className="mb-12">
        <PrimaryCTA />
      </motion.section>

      {/* Currently Section */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">🔄 Currently</Subtitle>
        <IntroCard title="" paragraphs={[]}>
          <CurrentlyList items={currentlyDoing} />
        </IntroCard>
      </motion.section>

      {/* Inspirational Quote */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">💬 Inspiration</Subtitle>
        <QuoteCard text={inspirationalQuote.text} author={inspirationalQuote.author} />
        <motion.p
          className="text-center text-tertiary mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I deeply believe in this. My goal is not only to develop software, but to{' '}
          <strong>create, share, and help others achieve their goals</strong>. 
          Code is just the means; the goal is <strong>to build something worthwhile together</strong>.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}
