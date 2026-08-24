'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, CheckCircle, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

/* ─── Animated number counter ─────────────────────────────────────────────── */
function AnimatedNumber({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.8,
  shouldAnimate,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  shouldAnimate: boolean;
}) {
  const motionVal = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);

  // Round to desired decimal places and format
  const rounded = useTransform(motionVal, (v) => {
    const fixed = v.toFixed(decimals);
    return `${prefix}${fixed}${suffix}`;
  });

  useEffect(() => {
    if (!shouldAnimate) return;
    const controls = animate(motionVal, target, {
      duration,
      ease: [0.16, 1, 0.3, 1], // expo-out feel
    });
    return controls.stop;
  }, [shouldAnimate, target, duration, motionVal]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

/* ─── Stats data ───────────────────────────────────────────────────────────── */
const stats = [
  {
    icon: TrendingUp,
    target: 12,
    suffix: '+',
    label: 'Systems Shipped',
    description: 'Production apps across healthcare, travel, and enterprise',
    iconColor: 'text-primary-600 dark:text-primary-400',
    iconBg: 'bg-primary-50 dark:bg-primary-900/20 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40',
    isText: false,
  },
  {
    icon: Users,
    target: 180,
    suffix: '%',
    label: 'Peak Conversion Uplift',
    description: 'Conversion increase on a travel booking platform',
    iconColor: 'text-accent-600 dark:text-accent-400',
    iconBg: 'bg-accent-50 dark:bg-accent-900/20 group-hover:bg-accent-100 dark:group-hover:bg-accent-900/40',
    isText: false,
  },
  {
    icon: CheckCircle,
    target: 40,
    suffix: '%',
    label: 'Wait Time Reduction',
    description: 'Patient wait time cut via real-time queue system',
    iconColor: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-green-50 dark:bg-green-900/20 group-hover:bg-green-100 dark:group-hover:bg-green-900/40',
    isText: false,
  },
  {
    icon: Award,
    target: 5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Microsoft Azure Solutions Architect Expert certified',
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-50 dark:bg-purple-900/20 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40',
    isText: false,
  },
] as const;

const badges = [
  'Microsoft Certified',
  'Azure Solutions Architect',
  'Clean Architecture',
  'CI/CD & DevOps',
  'Full-Stack .NET & React',
];

/* ─── Component ────────────────────────────────────────────────────────────── */
const ValueProposition = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
              className="card p-6 text-center group hover:shadow-card-md transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${stat.iconBg}`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} aria-hidden="true" />
              </div>
              <p className="text-3xl font-heading font-bold text-gray-900 dark:text-gray-50 mb-1 tabular-nums">
                <AnimatedNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  shouldAnimate={inView}
                  duration={1.6 + i * 0.15}
                />
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

        {/* Credential badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              className="tag hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-200 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
              whileHover={{ scale: 1.05 }}
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
