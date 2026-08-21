export interface Service {
  name: string;
  href: string;
  description?: string;
}

const services: Service[] = [
  { name: 'Web & Software Development', href: '/services', description: 'Full-stack web applications built for scale and performance.' },
  { name: 'API & Backend Development', href: '/services', description: 'Robust REST and real-time APIs with .NET Core and Node.js.' },
  { name: 'Cloud & Deployment', href: '/services', description: 'Azure infrastructure, CI/CD pipelines, and Cloudflare edge deployments.' },
  { name: 'System Architecture', href: '/services', description: 'Clean Architecture, CQRS, and scalability planning for complex systems.' },
  { name: 'Technical Consultation', href: '/services', description: 'Architecture reviews, tech stack decisions, and engineering strategy.' },
  { name: 'E-commerce Solutions', href: '/services', description: 'Payment integrations, booking platforms, and conversion optimisation.' },
  { name: 'Maintenance & Support', href: '/services', description: 'Ongoing support, performance monitoring, and iterative improvements.' },
  { name: 'Other', href: '/contact', description: 'Have something else in mind? Let\'s talk.' },
];

export default services;
