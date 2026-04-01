'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FloatingElements from '@/components/FloatingElements';
import TechTags from '@/components/TechTags';
import About from '@/components/About';
import WorkSection from '@/components/WorkSection';
import ValueProposition from '@/components/ValueProposition';
import ngala from '@/assets/ngala.png';

// Shared animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Home = () => {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50 dark:bg-gray-950">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,theme(colors.primary.500/12%),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,theme(colors.primary.500/8%),transparent)] pointer-events-none" />
        <FloatingElements />

        <div className="relative z-10 container-content mx-auto px-6 text-center pt-24 pb-16">
          {/* Status badge */}
          <motion.div className="mb-8" {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 px-4 py-1.5 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
              Available for new projects
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div className="mb-8 flex justify-center" {...fadeUp(0.2)}>
            <Image
              src={ngala}
              alt="Milton Ngala"
              width={120}
              height={120}
              className="rounded-full ring-4 ring-primary-200 dark:ring-primary-800/60 shadow-card-lg"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-display font-heading font-bold text-gray-900 dark:text-gray-50 mb-5 text-balance"
            {...fadeUp(0.3)}
          >
            Milton Ngala
            <br />
            <span className="text-gradient">Software Engineer</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            {...fadeUp(0.4)}
          >
            I design and build{' '}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              production-grade systems
            </span>{' '}
            — scalable APIs, cloud infrastructure, and polished interfaces — that move business metrics.
          </motion.p>

          {/* Tech tags */}
          <motion.div {...fadeUp(0.5)}>
            <TechTags />
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-10"
            {...fadeUp(0.6)}
          >
            <Link href="/work">
              <motion.button
                className="btn-primary text-base px-7 py-3.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Case Studies
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <motion.button
              onClick={() => window.open('https://calendly.com/milton-antony-ngala', '_blank')}
              className="btn-ghost text-base px-7 py-3.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar size={18} />
              Book a Call
            </motion.button>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            className="mt-16 flex justify-center text-gray-400 dark:text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Below-fold ───────────────────────────────────────────────────── */}
      <ValueProposition />
      <About />
      <WorkSection />
    </>
  );
};

export default Home;
