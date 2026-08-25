'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ChevronDown, ChevronUp, Mail, MapPin } from 'lucide-react';

const techCategories = [
  {
    name: 'Frontend',
    description: 'Designing fast, accessible, and conversion-focused user interfaces',
    technologies: [
      { name: 'React', level: 95, description: 'Hooks, Context, state management, performance optimization' },
      { name: 'Next.js', level: 92, description: 'App Router, SSR/ISR, SEO optimization, API routes' },
      { name: 'TypeScript', level: 90, description: 'Advanced types, generics, strict typing for scalable apps' },
      { name: 'Tailwind CSS', level: 93, description: 'Design systems, responsive UI, accessibility-first styling' },
      { name: 'UI/UX Implementation', level: 88, description: 'Figma to production-ready, mobile-first interfaces' },
    ],
  },
  {
    name: 'Backend',
    description: 'Building secure, scalable APIs and business-critical systems',
    technologies: [
      { name: '.NET Core', level: 94, description: 'Web APIs, Clean Architecture, Entity Framework' },
      { name: 'Authentication & Security', level: 90, description: 'JWT, role-based access, identity management' },
      { name: 'Node.js', level: 86, description: 'Express, Fastify, lightweight microservices' },
      { name: 'Databases', level: 88, description: 'PostgreSQL, SQL Server, MongoDB, Redis' },
      { name: 'Integrations', level: 85, description: 'Payments (M-Pesa, Stripe), email, SMS, third-party APIs' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    description: 'Deploying, scaling, and maintaining production-ready systems',
    technologies: [
      { name: 'Azure', level: 91, description: 'App Service, Functions, Storage, Azure SQL' },
      { name: 'CI/CD Pipelines', level: 88, description: 'GitHub Actions, automated builds, testing, deployments' },
      { name: 'Docker', level: 85, description: 'Containerization, multi-stage builds, environment parity' },
      { name: 'Monitoring & Logging', level: 82, description: 'Application Insights, performance tracking, alerts' },
      { name: 'Hosting & Domains', level: 80, description: 'SSL, DNS, environment configuration' },
    ],
  },
  {
    name: 'Engineering Leadership',
    description: 'Driving technical direction, quality, and team effectiveness',
    technologies: [
      { name: 'Technical Leadership', level: 90, description: 'Owning features end-to-end and guiding decisions' },
      { name: 'Code Reviews', level: 92, description: 'Maintaining standards, mentoring developers' },
      { name: 'Mentorship', level: 88, description: 'Guiding junior engineers and onboarding teams' },
      { name: 'Engineering Standards', level: 90, description: 'Coding guidelines, PR workflows, quality gates' },
      { name: 'Cross-Team Collaboration', level: 85, description: 'Working with product, design, QA, stakeholders' },
    ],
  },
  {
    name: 'System Architecture',
    description: 'Designing scalable, maintainable, and resilient systems',
    technologies: [
      { name: 'Architecture Patterns', level: 90, description: 'Clean Architecture, layered and modular systems' },
      { name: 'Trade-off Analysis', level: 88, description: 'Balancing performance, cost, and complexity' },
      { name: 'Scalability Planning', level: 87, description: 'Caching, async processing, load handling' },
      { name: 'Security by Design', level: 85, description: 'Threat modeling, least privilege, secure defaults' },
      { name: 'Documentation', level: 88, description: 'Architecture diagrams, ADRs, onboarding docs' },
    ],
  },
  {
    name: 'Delivery & Process',
    description: 'Ensuring predictable, high-quality software delivery',
    technologies: [
      { name: 'Agile & Scrum', level: 90, description: 'Sprint planning, estimation, retrospectives' },
      { name: 'Technical Planning', level: 88, description: 'Breaking down features and managing risks' },
      { name: 'Release Management', level: 85, description: 'Versioning, rollouts, rollback strategies' },
      { name: 'Testing Strategy', level: 87, description: 'Unit, integration, and smoke testing' },
      { name: 'Incident Response', level: 80, description: 'Debugging production issues and RCA' },
    ],
  },
  {
    name: 'Product & Business Thinking',
    description: 'Aligning technical solutions with real business goals',
    technologies: [
      { name: 'Requirements Analysis', level: 90, description: 'Turning business needs into technical solutions' },
      { name: 'Cost & Performance Trade-offs', level: 85, description: 'Optimizing infrastructure and dev costs' },
      { name: 'Stakeholder Communication', level: 88, description: 'Explaining technical decisions clearly' },
      { name: 'User-Centric Design', level: 86, description: 'Building solutions that solve real problems' },
      { name: 'Roadmap Support', level: 82, description: 'Supporting long-term product vision' },
    ],
  },
];

const TechPageClient = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'Frontend',
    'Engineering Leadership',
  ]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName],
    );
  };

  return (
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
            Technical Expertise &amp; Leadership
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools, practices, and leadership skills I use to design, build, and scale production systems
          </p>
          <div className="w-16 h-1 bg-primary-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => toggleCategory(category.name)}
                className="w-full p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-expanded={expandedCategories.includes(category.name)}
                aria-controls={`tech-category-${category.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100">
                      {category.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                  {expandedCategories.includes(category.name) ? (
                    <ChevronUp className="w-5 h-5 shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 shrink-0" aria-hidden="true" />
                  )}
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedCategories.includes(category.name) && (
                  <motion.div
                    id={`tech-category-${category.name.replace(/\s+/g, '-').toLowerCase()}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 overflow-hidden"
                  >
                    <div className="space-y-4">
                      {category.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm"
                        >
                          <div className="flex justify-between mb-2">
                            <div>
                              <h3 className="font-mono font-semibold text-gray-900 dark:text-gray-100">
                                {tech.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {tech.description}
                              </p>
                            </div>
                            <span
                              className="text-primary-600 dark:text-primary-400 font-semibold text-sm"
                              aria-label={`${tech.level}% proficiency`}
                            >
                              {tech.level}%
                            </span>
                          </div>
                          <div
                            className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full"
                            role="progressbar"
                            aria-valuenow={tech.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${tech.name} proficiency`}
                          >
                            <motion.div
                              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{ duration: 0.8 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I focus on building systems that are reliable, maintainable, and aligned with real business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Technical Leadership
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Architecture ownership and team guidance
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                System Architecture
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Working with global clients from Nairobi
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Mentorship &amp; Code Quality
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Staying current with engineering best practices
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechPageClient;
