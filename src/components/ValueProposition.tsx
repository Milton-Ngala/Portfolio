'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, CheckCircle, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: '12+',
    label: 'Systems Shipped',
    description: 'Production apps across healthcare, travel, and enterprise',
  },
  {
    icon: Users,
    number: '180%',
    label: 'Peak Impact',
    description: 'Conversion uplift on a travel booking platform',
  },
  {
    icon: CheckCircle,
    number: '40%',
    label: 'Wait Time Cut',
    description: 'Patient wait time reduction via real-time queue system',
  },
  {
    icon: Award,
    number: 'Azure',
    label: 'Certified',
    description: 'Microsoft Azure Solutions Architect Expert',
  },
];

const badges = [
  'Microsoft Certified',
  'Azure Solutions Architect',
  'Clean Architecture',
  'CI/CD & DevOps',
  'Full-Stack .NET & React',
];

const ValueProposition = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="container-wide mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Outcomes, not just output</h2>
          <p>Every project is measured by the business result it delivers.</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="card p-6 text-center group hover:shadow-card-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <p className="text-3xl font-heading font-bold text-gray-900 dark:text-gray-50 mb-1 tabular-nums">
                {stat.number}
              </p>
              <p className="text-sm font-heading font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-snug">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              className="tag hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-200 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
              whileHover={{ scale: 1.04 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
