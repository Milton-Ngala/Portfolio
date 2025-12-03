import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'HealthCare Management System',
      category: 'HealthTech',
      year: '2024',
      role: 'Lead Full-Stack Developer',
      tech: ['React', 'Next.js', '.NET Core', 'PostgreSQL', 'Azure'],
      image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Complex patient data management with HIPAA compliance requirements and real-time updates across multiple departments.',
      solution: 'Built a secure, scalable system with role-based access control, real-time notifications, and comprehensive audit trails.',
      result: '40% reduction in administrative time, 99.9% uptime, and full HIPAA compliance certification.',
      features: ['Real-time patient monitoring', 'Automated scheduling', 'Secure messaging', 'Analytics dashboard'],
      testimonial: 'Milton delivered an exceptional solution that transformed our operations.',
      client: 'MedTech Solutions'
    },
    {
      id: 2,
      title: 'Travel Booking Platform',
      category: 'TravelTech',
      year: '2023',
      role: 'Solutions Architect',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Handle high-volume bookings with complex pricing logic and real-time availability updates.',
      solution: 'Implemented microservices architecture with caching layers and optimized database queries.',
      result: '60% faster load times, 300% increase in concurrent users, $2M+ in processed bookings.',
      features: ['Dynamic pricing', 'Real-time availability', 'Multi-currency support', 'Mobile-responsive'],
      testimonial: 'The platform exceeded our expectations in performance and user experience.',
      client: 'TravelCorp International'
    },
    {
      id: 3,
      title: 'GIS Mapping Dashboard',
      category: 'GIS',
      year: '2023',
      role: 'Full-Stack Developer',
      tech: ['React', 'D3.js', 'Python', 'PostGIS', 'Docker'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Visualize complex geospatial data with interactive mapping and real-time data processing.',
      solution: 'Created custom visualization components with optimized rendering for large datasets.',
      result: '90% faster data visualization, support for 1M+ data points, improved decision-making speed.',
      features: ['Interactive maps', 'Data filtering', 'Export capabilities', 'Custom overlays'],
      testimonial: 'Milton created a powerful tool that revolutionized our data analysis.',
      client: 'GeoAnalytics Pro'
    },
    {
      id: 4,
      title: 'E-commerce Analytics Suite',
      category: 'FinTech',
      year: '2024',
      role: 'Technical Lead',
      tech: ['Vue.js', '.NET Core', 'Redis', 'PostgreSQL', 'Azure'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Process millions of transactions daily with real-time analytics and fraud detection.',
      solution: 'Built a high-performance system with machine learning integration and automated alerts.',
      result: '50% reduction in processing time, 99.5% fraud detection accuracy, $5M+ transactions processed.',
      features: ['Real-time analytics', 'Fraud detection', 'Custom reports', 'API integrations'],
      testimonial: 'The system has become essential to our business operations.',
      client: 'RetailTech Solutions'
    }
  ];

  const categories = ['All', 'HealthTech', 'TravelTech', 'GIS', 'FinTech'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
            Featured Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing successful digital solutions across healthcare, travel, finance, and GIS industries
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      className="text-white text-center"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-lg font-semibold mb-2">View Case Study</p>
                      <div className="flex justify-center gap-4">
                        <ExternalLink size={20} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {project.role}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                              {project.title}
                            </h2>
                            <p className="text-lg text-gray-600">
                              {project.role} • {project.year}
                            </p>
                          </div>
                          <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
                            {project.category}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                              Challenge
                            </h3>
                            <p className="text-gray-600 mb-6">
                              {project.challenge}
                            </p>

                            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                              Solution
                            </h3>
                            <p className="text-gray-600">
                              {project.solution}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                              Results
                            </h3>
                            <p className="text-gray-600 mb-6">
                              {project.result}
                            </p>

                            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                              Key Features
                            </h3>
                            <ul className="space-y-2">
                              {project.features.map((feature) => (
                                <li key={feature} className="flex items-center text-gray-600">
                                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                          <blockquote className="text-lg italic text-gray-700 mb-3">
                            "{project.testimonial}"
                          </blockquote>
                          <p className="text-gray-600 font-semibold">
                            — {project.client}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">
                            Technology Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;