import React from 'react';
import { motion } from 'framer-motion';

const TechBadges = () => {
  const technologies = [
    'React', 'Next.js', 'TypeScript', '.NET Core', 'Node.js', 
    'Azure', 'Docker', 'PostgreSQL', 'MongoDB', 'Tailwind CSS'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TechBadges;