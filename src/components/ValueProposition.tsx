import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, CheckCircle, Award } from 'lucide-react';

const ValueProposition = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: TrendingUp,
      number: '12+',
      label: 'Apps Delivered',
      description: 'Successfully launched applications',
    },
    {
      icon: Users,
      number: '40%',
      label: 'Performance Gain',
      description: 'Average improvement in app performance',
    },
    {
      icon: CheckCircle,
      number: '100%',
      label: 'On-Time Delivery',
      description: 'Projects delivered on schedule',
    },
    {
      icon: Award,
      number: '5★',
      label: 'Client Rating',
      description: 'Average client satisfaction score',
    },
  ];

  const trustBadges = [
    'Microsoft Certified',
    'Azure Solutions Architect',
    'React Specialist',
    'Enterprise Ready',
  ];

  return (
    <section id="value-proposition" className="prose prose-lg max-w-none rounded-2xl p-8 mb-12 mt-14">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16 prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-heading font-bold">
            Proven Results That Matter
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Delivering enterprise-grade solutions with measurable impact for businesses of all sizes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-primary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                <stat.icon className="w-10 h-10 text-primary-500" />
              </div>
              <motion.div
                className="text-4xl font-heading font-bold text-gray-600 dark:text-gray-400 mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.3,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                {stat.number}
              </motion.div>
              <h3 className="text-lg font-heading font-semibold text-gray-600 dark:text-gray-400 mb-1">
                {stat.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-500 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge}
              className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-700 dark:text-gray-500 font-medium text-sm">
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;