import { TrendingUp, Users, Clock } from 'lucide-react';
import type { ElementType } from 'react';

export type Metric = {
  icon: ElementType;
  label: string;
  value: string;
};

export type Project = {
  id: number;
  title: string;
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
  challenge?: string;
  outcome?: string[];
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
  },
  {
    id: 2,
    title: 'Hospitalini',
    industry: 'Health Technology',
    year: '2024',
    role: 'Solutions Architect & Lead Developer',
    problem: 'Excessive patient wait times degrading care quality.',
    solution: 'Real-time queue management system with SignalR.',
    impact: '40% wait time reduction.',
    tech: ['.NET Core', 'SignalR', 'React', 'SQL Server'],
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
  },
];

export default projects;
