import { motion } from 'framer-motion';

const TechTags = () => {
  const technologies = [
    'Next.js 14', 'React 18', '.NET Core', 'Node.js', '+ much more'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="flex flex-wrap justify-center gap-3 mt-8 max-w-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {technologies.map((tech) => (
        <motion.span
          key={tech}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-mono font-medium hover:border-primary-300 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 shadow-sm"
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TechTags;