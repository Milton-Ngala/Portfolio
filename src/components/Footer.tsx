'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Phone, FileText } from 'lucide-react';
import { WhatsAppOutlined, GithubOutlined } from '@ant-design/icons';
import services from '@/constants/services';
import { navItems } from '@/constants/navItems';

const socialLinks = [
  { icon: GithubOutlined, href: 'https://github.com/milton-ngala', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/milton-antony-ngala', label: 'LinkedIn' },
  { icon: Mail, href: '#contact-email', label: 'Email', isEmail: true },
  { icon: WhatsAppOutlined, href: 'https://wa.me/254741760092', label: 'WhatsApp' },
];

/**
 * Obfuscated email link — assembles the mailto: on click rather than
 * baking the full address into the static HTML, reducing harvesting by
 * simple scrapers while remaining fully accessible and functional.
 */
const EmailLink = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => (
  <a
    href="#contact-email"
    className={className}
    onClick={(e) => {
      e.preventDefault();
      window.location.href = ['mailto', ':', 'milton', '@', 'ngala.co.ke'].join('');
    }}
    aria-label="Send email to Milton Ngala"
  >
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500" />

      <div className="relative container mx-auto px-6 py-16 text-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <Link href="/" aria-label="Milton Ngala — home">
                <Image
                  src="/Ngala_Logo.png"
                  alt="Milton Ngala"
                  width={120}
                  height={36}
                  className="h-9 w-auto object-contain dark:brightness-90"
                />
              </Link>
            </motion.div>
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
                  target={s.isEmail ? undefined : '_blank'}
                  rel={s.isEmail ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  className="bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 p-2.5 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={s.isEmail ? (e) => {
                    e.preventDefault();
                    window.location.href = ['mailto', ':', 'milton', '@', 'ngala.co.ke'].join('');
                  } : undefined}
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
              {/* Professional links always visible to recruiters */}
              <li>
                <a
                  href="https://linkedin.com/in/milton-antony-ngala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <motion.span whileHover={{ x: 4 }} className="inline-flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    LinkedIn
                  </motion.span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/milton-ngala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <motion.span whileHover={{ x: 4 }} className="inline-flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    GitHub
                  </motion.span>
                </a>
              </li>
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
              <EmailLink className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>milton<span aria-hidden="true"> </span>[@]<span aria-hidden="true"> </span>ngala.co.ke</span>
              </EmailLink>
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
