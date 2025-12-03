import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Users, TrendingUp } from 'lucide-react';

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      title: 'MedQueue',
      industry: 'HealthTech',
      year: '2023',
      problem: '4-hour patient wait times at clinics were causing frustration and inefficiency.',
      solution: 'I built a real-time queue system using .NET + SignalR, complete with SMS notifications and a patient portal.',
      impact: 'Reduced wait times by 40% across 5 facilities, improving patient satisfaction scores by 65%.',
      tech: ['.NET Core', 'SignalR', 'React', 'SQL Server', 'Twilio'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: [
        { icon: Calendar, label: 'Wait Time Reduction', value: '40%' },
        { icon: Users, label: 'Patients Served', value: '2,500+' },
        { icon: TrendingUp, label: 'Satisfaction Increase', value: '65%' }
      ]
    },
    {
      id: 2,
      title: 'MakioTours',
      industry: 'Travel',
      year: '2024',
      problem: 'Manual booking process took 48 hours, causing lost customers and revenue.',
      solution: 'I developed a full reservation and booking platform in React + Node.js, with Stripe integration and automated confirmations.',
      impact: 'Booking response time dropped from 48 hours to under 15 minutes, increasing conversion by 180%.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'SendGrid'],
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: [
        { icon: Calendar, label: 'Response Time', value: '15 min' },
        { icon: TrendingUp, label: 'Conversion Increase', value: '180%' },
        { icon: Users, label: 'Bookings Processed', value: '1,200+' }
      ]
    },
    {
      id: 3,
      title: 'Rex Otieno Portfolio',
      industry: 'GIS/Research',
      year: '2024',
      problem: 'Data-heavy research portfolio was slow to load, losing potential client inquiries.',
      solution: 'Optimized using Next.js ISR, Tailwind, and Sanity CMS with image optimization and lazy loading.',
      impact: '70% increase in client inquiries and 85% improvement in page load speeds.',
      tech: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: [
        { icon: TrendingUp, label: 'Load Speed Improvement', value: '85%' },
        { icon: Users, label: 'Inquiry Increase', value: '70%' },
        { icon: Calendar, label: 'Time to Interactive', value: '1.2s' }
      ]
    }
  ];

  const toggleProject = (projectId: number) => {
    setExpandedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real problems, real results
          </p>
          <div className="w-16 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-2xl font-heading font-bold text-gray-900">
                          {project.title}
                        </h3>
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          {project.industry}
                        </span>
                      </div>
                      <span className="text-gray-500 font-mono text-sm">{project.year}</span>
                    </div>

                    {/* Problem */}
                    <div className="mb-4">
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">
                        Problem
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4">
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-primary-600 mb-2">
                        Impact
                      </h4>
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {project.impact}
                      </p>
                    </div>

                    {/* Metrics */}
                    <AnimatePresence>
                      {expandedProjects.includes(project.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6"
                        >
                          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                            {project.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="text-center">
                                <metric.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <motion.button
                      onClick={() => toggleProject(project.id)}
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      {expandedProjects.includes(project.id) ? 'Show Less' : 'View Details'}
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">
            Want to see more projects or discuss a custom solution?
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary-700 transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;