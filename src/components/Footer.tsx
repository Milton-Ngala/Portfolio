import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { WhatsAppOutlined, GithubOutlined } from '@ant-design/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GithubOutlined,
      href: 'https://github.com/milton-ngala',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/miltonngala',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:milton.antony.ngala@gmail.com',
      label: 'Email',
    },
    {
      icon: WhatsAppOutlined,
      href: 'https://wa.me/254741760092',
      label: 'WhatsApp',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
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
                Milton
              </span>
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Based in Nairobi, Kenya<br />
              +254 741 760 092
            </motion.p>
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
                    to={link.href}
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

          {/* Social Links */}
          <div>
            <motion.h4
              className="text-lg font-heading font-semibold mb-4 text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h4>

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
                  className="bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 group shadow-sm dark:shadow-none"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Always open to interesting conversations and new opportunities.
            </motion.p>
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
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Milton Ngala. All rights reserved.
          </p>

          {/* <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 md:mt-0">
            Designed & built with ❤️ using React, Tailwind, and Framer Motion.
          </p> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
