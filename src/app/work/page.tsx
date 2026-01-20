'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';


type Metric = {
    icon: any;
    label: string;
    value: string;
};

type Project = {
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
            { icon: Users, label: 'Bookings Processed', value: '1,200+' }
        ],
        challenge: 'Manual booking took 48 hours causing lost revenue and customer frustration.',
        outcome: ['Reduced booking turnaround to 15 minutes', 'Increased conversion by 180%', 'Improved customer experience']
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
            { icon: TrendingUp, label: 'Satisfaction Increase', value: '65%' }
        ],
        challenge: 'Patients were waiting 4+ hours causing frustration and inefficiency.',
        outcome: ['Reduced wait times by 40%', 'Improved satisfaction by 65%', 'Streamlined clinic operations']
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
            { icon: Calendar, label: 'Time to Interactive', value: '1.2s' }
        ],
        challenge: 'Portfolio pages were slow to load, losing potential clients.',
        outcome: ['85% faster load times', '70% increase in inquiries', 'Improved client experience']
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
            { icon: Calendar, label: 'Time to Launch', value: '2 weeks' }
        ],
        challenge: 'Lack of professional online presence limited client acquisition.',
        outcome: ['Improved visibility', 'Increased qualified leads', 'Better project presentation']
    }
];

const LivePreview = ({ url }: { url: string }) => (
    <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 h-[260px] hover:scale-[1.048] transition-all duration-300">
        <iframe
            src={url}
            title={url}
            className="absolute top-0 left-0 w-full h-full scale-[1] origin-top-left pointer-events-none"
            sandbox="allow-same-origin allow-scripts"
            loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
            aria-label="Open live site"
        />
    </div>
);

const Work = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
      });

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Case Studies</h1>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Production systems built to solve real business problems and deliver measurable results.
                        </p>
                    </header>
                </motion.div>
                {/* Projects */}
                <div className="space-y-12">
                    {projects.map((project) => (
                        <motion.div key={project.id} layout className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                                {/* Live Preview */}
                                <LivePreview url={project.link} />

                                {/* Project Content */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-2xl font-bold">{project.title}</h3>
                                            <span className="text-sm text-gray-500">{project.year}</span>
                                        </div>
                                        <p className="text-sm text-primary-600 mb-2">{project.industry}</p>

                                        {/* Metrics */}
                                        <div className="flex gap-4 mb-4">
                                            {project.metrics?.map((m) => (
                                                <div key={m.label} className="flex items-center gap-2 text-sm">
                                                    <m.icon className="w-4 h-4 text-primary-500" />
                                                    <span className="font-semibold">{m.value}</span>
                                                    <span className="text-gray-500">{m.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-mono">{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex justify-between items-center mt-6">
                                        <button
                                            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                                            className="text-primary-600 font-medium flex items-center gap-2"
                                        >
                                            {expandedId === project.id ? 'Hide Case Study' : 'View Case Study'}
                                            <ArrowRight size={16} />
                                        </button>

                                        <Link href={project.link} target="_blank" className="text-primary-600 font-medium">
                                            Visit Site →
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Case Study */}
                            <AnimatePresence>
                                {expandedId === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-8 pb-8"
                                    >
                                        <div className="grid md:grid-cols-3 gap-6 text-sm">
                                            <div>
                                                <h4 className="font-semibold mb-2">Challenge</h4>
                                                <p className="text-gray-600 dark:text-gray-400">{project.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Solution</h4>
                                                <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Outcome</h4>
                                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                                    {project.outcome?.map((o, i) => (
                                                        <li key={i}>{o}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Have a similar challenge?</p>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold">
                            Let’s Build Something That Works
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Work;
