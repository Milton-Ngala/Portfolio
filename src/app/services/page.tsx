'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Code2, Server, Cloud, Layers, MessageSquare, ShoppingCart, Wrench } from 'lucide-react';
import Link from 'next/link';

const serviceDetails = [
  {
    icon: Code2,
    name: 'Web & Software Development',
    description: 'Full-stack web applications built for scale, performance, and long-term maintainability. From greenfield builds to legacy modernisation.',
    deliverables: ['React / Next.js frontends', 'REST & GraphQL APIs', 'Database design & optimisation', 'Progressive Web Apps'],
    timeline: '4–12 weeks',
  },
  {
    icon: Server,
    name: 'API & Backend Development',
    description: 'Robust, secure backend systems using .NET Core and Node.js. Clean Architecture, proper error handling, and production-grade reliability.',
    deliverables: ['.NET Core Web APIs', 'Real-time systems (SignalR)', 'Third-party integrations', 'Authentication & RBAC'],
    timeline: '3–8 weeks',
  },
  {
    icon: Cloud,
    name: 'Cloud & Deployment',
    description: 'Azure infrastructure setup, CI/CD pipelines, and Cloudflare edge deployments. Your app ships reliably and scales without surprises.',
    deliverables: ['Azure App Service & Functions', 'GitHub Actions CI/CD', 'Docker containerisation', 'Monitoring & alerting'],
    timeline: '2–6 weeks',
  },
  {
    icon: Layers,
    name: 'System Architecture',
    description: 'Architecture reviews and design for complex systems. Clean Architecture, CQRS, trade-off analysis, and documentation that teams can actually use.',
    deliverables: ['Architecture diagrams', 'ADRs & technical docs', 'Scalability planning', 'Security by design'],
    timeline: '1–3 weeks',
  },
  {
    icon: MessageSquare,
    name: 'Technical Consultation',
    description: 'One-off or ongoing advisory. Tech stack decisions, code reviews, engineering process improvements, and mentorship for your team.',
    deliverables: ['Architecture review', 'Tech stack recommendations', 'Code quality audit', 'Team mentorship'],
    timeline: 'Flexible',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce Solutions',
    description: 'Booking platforms, payment integrations (Stripe, M-Pesa), and conversion-focused storefronts that turn visitors into customers.',
    deliverables: ['Payment gateway integration', 'Booking & reservation systems', 'Inventory management', 'Analytics & reporting'],
    timeline: '4–10 weeks',
  },
  {
    icon: Wrench,
    name: 'Maintenance & Support',
    description: 'Ongoing support for production systems. Performance monitoring, bug fixes, dependency updates, and iterative feature improvements.',
    deliverables: ['Performance monitoring', 'Bug fixes & patches', 'Dependency updates', 'Feature iterations'],
    timeline: 'Monthly retainer',
  },
];

const ServiceCard = ({ service, index }: { service: typeof serviceDetails[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="card-elevated p-7 flex flex-col group hover:shadow-card-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors duration-300">
        <service.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-base font-heading font-bold text-gray-900 dark:text-gray-100 mb-2">
        {service.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
        {service.description}
      </p>
      <ul className="space-y-1.5 mb-5">
        {service.deliverables.map((d) => (
          <li key={d} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <span className="w-1 h-1 rounded-full bg-primary-500 shrink-0" />
            {d}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{service.timeline}</span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Get a quote <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-16">
      <section className="py-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="container-wide mx-auto px-6">
          <motion.div
            ref={ref}
            className="section-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1>Services</h1>
            <p>
              End-to-end software engineering — from architecture and development to deployment and ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceDetails.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="card-elevated p-10 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-h3 mb-3">Not sure what you need?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Book a free 30-minute discovery call. We'll talk through your goals and I'll tell you honestly what makes sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start a project
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
              <motion.button
                onClick={() => window.open('https://calendly.com/milton-antony-ngala', '_blank')}
                className="btn-ghost"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a free call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
