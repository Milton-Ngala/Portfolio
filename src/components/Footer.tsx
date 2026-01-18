'use client';

import Link from 'next/link';
import { motion, MotionValue } from 'framer-motion';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppOutlined, GithubOutlined } from '@ant-design/icons';
import { services } from '../components/common/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open('https://wa.me/254741760092', '_blank');
  };

  const socialLinks = [
    {
      icon: GithubOutlined,
      href: 'https://github.com/milton-ngala',
      label: 'GitHub',
      hover: 'GitHub Me',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/milton-antony-ngala',
      label: 'LinkedIn',
      hover: 'primary-600',
    },
    {
      icon: Mail,
      href: 'mailto:milton.antony.ngala@gmail.com',
      label: 'Email',
      hover: 'Email Me',
    },
    {
      icon: WhatsAppOutlined,
      href: 'https://wa.me/254741760092',
      label: 'WhatsApp',
      hover: 'bg-green-600',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Tech', href: '/tech' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient to match header */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500" />

      <div className="relative container mx-auto px-6 py-16 text-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-mono font-semibold text-xl bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Milton Antony Ngala
              </span>
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Software Engineer<br />
              Always open to interesting conversations and new opportunities.
              Solving real world problems with code.
            </motion.p>
            <motion.div
              className="flex space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 group shadow-sm dark:shadow-none`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-lg font-heading font-semibold mb-4 text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
          {/* Services */}
          <div>
            <motion.h4
              className="text-lg font-heading font-semibold mb-4 text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h4>

            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {services.map((service: { name: string; href: string }) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      {service.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Social Links */}
          <div>
            <motion.h4
              className="text-lg font-heading font-semibold mb-4 text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact Me
            </motion.h4>
            <div>
              <h4 className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-sunset-gold flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a
                      href="tel:+254741760092"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      +254 741 760 092
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-sunset-gold flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a
                      href="mailto:milton.antony.ngala@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      milton.antony.ngala@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-sunset-gold flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <button
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group mt-4"
                >
                  <WhatsAppOutlined
                    className="mr-2 h-4 w-4"
                    style={{ fontSize: "24px" }}
                  />
                  WhatsApp Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Milton Antony Ngala. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
            <a href="/privacy" className="text-gray-600 dark:text-gray-400">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-600 dark:text-gray-400">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-600 dark:text-gray-400">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
