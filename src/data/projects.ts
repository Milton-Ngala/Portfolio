import { TrendingUp, Users, Calendar } from 'lucide-react';
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
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  link: string;
  livePreview: boolean;
  metrics?: Metric[];
  challenge?: string;
  outcome?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Makio Tours And Travel',
    industry: 'Tours and Travel',
    year: '2025',
    problem: 'Manual booking workflows caused lost revenue.',
    solution: 'Built a real-time booking and payment platform.',
    impact: '180% conversion uplift.',
    tech: ['React', 'Node.js', 'Stripe'],
    link: 'https://makiotours.com',
    livePreview: true,
    metrics: [
      { icon: Calendar, label: 'Response Time', value: '15 min' },
      { icon: TrendingUp, label: 'Conversion Increase', value: '180%' },
      { icon: Users, label: 'Bookings Processed', value: '1,200+' },
    ],
    challenge: 'Manual booking took 48 hours causing lost revenue and customer frustration.',
    outcome: [
      'Reduced booking turnaround to 15 minutes',
      'Increased conversion by 180%',
      'Improved customer experience',
    ],
  },
  {
    id: 2,
    title: 'Hospitalini',
    industry: 'Health Technology',
    year: '2024',
    problem: 'Excessive patient wait times.',
    solution: 'Real-time queue system with SignalR.',
    impact: '40% wait time reduction.',
    tech: ['.NET', 'SignalR', 'React'],
    link: 'https://hospitalini.netlify.app',
    livePreview: true,
    metrics: [
      { icon: Calendar, label: 'Wait Time Reduction', value: '40%' },
      { icon: Users, label: 'Patients Served', value: '2,500+' },
      { icon: TrendingUp, label: 'Satisfaction Increase', value: '65%' },
    ],
    challenge: 'Patients were waiting 4+ hours causing frustration and inefficiency.',
    outcome: [
      'Reduced wait times by 40%',
      'Improved satisfaction by 65%',
      'Streamlined clinic operations',
    ],
  },
  {
    id: 3,
    title: 'Rex Otieno Portfolio',
    industry: 'GIS & Research',
    year: '2025',
    problem: 'Slow, data-heavy pages.',
    solution: 'Next.js ISR optimization.',
    impact: '85% faster load times.',
    tech: ['Next.js', 'Sanity'],
    link: 'https://rexotieno.netlify.app',
    livePreview: true,
    metrics: [
      { icon: TrendingUp, label: 'Load Speed Improvement', value: '85%' },
      { icon: Users, label: 'Inquiry Increase', value: '70%' },
      { icon: Calendar, label: 'Time to Interactive', value: '1.2s' },
    ],
    challenge: 'Portfolio pages were slow to load, losing potential clients.',
    outcome: [
      '85% faster load times',
      '70% increase in inquiries',
      'Improved client experience',
    ],
  },
  {
    id: 4,
    title: 'Sharon Auma',
    industry: 'Interior Design',
    year: '2025',
    problem: 'No digital presence.',
    solution: 'Modern portfolio site.',
    impact: 'Improved brand credibility.',
    tech: ['Next.js', 'Tailwind'],
    link: 'https://sharonkubasu.netlify.app',
    livePreview: true,
    metrics: [
      { icon: Users, label: 'Client Inquiries', value: '↑ Increased' },
      { icon: TrendingUp, label: 'Brand Visibility', value: 'Improved' },
      { icon: Calendar, label: 'Time to Launch', value: '2 weeks' },
    ],
    challenge: 'Lack of professional online presence limited client acquisition.',
    outcome: [
      'Improved visibility',
      'Increased qualified leads',
      'Better project presentation',
    ],
  },
];

export default projects;
