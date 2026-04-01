'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import projects from '@/data/projects';
import LivePreview from '@/components/common/LivePreview';

const WorkPage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div className="pt-16">
      <section className="py-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="container-wide mx-auto px-6">
          <motion.div
            ref={ref}
            className="section-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1>Case Studies</h1>
            <p>Production systems built to solve real business problems — with measurable outcomes.</p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                className="card-elevated overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                layout
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="lg:border-r border-gray-100 dark:border-gray-700">
                    <LivePreview url={project.link} />
                  </div>

                  <div className="p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <span className="text-xs font-mono font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                            {project.industry}
                          </span>
                          <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50 mt-0.5">
                            {project.title}
                          </h2>
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 mt-1">
                          {project.year}
                        </span>
                      </div>

                      {project.metrics && (
                        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="flex items-center gap-1.5 text-xs">
                              <m.icon className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400 shrink-0" />
                              <span className="font-semibold text-gray-800 dark:text-gray-200">{m.value}</span>
                              <span className="text-gray-500 dark:text-gray-500">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <motion.button
                        onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                        whileHover={{ x: 2 }}
                      >
                        {expandedId === project.id ? 'Hide details' : 'View case study'}
                        <motion.span
                          animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={15} />
                        </motion.span>
                      </motion.button>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        <ExternalLink size={13} />
                        Live site
                      </Link>
                    </div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {expandedId === project.id && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            { label: 'Challenge', content: project.challenge },
                            { label: 'Solution', content: project.solution },
                          ].map(({ label, content }) => (
                            <div key={label}>
                              <p className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                                {label}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {content}
                              </p>
                            </div>
                          ))}
                          <div>
                            <p className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                              Outcome
                            </p>
                            <ul className="space-y-1.5">
                              {project.outcome?.map((o, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                  <span className="w-1 h-1 rounded-full bg-primary-500 mt-2 shrink-0" />
                                  {o}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Have a similar challenge?</p>
            <Link href="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's talk about your project
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
