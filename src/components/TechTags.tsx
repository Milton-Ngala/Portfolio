'use client';

import { motion } from 'framer-motion';

const enterpriseTags = [
  '.NET Core',
  'C#',
  'ASP.NET Web API',
  'Entity Framework',
  'SQL Server',
  'Redis',
  'Docker',
  'Microservices',
  'Domain-Driven Design',
  'Cloud Architecture',
];

const fullStackTags = [
  'Next.js',
  'React',
  'Node.js',
  'Tailwind CSS',
  'TypeScript',
  'PostgreSQL',
  'REST/GraphQL APIs',
  'UI/UX Optimization',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 120, damping: 12 },
  },
};

interface TagColumnProps {
  label: string;
  tags: string[];
  /** Tailwind colour variant applied to the label and tag hover state */
  variant: 'primary' | 'accent';
}

const TagColumn = ({ label, tags, variant }: TagColumnProps) => {
  const labelColor =
    variant === 'primary'
      ? 'text-primary-600 dark:text-primary-400'
      : 'text-accent-600 dark:text-accent-400';

  const hoverBorder =
    variant === 'primary'
      ? 'hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20'
      : 'hover:border-accent-400 dark:hover:border-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20';

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Column label */}
      <p className={`text-xs font-mono font-semibold uppercase tracking-widest ${labelColor}`}>
        {label}
      </p>

      {/* Tag pills */}
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tags.map((tech) => (
          <motion.span
            key={tech}
            variants={itemVariants}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full text-sm font-mono font-medium transition-all duration-200 shadow-sm ${hoverBorder}`}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const TechTags = () => (
  <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
    <TagColumn
      label="Enterprise Infrastructure"
      tags={enterpriseTags}
      variant="primary"
    />
    <TagColumn
      label="Agile Full-Stack &amp; UI"
      tags={fullStackTags}
      variant="accent"
    />
  </div>
);

export default TechTags;
