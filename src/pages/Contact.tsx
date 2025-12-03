import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  Calendar, 
  Send,
  ExternalLink,
  Clock,
  CheckCircle
} from 'lucide-react';
import { WhatsAppOutlined, CoffeeOutlined } from '@ant-design/icons';


const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'Web Application'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to WhatsApp with pre-filled message
      const whatsappMessage = encodeURIComponent(
        `Hi Milton! I'm interested in discussing a ${formData.projectType} project.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
      );
      
      window.open(`https://wa.me/254741760092?text=${whatsappMessage}`, '_blank');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', projectType: 'Web Application' });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'milton.antony.ngala@gmail.com',
      action: () => window.open('mailto:milton.antony.ngala@gmail.com'),
      cta: 'Send Email',
      highlight: true

    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free 30-minute consultation',
      action: () => window.open('https://calendly.com/milton-antony-ngala', '_blank'),
      cta: 'Book Now'
    },
    {
      icon: WhatsAppOutlined,
      title: 'WhatsApp',
      description: 'Quick chat for immediate questions',
      action: () => window.open('https://wa.me/254741760092', '_blank'),
      cta: 'Chat Now'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+254 741 760 092',
      action: () => window.open('tel:+254741760092'),
      cta: 'Call Now'
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-4">
              Let's Build Something Exceptional
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Have a cool project, or need a second brain on a system design?
            </p>
            
            <motion.div
              className="inline-flex items-center bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Clock className="w-4 h-4 mr-2" />
              Currently accepting 3 new clients for {currentYear}
            </motion.div>
            <div className="w-16 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-8">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={method.title}
                    onClick={method.action}
                    className={`w-full p-6 rounded-xl transition-all duration-300 text-left group ${
                      method.highlight 
                        ? 'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 shadow-lg' 
                        : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`p-3 rounded-lg mr-4 ${
                          method.highlight 
                            ? 'bg-white/20' 
                            : 'bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50'
                        } transition-colors duration-300`}>
                          <method.icon className={`w-6 h-6 ${
                            method.highlight ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                          }`} />
                        </div>
                        <div>
                          <h4 className={`font-heading font-semibold mb-1 ${
                            method.highlight ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                          }`}>
                            {method.title}
                          </h4>
                          <p className={`text-sm ${
                            method.highlight ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {method.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium mr-2 ${
                          method.highlight ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                        }`}>
                          {method.cta}
                        </span>
                        <ExternalLink className={`w-4 h-4 ${
                          method.highlight ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                        } group-hover:translate-x-1 transition-transform duration-300`} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Fun Note */}
              <motion.div
                className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-start">
                  <CoffeeOutlined className="w-6 h-6 text-accent-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Coffee Chat?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I typically respond within 2-4 hours during business hours (GMT+3). 
                      Always happy to discuss interesting projects over coffee!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-6">
                Start a Project
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-green-700 dark:text-green-400">
                    Message sent! Redirecting to WhatsApp...
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    placeholder="your.email@company.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="projectType" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                  >
                    <option value="Web Application">Web Application</option>
                    <option value="API Development">API Development</option>
                    <option value="System Architecture">System Architecture</option>
                    <option value="Technical Consultation">Technical Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-heading font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 text-center">
                You'll be redirected to WhatsApp for instant communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;