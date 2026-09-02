/**
 * /work — Case Studies page.
 *
 * Metadata is exported from this server-component wrapper.
 * The interactive accordion client logic lives in WorkPageClient below
 * (marked 'use client') so the page keeps its metadata export at the
 * server level.
 */
import type { Metadata } from 'next';
import WorkPageClient from '@/components/WorkPageClient';

export const metadata: Metadata = {
  title: 'Case Studies & Projects',
  description:
    'Selected case studies by Milton Ngala — production systems built with .NET, React, Next.js, and Azure. Real problems, measurable outcomes.',
  alternates: { canonical: 'https://ngala.co.ke/work' },
  openGraph: {
    title: 'Case Studies & Projects | Milton Ngala',
    description:
      'Production systems built to solve real business problems — booking platforms, hospital queue management, and performance-optimised portfolios.',
    url: 'https://ngala.co.ke/work',
  },
};

const WorkPage = () => (
  <div className="pt-16">
    <WorkPageClient />
  </div>
);

export default WorkPage;
