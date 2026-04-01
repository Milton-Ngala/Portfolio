'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppOutlined, GithubOutlined } from '@ant-design/icons';
import services from '@/constants/services';
import { navItems } from '@/constants/navItems';

const socialLinks = [
  { icon: GithubOutlined, href: 'https://github.com/milton-ngala', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/milton-antony-ngala', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:milton.antony.ngala@gmail.com', label: 'Email' },
  { icon: WhatsAppOutlined, href: 'https://wa.me/254741760092', label: 'WhatsApp' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500" />

      <div className="relative container mx-auto px-6 py-16 text-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <motion.p
              className="font-mono font-semibold text-xl bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Milton Ngala
            </motion.p>
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Senior Software Engineer based in Nairobi. Building production systems that solve real problems.
            </motion.p>
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 p-2.5 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-sm font-heading font-semibold uppercase tracking-wider mb-4 text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Navigation
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {navItems.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <motion.span whileHover={{ x: 4 }} className="inline-block">
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Services */}
          <div>
            <motion.h4
              className="text-sm font-heading font-semibold uppercase tracking-wider mb-4 text-primary-600 dark:text-primary-400"
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
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <motion.span whileHover={{ x: 4 }} className="inline-block">
                      {service.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h4
              className="text-sm font-heading font-semibold uppercase tracking-wider mb-4 text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href="tel:+254741760092"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +254 741 760 092
              </a>
              <a
                href="mailto:milton.antony.ngala@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                milton.antony.ngala@gmail.com
              </a>
              <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 shrink-0" />
                Nairobi, Kenya
              </p>
              <motion.button
                onClick={() => window.open('https://wa.me/254741760092', '_blank')}
                className="mt-2 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppOutlined style={{ fontSize: 16 }} />
                WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} Milton Antony Ngala. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Cookie Policy', href: '/cookies' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
