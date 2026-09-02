'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Building2,
  Rocket,
  CheckCircle,
} from 'lucide-react';
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

const Home = () => {
  const shouldReduceMotion = useReducedMotion();

  // Scroll-cue bounce: skip the infinite loop when reduced motion is preferred
  const scrollCueAnimation = shouldReduceMotion
    ? {}
    : {
        animate: { y: [0, 6, 0] },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      };

  // Pulse-dot badge: drop the CSS animation class when reduced motion is on
  const pulseDotClass = `w-1.5 h-1.5 rounded-full bg-green-500${
    shouldReduceMotion ? '' : ' animate-pulse-dot'
  }`;

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50 dark:bg-black">
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-dot-grid" />

        {/* Radial fade over the grid */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,theme(colors.gray.50)_80%)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,#000000_80%)]" />

        <FloatingElements />

        <div className="relative z-10 container-content mx-auto px-6 text-center pt-20 pb-12 md:pt-24 md:pb-14">
          {/* Status badge */}
          <motion.div className="mb-6" {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 px-4 py-1.5 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800/60">
              <span className={pulseDotClass} />
              Available for new projects
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="mb-4 flex justify-center"
            {...fadeUp(0.2)}
          >
            <Image
              src={ngala}
              alt="Milton Ngala — Senior Software Engineer"
              width={110}
              height={110}
              className="rounded-full ring-4 ring-primary-200 dark:ring-primary-800/60 shadow-card-lg"
              priority
              sizes="110px"
            />
          </motion.div>

          {/* Name */}
          <motion.p
            className="text-lg font-heading font-semibold text-gray-500 dark:text-gray-400 mb-2 tracking-wide"
            {...fadeUp(0.25)}
          >
            Milton Antony Ngala
          </motion.p>

          {/* Primary headline */}
          <motion.h1
            className="text-display font-heading font-bold text-gray-900 dark:text-gray-50 mb-4 text-balance"
            {...fadeUp(0.3)}
          >
            I design and ship systems
            <br />
            <span className="text-gradient">that move business forward.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            {...fadeUp(0.4)}
          >
            Senior software engineering for teams that need resilient{' '}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              cloud-native architecture
            </span>{' '}
            and performant products without unnecessary complexity.
          </motion.p>

          {/* Proof-led outcomes */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px max-w-3xl mx-auto mb-8 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800"
            {...fadeUp(0.5)}
          >
            {[
              ['+180%', 'booking conversion'],
              ['40%', 'shorter clinic waits'],
              ['95+', 'Lighthouse performance'],
            ].map(([value, label]) => (
              <div key={label} className="bg-gray-50 dark:bg-black px-4 py-4 text-center">
                <p className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Secondary links */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-8"
            {...fadeUp(0.85)}
          >
            <motion.button
              onClick={() =>
                window.open(
                  'https://calendly.com/milton-antony-ngala',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Calendar size={16} aria-hidden="true" />
              Book a call
            </motion.button>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            className="mt-8 md:mt-10 flex justify-center text-gray-400 dark:text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div {...scrollCueAnimation}>
              <ChevronDown size={22} aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Enterprise Consulting ──────────────────────────────────────── */}
      <section
        id="consulting"
        className="section bg-gray-50 dark:bg-black border-t border-gray-100 dark:border-gray-800"
      >
        <div className="container-content mx-auto">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/50">
              <Building2
                size={14}
                className="text-primary-600 dark:text-primary-400"
                aria-hidden="true"
              />

              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                Corporate
              </span>
            </div>

            <h2>Enterprise Architecture &amp; Consulting</h2>

            <p className="text-justify">
              I work with engineering teams and decision-makers to design
              systems that scale. Whether you&apos;re modernising a legacy
              codebase, migrating to the cloud, or decomposing a monolith into
              microservices, I bring battle-tested .NET and cloud-native
              patterns to reduce risk and accelerate delivery.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              {
                label: '.NET Core & C#',
                detail: 'Clean Architecture, CQRS, DDD',
              },
              {
                label: 'Microservices',
                detail: 'Service decomposition, message buses',
              },
              {
                label: 'Cloud Migration',
                detail: 'AWS & Azure — lift, shift, re-architect',
              },
              {
                label: 'Legacy Modernisation',
                detail: 'Incremental rewrites, strangler fig',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card p-5 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={14}
                    className="text-primary-500 shrink-0"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-heading font-semibold text-gray-900 dark:text-gray-100">
                    {item.label}
                  </p>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 pl-5 text-justify">
                  {item.detail}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link href="/contact" className="btn-primary">
              Start an enterprise engagement
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Full-Stack MVPs ────────────────────────────────────────────── */}
      <section
        id="project-planner"
        className="section bg-gray-50 dark:bg-black border-t border-gray-100 dark:border-gray-800"
      >
        <div className="container-content mx-auto">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800/50">
              <Rocket
                size={14}
                className="text-accent-600 dark:text-accent-400"
                aria-hidden="true"
              />

              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                Freelance / Startup
              </span>
            </div>

            <h2>Full-Stack MVPs &amp; Rapid Delivery</h2>

            <p className="text-justify">
              Got a product idea and a deadline? I specialise in taking
              startups and indie founders from zero to a live,
              production-grade web application — fast. Performant Next.js
              frontends, robust REST or GraphQL APIs, and CI/CD pipelines that
              ship on day one.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              {
                label: 'Next.js & React',
                detail: 'App Router, SSR/ISR, edge-ready',
              },
              {
                label: 'API Development',
                detail: 'REST, GraphQL, Node.js, .NET',
              },
              {
                label: 'Launch Speed',
                detail: 'MVP in weeks, not months',
              },
              {
                label: 'Frontend Polish',
                detail: 'Responsive, accessible, fast',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card p-5 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={14}
                    className="text-accent-500 shrink-0"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-heading font-semibold text-gray-900 dark:text-gray-100">
                    {item.label}
                  </p>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 pl-5 text-justify">
                  {item.detail}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link href="/contact" className="btn-primary">
              Plan my MVP
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Below-fold ────────────────────────────────────────────────── */}
      {/*
        Crawlable technology summary — rendered as static HTML for search
        engines and AI crawlers. Visually hidden from sighted users since the
        same information is presented interactively in TechTags and the /tech
        accordion page.
      */}
      <section
        aria-label="Technology expertise summary"
        className="sr-only"
      >
        <h2>Technical Skills — Milton Ngala, Senior Software Engineer</h2>

        <p className="text-justify">
          Milton Ngala is a Senior Software Engineer with deep expertise
          across enterprise backend and full-stack web development. His core
          technical skills include:
        </p>

        <ul>
          <li>
            Backend: .NET Core, C#, ASP.NET Core Web API, Entity Framework,
            Clean Architecture, Domain-Driven Design (DDD), CQRS
          </li>

          <li>
            Frontend: React, Next.js (App Router, SSR, ISR), TypeScript,
            Tailwind CSS, Framer Motion
          </li>

          <li>
            Databases: SQL Server, PostgreSQL, Redis, MongoDB
          </li>

          <li>
            Cloud &amp; DevOps: Azure (App Service, Functions, Storage, Azure
            SQL), Docker, GitHub Actions, CI/CD pipelines
          </li>

          <li>
            Architecture: Microservices, REST APIs, distributed systems,
            scalability planning, security by design
          </li>

          <li>
            Integrations: Stripe, M-Pesa, SignalR, WebSockets, third-party API
            integration
          </li>

          <li>
            Leadership: Technical leadership, code reviews, engineering
            mentorship, agile delivery
          </li>
        </ul>

        <p className="text-justify">
          He holds Microsoft certification in Azure Solutions Architecture and
          has experience shipping production systems in travel, health
          technology, interior design, and web application domains.
        </p>
      </section>

      <WorkSection />
      <ValueProposition />
      <About />
    </>
  );
};

export default Home;