/**
 * About Me page showcasing personal introduction, skills, experience summary, and inspirational quote.
 */
'use client';

import { motion } from 'framer-motion';
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

      {/* About Me Section */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">🌱 About Me</Subtitle>
        <IntroCard title="" paragraphs={aboutDescription} />
      </motion.section>

      {/* Interests Section */}
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

      {/* Currently Section */}
      <motion.section variants={sectionVariants} className="mb-12">
        <Subtitle className="mb-6">🚀 Currently</Subtitle>
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
