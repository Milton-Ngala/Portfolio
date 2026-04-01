'use client';

import { motion } from 'framer-motion';

const technologies = [
  'Next.js', 'React', '.NET Core', 'TypeScript', 'Azure', 'Node.js', 'PostgreSQL', 'Docker',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 12 },
  },
};

const TechTags = () => (
  <motion.div
    className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl mx-auto"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {technologies.map((tech) => (
      <motion.span
        key={tech}
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-mono font-medium hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 shadow-sm"
        whileHover={{ scale: 1.05, y: -2 }}
      >
        {tech}
      </motion.span>
    ))}
  </motion.div>
);

export default TechTags;
