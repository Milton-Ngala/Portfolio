'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Download, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FloatingElements from '@/components/FloatingElements';
import TechTags from '@/components/TechTags';
import About from '@/components/About';
import WorkSection from '@/components/WorkSection';
import ValueProposition from '@/components/ValueProposition';
import ngala from '@/assets/ngala.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Home = () => (
  <>
    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #14b8a6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Radial fade over the grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,theme(colors.gray.50)_80%)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,theme(colors.gray.950)_80%)] pointer-events-none" />
      <FloatingElements />

      <div className="relative z-10 container-content mx-auto px-6 text-center pt-24 pb-16">
        {/* Status badge */}
        <motion.div className="mb-6" {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 px-4 py-1.5 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
            Available for new projects
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div className="mb-6 flex justify-center" {...fadeUp(0.2)}>
          <Image
            src={ngala}
            alt="Milton Ngala"
            width={110}
            height={110}
            className="rounded-full ring-4 ring-primary-200 dark:ring-primary-800/60 shadow-card-lg"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-display font-heading font-bold text-gray-900 dark:text-gray-50 mb-4 text-balance"
          {...fadeUp(0.3)}
        >
          Milton Ngala
          <br />
          <span className="text-gradient">Senior Software Engineer</span>
        </motion.h1>

        {/* Currently working on */}
        <motion.p
          className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-5"
          {...fadeUp(0.35)}
        >
          Currently building: <span className="text-primary-600 dark:text-primary-400">portfolio blog + open-source tooling</span>
        </motion.p>

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

        {/* CTAs — dual audience */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-10"
          {...fadeUp(0.6)}
        >
          {/* For clients */}
          <Link href="/contact">
            <motion.button
              className="btn-primary text-base px-7 py-3.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a project
              <ArrowRight size={18} />
            </motion.button>
          </Link>
          {/* For employers */}
          <Link href="/work">
            <motion.button
              className="btn-ghost text-base px-7 py-3.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View my work
            </motion.button>
          </Link>
        </motion.div>

        {/* Secondary links */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-5"
          {...fadeUp(0.7)}
        >
          <a
            href="/milton-ngala-cv.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Download size={14} />
            Download CV
          </a>
          <motion.button
            onClick={() => window.open('https://calendly.com/milton-antony-ngala', '_blank')}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Calendar size={14} />
            Book a call
          </motion.button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="mt-14 flex justify-center text-gray-400 dark:text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ── Below-fold — Work first, then social proof, then about ─────────── */}
    <WorkSection />
    <ValueProposition />
    <About />
  </>
);

export default Home;
