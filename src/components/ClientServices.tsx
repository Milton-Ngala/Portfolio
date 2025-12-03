import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Laptop, 
  Server, 
  Shield, 
  Zap, 
  Heart, 
  Plane, 
  DollarSign, 
  Map,
  ArrowRight
} from 'lucide-react';

const ClientServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      icon: Laptop,
      title: 'Custom Web Applications',
      description: 'Full-stack web applications built with modern frameworks, optimized for performance and scalability.',
      features: ['React/Next.js Frontend', 'RESTful APIs', 'Real-time Features', 'Progressive Web Apps'],
      timeline: '4-12 weeks',
      startingPrice: '$5,000'
    },
    {
      icon: Server,
      title: 'Scalable API Development',
      description: 'Robust backend systems and microservices architecture designed to handle enterprise-level traffic.',
      features: ['.NET Core APIs', 'Microservices', 'Database Design', 'Third-party Integrations'],
      timeline: '3-8 weeks',
      startingPrice: '$3,500'
    },
    {
      icon: Shield,
      title: 'DevOps & Deployment',
      description: 'Complete CI/CD pipelines, cloud deployment, and infrastructure management for reliable operations.',
      features: ['Azure/AWS Setup', 'CI/CD Pipelines', 'Docker Containers', 'Monitoring & Scaling'],
      timeline: '2-6 weeks',
      startingPrice: '$2,500'
    },
  ];

  const industries = [
    {
      icon: Heart,
      name: 'HealthTech',
      description: 'HIPAA-compliant solutions for healthcare providers and medical technology companies.',
      projects: '4+ projects delivered'
    },
    {
      icon: Plane,
      name: 'TravelTech',
      description: 'Booking platforms, travel management systems, and customer experience solutions.',
      projects: '3+ projects delivered'
    },
    {
      icon: DollarSign,
      name: 'FinTech',
      description: 'Secure financial applications, payment processing, and analytics platforms.',
      projects: '2+ projects delivered'
    },
    {
      icon: Map,
      name: 'GIS Systems',
      description: 'Geospatial data visualization, mapping solutions, and location-based services.',
      projects: '3+ projects delivered'
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
            Solutions & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development services tailored for growing businesses and enterprise clients
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-primary-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-semibold text-gray-900">{service.timeline}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="font-bold text-primary-600 text-lg">{service.startingPrice}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Focus */}
        <motion.div
          className="bg-primary-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">
              Industry Expertise
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Specialized experience across high-growth sectors with unique technical requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-heading font-bold text-gray-900 mb-2">
                  {industry.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {industry.description}
                </p>
                <p className="text-primary-600 font-semibold text-sm">
                  {industry.projects}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-primary-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 18, 51, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Custom Quote
              <ArrowRight size={20} />
            </motion.button>
            <p className="text-gray-600 mt-4 text-sm">
              Free consultation • Custom pricing • No long-term contracts
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientServices;