import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Frontend']);

  const techCategories = [
    {
      name: 'Frontend',
      description: 'Building responsive, interactive user interfaces',
      technologies: [
        { name: 'React', level: 95, description: 'Hooks, Context, Performance optimization' },
        { name: 'Next.js', level: 90, description: 'SSR, ISR, App Router, API routes' },
        { name: 'TypeScript', level: 88, description: 'Advanced types, generics, utility types' },
        { name: 'Tailwind CSS', level: 92, description: 'Custom components, responsive design' },
      ]
    },
    {
      name: 'Backend',
      description: 'Scalable server-side applications and APIs',
      technologies: [
        { name: '.NET Core', level: 93, description: 'Web APIs, Entity Framework, Clean Architecture' },
        { name: 'Node.js', level: 87, description: 'Express, Fastify, microservices' },
        { name: 'SQL/NoSQL', level: 85, description: 'PostgreSQL, MongoDB, Redis' },
        { name: 'GraphQL', level: 78, description: 'Apollo Server, schema design' },
      ]
    },
    {
      name: 'DevOps',
      description: 'Deployment, monitoring, and infrastructure',
      technologies: [
        { name: 'Azure', level: 90, description: 'App Service, Functions, DevOps pipelines' },
        { name: 'Docker', level: 83, description: 'Containerization, multi-stage builds' },
        { name: 'GitHub Actions', level: 85, description: 'CI/CD, automated testing' },
        { name: 'Monitoring', level: 80, description: 'Application Insights, logging' },
      ]
    }
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-4">
              Tech Stack
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tools and technologies I use to build scalable solutions
            </p>
            <div className="w-16 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <motion.button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                    {expandedCategories.includes(category.name) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </motion.button>

                {/* Category Content */}
                <AnimatePresence>
                  {expandedCategories.includes(category.name) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-4">
                        {category.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech.name}
                            className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-mono font-semibold text-gray-900 dark:text-gray-100">
                                  {tech.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {tech.description}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                  {tech.level}%
                                </div>
                              </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.level}%` }}
                                transition={{ duration: 1, delay: techIndex * 0.1 + 0.3 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Always learning and staying current with the latest technologies
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
              <span>• Microsoft Certified</span>
              <span>• Open Source Contributor</span>
              <span>• Tech Community Member</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tech;