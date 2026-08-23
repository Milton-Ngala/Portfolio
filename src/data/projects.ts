import { TrendingUp, Users, Clock, Globe, Zap, BarChart3 } from 'lucide-react';
import type { ElementType } from 'react';

export type Metric = {
  icon: ElementType;
  label: string;
  value: string;
};

/**
 * Three-part narrative schema for case studies.
 * Each field maps to a distinct audience segment in the expanded card view.
 */
export type CaseStudyNarrative = {
  /** Quantified business outcome — relevant to corporate/executive readers */
  businessImpact: string;
  /** Technical depth: architecture decisions, patterns, infra choices */
  architecturalDeepDive: string;
  /** Frontend/UX execution: rendering strategy, styling, performance */
  frontendExecution: string;
};

export type Project = {
  id: number;
  title: string;
  subtitle?: string;
  industry: string;
  year: string;
  role: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  link: string;
  github?: string;
  metrics?: Metric[];
  /** Legacy flat fields — kept for backwards compat with Work.tsx */
  challenge?: string;
  outcome?: string[];
  /** Structured three-part narrative for expanded case study panels */
  narrative?: CaseStudyNarrative;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Makio Tours & Travel',
    industry: 'Travel & Hospitality',
    year: '2025',
    role: 'Lead Full-Stack Developer',
    problem: 'Manual booking workflows caused lost revenue.',
    solution: 'Built a real-time booking and payment platform.',
    impact: '180% conversion uplift.',
    tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    link: 'https://makiotours.com',
    metrics: [
      { icon: Clock, label: 'Booking Time', value: '15 min' },
      { icon: TrendingUp, label: 'Conversion', value: '+180%' },
      { icon: Users, label: 'Bookings', value: '1,200+' },
    ],
    challenge: 'Manual booking took 48 hours, causing lost revenue and customer frustration.',
    outcome: [
      'Reduced booking turnaround from 48h to 15 minutes',
      'Increased conversion rate by 180%',
      'Processed 1,200+ bookings in first quarter',
    ],
    narrative: {
      businessImpact:
        'Eliminated a 48-hour manual booking cycle, cutting operational overhead and recovering lost revenue from abandoned enquiries. Conversion rate climbed 180% within the first quarter, with 1,200+ confirmed bookings processed through the platform.',
      architecturalDeepDive:
        'REST API built with Node.js and Express, backed by a PostgreSQL database with transactional integrity for booking state management. Stripe webhooks handle asynchronous payment confirmation, decoupling payment processing from the booking flow to prevent double-booking under concurrent load.',
      frontendExecution:
        'React SPA with optimistic UI updates so users see instant booking confirmation feedback before the server round-trip completes. Mobile-first responsive layouts built with Tailwind CSS ensure a frictionless experience across all devices.',
    },
  },
  {
    id: 2,
    title: 'Hospitalini',
    subtitle: 'Hospital Wait-Time Optimization Platform',
    industry: 'Health Technology',
    year: '2024',
    role: 'Solutions Architect & Lead Developer',
    problem: 'Excessive patient wait times degrading care quality.',
    solution: 'Real-time queue management system with SignalR.',
    impact: '40% wait time reduction.',
    tech: ['.NET Core', 'SignalR', 'React', 'SQL Server', 'Clean Architecture', 'Microservices'],
    link: 'https://hospitalini.netlify.app',
    metrics: [
      { icon: TrendingUp, label: 'Wait Time Cut', value: '40%' },
      { icon: Users, label: 'Patients Served', value: '2,500+' },
      { icon: Clock, label: 'Avg Wait', value: '< 45 min' },
    ],
    challenge: 'Patients were waiting 4+ hours with no visibility into queue status.',
    outcome: [
      'Reduced average wait time by 40%',
      'Real-time queue visibility for patients and staff',
      'Served 2,500+ patients across pilot clinics',
    ],
    narrative: {
      businessImpact:
        'Cut average patient wait time by 40%, from 4+ hours down to under 45 minutes across pilot clinics. Improved patient satisfaction scores and freed clinical staff from manual queue management, allowing reallocation to direct care. Served 2,500+ patients during the pilot phase with zero reported data incidents.',
      architecturalDeepDive:
        'Designed a .NET Core microservices architecture following Clean Architecture and Domain-Driven Design (DDD) principles. The queue management domain is isolated as a bounded context with its own SQL Server database. SignalR hubs push real-time queue state updates to connected clients without polling. A dedicated notification microservice handles SMS and in-app alerts, communicating over an internal message bus to maintain loose coupling. Docker containers ensure environment parity from development through to production deployment.',
      frontendExecution:
        'React front-end consumes the SignalR hub via a persistent WebSocket connection, reflecting live queue changes with zero page refresh. Role-based views (patient-facing display vs. staff dashboard) rendered from shared component primitives with Tailwind CSS utility classes for consistent styling across both surfaces.',
    },
  },
  {
    id: 3,
    title: 'Rex Otieno Portfolio',
    industry: 'GIS & Research',
    year: '2025',
    role: 'Full-Stack Developer',
    problem: 'Slow, data-heavy pages losing potential clients.',
    solution: 'Next.js ISR with optimised data fetching and CDN.',
    impact: '85% faster load times.',
    tech: ['Next.js', 'Sanity CMS', 'TypeScript', 'Vercel'],
    link: 'https://rexotieno.netlify.app',
    metrics: [
      { icon: TrendingUp, label: 'Speed Gain', value: '85%' },
      { icon: Users, label: 'Inquiry Increase', value: '+70%' },
      { icon: Clock, label: 'Time to Interactive', value: '1.2s' },
    ],
    challenge: 'Data-heavy GIS portfolio pages had 8s+ load times, losing visitors.',
    outcome: [
      '85% faster load times via ISR and CDN optimisation',
      '70% increase in client enquiries',
      'Time to interactive reduced to 1.2s',
    ],
    narrative: {
      businessImpact:
        'Transformed an 8-second page load into a 1.2s interactive experience, reducing bounce rate and driving a 70% increase in client enquiries within the first month of launch.',
      architecturalDeepDive:
        'Adopted Next.js Incremental Static Regeneration (ISR) so GIS project pages are pre-rendered at build time and revalidated on a background schedule, eliminating runtime database calls on the critical path. Sanity CMS provides a structured content layer with typed GROQ queries, preventing schema drift.',
      frontendExecution:
        'TypeScript across all components provides end-to-end type safety from CMS schema to rendered UI. Images are served through Next.js Image Optimization with responsive srcsets and AVIF/WebP format negotiation. Deployed to Netlify CDN edge nodes for low-latency global delivery.',
    },
  },
  {
    id: 4,
    title: 'Sharon Kubasu Portfolio',
    industry: 'Interior Design',
    year: '2025',
    role: 'Frontend Developer',
    problem: 'No digital presence limiting client acquisition.',
    solution: 'Modern, image-led portfolio with contact integration.',
    impact: 'Launched in 2 weeks, immediate client enquiries.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://sharonkubasu.netlify.app',
    metrics: [
      { icon: Users, label: 'Client Enquiries', value: '↑ 3×' },
      { icon: TrendingUp, label: 'Brand Visibility', value: 'Established' },
      { icon: Clock, label: 'Time to Launch', value: '2 weeks' },
    ],
    challenge: 'No online presence meant relying entirely on word-of-mouth referrals.',
    outcome: [
      'Professional online presence launched in 2 weeks',
      'Tripled inbound client enquiries within first month',
      'Improved project presentation and credibility',
    ],
    narrative: {
      businessImpact:
        'Established a professional digital presence from scratch in two weeks, tripling inbound client enquiries within the first month and creating a scalable channel for ongoing lead generation independent of referrals.',
      architecturalDeepDive:
        'Static site generation via Next.js with no server-side runtime, keeping hosting costs near-zero and ensuring 100% uptime. Contact form routes through a lightweight API handler with email delivery via Resend, removing any third-party form service dependency.',
      frontendExecution:
        'Image-led layout with Next.js Image Optimization for lazy loading and format conversion. Framer Motion orchestrates entrance animations and smooth page transitions that reflect the premium brand positioning. Tailwind CSS utility classes maintain visual consistency without a bespoke design system overhead.',
    },
  },
  {
    id: 5,
    title: 'Saraka Web Application',
    subtitle: 'Responsive Front-End Architecture & Continuous Delivery Deployment',
    industry: 'Web Application',
    year: '2025',
    role: 'Full-Stack Developer',
    problem: 'Product design specs needed conversion into a fluid, performant web application.',
    solution:
      'Converted design specs into a fully responsive app using a high-performance static rendering pipeline and global CDN deployment via Netlify.',
    impact: 'Sub-second load times across global CDN edge nodes with clean utility-first styling.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify', 'CI/CD', 'REST APIs'],
    link: 'https://saraka.netlify.app',
    metrics: [
      { icon: Zap, label: 'Load Time', value: '< 1s' },
      { icon: Globe, label: 'CDN Coverage', value: 'Global' },
      { icon: BarChart3, label: 'Lighthouse Score', value: '95+' },
    ],
    challenge:
      'The client required rapid translation of product design specs into a production-ready web application with consistent performance across devices and geographies.',
    outcome: [
      'Delivered production-ready app from design specs with zero layout regressions',
      'Sub-second load times via Netlify global CDN edge network',
      'Lighthouse performance score of 95+ across mobile and desktop',
      'Automated Netlify CI/CD pipeline with branch previews for iterative delivery',
    ],
    narrative: {
      businessImpact:
        'Delivered a production-ready web application directly from product design specs with no layout regressions, enabling the client to go live rapidly and iterate confidently. Automated branch preview deployments on Netlify reduced QA turnaround by providing instant shareable previews for each pull request, cutting the feedback loop with stakeholders.',
      architecturalDeepDive:
        'Architected as a statically rendered React application with TypeScript enforcing strict component contract boundaries. REST API integration is handled through a typed service layer that decouples data fetching from presentation components, making the data layer swappable without UI changes. The Netlify CI/CD pipeline triggers builds on every push, runs lint and type checks as build gates, and deploys to the global edge network on success — providing continuous delivery with rollback safety.',
      frontendExecution:
        'Converted product design specs pixel-accurately into responsive layouts using Tailwind CSS utility classes, ensuring visual fidelity across mobile, tablet, and desktop breakpoints without custom CSS overhead. Static rendering via Netlify\'s build pipeline pre-generates all pages at deploy time, achieving sub-second Time to Interactive across global CDN edge nodes. Lighthouse audit scores of 95+ confirm strong Core Web Vitals performance, accessibility compliance, and SEO readiness.',
    },
  },
];

export default projects;
