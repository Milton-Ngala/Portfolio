import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, MapPin, Mail } from 'lucide-react';
import Link from "next/link";


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
    <section id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Content */}
          <div className="prose prose-lg max-w-none bg-primary-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
            <motion.p
              className="text-xl text-gray-800 dark:text-gray-100 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I've worked with startups and regional governments to design digital solutions
              that make a measurable impact from helping clinics cut wait times to mapping
              100,000 homes for utility access.
            </motion.p>

            <motion.p
              className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My approach combines technical depth with practical problem-solving. I believe
              the best software doesn't just work, it makes people's lives easier and
              businesses more efficient.
            </motion.p>

            <motion.p
              className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-6"
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
                                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                                <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    Microsoft Certified
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-200">
                                    Azure Solutions Architect Expert
                                </p>
                            </motion.div>

                            <motion.div
                                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                                <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    Based in Nairobi
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Working with global clients
                                </p>
                            </motion.div>

                            <motion.div
                                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                                <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    Always Learning
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
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
            <Link href="/contact">
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Get in touch →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;