'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, MapPin, GitBranch, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const highlights = [
  {
    icon: Award,
    title: 'Microsoft Certified',
    description: 'Azure Solutions Architect Expert',
  },
  {
    icon: MapPin,
    title: 'Based in Nairobi',
    description: 'Working with clients globally',
  },
  {
    icon: GitBranch,
    title: 'Open Source',
    description: 'Active contributor & mentor',
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container-wide mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Bio */}
            <div className="lg:col-span-3 card-elevated p-8 md:p-10">
              <h2 className="text-h2 mb-6">About me</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                <p>
                  I'm a Senior Software Engineer with a track record of shipping production systems that move business metrics — from cutting clinic wait times by 40% to driving a 180% conversion uplift on a travel booking platform.
                </p>
                <p>
                  My work spans the full stack: React and Next.js on the frontend, .NET Core and Node.js on the backend, and Azure for cloud infrastructure. I care as much about system design and long-term maintainability as I do about the end-user experience.
                </p>
                <p>
                  Outside of client work, I contribute to open source, mentor junior engineers, and stay close to the Nairobi tech community.
                </p>
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact">
                  <motion.span
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 cursor-pointer"
                    whileHover={{ x: 3 }}
                  >
                    Let's work together
                    <ArrowRight size={15} />
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-2 space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className="card p-5 flex items-start gap-4 hover:shadow-card-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  whileHover={{ x: 3 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center shrink-0">
                    <h.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
                      {h.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{h.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
