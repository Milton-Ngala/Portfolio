'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Download, ChevronDown, Building2, Rocket } from 'lucide-react';
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

/** Audience cards rendered below the sub-headline */
const audienceCards = [
  {
    id: 'consulting',
    icon: Building2,
    audience: 'Corporate',
    title: 'Enterprise Consulting',
    description:
      'Scalable .NET architectures, microservices, cloud migrations (AWS/Azure), and legacy system optimization.',
    cta: 'Optimize My Systems',
    href: '#consulting',
    accent: 'from-primary-600 to-primary-700',
    border: 'border-primary-200 dark:border-primary-800/50',
    iconBg: 'bg-primary-50 dark:bg-primary-900/30',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    id: 'project-planner',
    icon: Rocket,
    audience: 'Freelance / Startup',
    title: 'Full-Stack MVPs',
    description:
      'Rapid product delivery, performant Next.js applications, robust API development, and responsive frontend optimization.',
    cta: 'Launch a Product',
    href: '#project-planner',
    accent: 'from-accent-500 to-accent-600',
    border: 'border-accent-200 dark:border-accent-800/50',
    iconBg: 'bg-accent-50 dark:bg-accent-900/30',
    iconColor: 'text-accent-600 dark:text-accent-400',
  },
] as const;

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

        {/* Name */}
        <motion.p
          className="text-lg font-heading font-semibold text-gray-500 dark:text-gray-400 mb-2 tracking-wide"
          {...fadeUp(0.25)}
        >
          Milton Ngala
        </motion.p>

        {/* Primary headline — dual-audience */}
        <motion.h1
          className="text-display font-heading font-bold text-gray-900 dark:text-gray-50 mb-4 text-balance"
          {...fadeUp(0.3)}
        >
          Enterprise Backend Architect
          <br />
          <span className="text-gradient">&amp; Full-Stack Engineer</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          {...fadeUp(0.4)}
        >
          Designing resilient{' '}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            cloud-native architectures
          </span>{' '}
          for enterprise scale, and building performant full-stack applications for rapid market entry.
        </motion.p>

        {/* ── Dual-audience cards ────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
          {...fadeUp(0.5)}
        >
          {audienceCards.map((card, i) => (
            <motion.a
              key={card.id}
              href={card.href}
              className={`group relative flex flex-col gap-3 rounded-2xl border bg-white dark:bg-gray-900 p-6 text-left shadow-sm hover:shadow-card-md transition-all duration-300 ${card.border}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                <card.icon className={`w-5 h-5 ${card.iconColor}`} aria-hidden="true" />
              </div>

              {/* Labels */}
              <div>
                <p className={`text-xs font-mono font-semibold uppercase tracking-wider mb-0.5 ${card.iconColor}`}>
                  {card.audience}
                </p>
                <h2 className="text-base font-heading font-bold text-gray-900 dark:text-gray-50">
                  {card.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {card.description}
              </p>

              {/* CTA */}
              <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${card.iconColor} group-hover:gap-2.5 transition-all duration-200`}>
                {card.cta}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Tech tags */}
        <motion.div {...fadeUp(0.75)}>
          <TechTags />
        </motion.div>

        {/* Secondary links */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-8"
          {...fadeUp(0.85)}
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

    {/* ── Audience anchor sections (ids for CTA deep-links) ─────────────── */}
    {/*
      #consulting      → enterprise consulting section (future expansion)
      #project-planner → freelance/MVP intake section (future expansion)
      Both currently scroll to WorkSection; anchors are live for SEO and UX.
    */}
    <div id="consulting" />
    <div id="project-planner" />

    {/* ── Below-fold — Work first, then social proof, then about ─────────── */}
    <WorkSection />
    <ValueProposition />
    <About />
  </>
);

export default Home;
