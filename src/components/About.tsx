import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, MapPin, Mail } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-4">
              A bit about me
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <motion.p
              className="text-xl text-gray-900 dark:text-gray-100 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I've worked with startups and regional governments to design digital solutions 
              that make a measurable impact — whether it's helping clinics cut wait times or 
              mapping 100,000 homes for utility access.
            </motion.p>

            <motion.p
              className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My approach combines technical depth with practical problem-solving. I believe 
              the best software doesn't just work — it makes people's lives easier and 
              businesses more efficient.
            </motion.p>

            <motion.p
              className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              When I'm not coding, you'll find me exploring Nairobi's tech scene, 
              contributing to open source projects, or mentoring junior developers.
            </motion.p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Microsoft Certified
              </h3>
              <p className="text-sm text-gray-600">
                Azure Solutions Architect Expert
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Based in Nairobi
              </h3>
              <p className="text-sm text-gray-600">
                Working with global clients
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Always Learning
              </h3>
              <p className="text-sm text-gray-600">
                Staying current with tech trends
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Get in touch →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;