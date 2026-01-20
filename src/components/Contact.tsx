'use client';

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
  CheckCircle,
} from 'lucide-react';
import { WhatsAppOutlined, CoffeeOutlined } from '@ant-design/icons';
import services from '../components/common/services';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: services[0].name,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const currentYear = new Date().getFullYear();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        projectType: services[0].name,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: '30-minute strategy or discovery session',
      cta: 'Book time',
      action: () =>
        window.open('https://calendly.com/milton-antony-ngala', '_blank'),
      primary: true,
    },
    {
      icon: WhatsAppOutlined,
      title: 'WhatsApp',
      description: 'Fast questions & clarifications',
      cta: 'Chat',
      action: () => window.open('https://wa.me/254741760092', '_blank'),
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'milton.antony.ngala@gmail.com',
      cta: 'Send',
      action: () => window.open('mailto:milton.antony.ngala@gmail.com'),
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+254 741 760 092',
      cta: 'Call',
      action: () => window.open('tel:+254741760092'),
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Build Something That Works
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you’re validating an idea or scaling an existing system,
            I can help you design and ship with confidence.
          </p>

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium">
            <Clock className="w-4 h-4" />
            Accepting a limited number of clients in {currentYear}
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-8">Ways to Reach Me</h2>

            <div className="space-y-5">
              {contactMethods.map((m) => (
                <button
                  key={m.title}
                  onClick={m.action}
                  className={`w-full rounded-xl p-6 text-left transition-all border ${m.primary
                    ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary-400'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg ${m.primary
                          ? 'bg-white/20'
                          : 'bg-primary-50 dark:bg-primary-900/20'
                          }`}
                      >
                        <m.icon
                          className={`w-5 h-5 ${m.primary
                            ? 'text-white'
                            : 'text-primary-600 dark:text-primary-400'
                            }`}
                        />
                      </div>

                      <div>
                        <p
                          className={`font-semibold ${m.primary ? 'text-white' : ''
                            }`}
                        >
                          {m.title}
                        </p>
                        <p
                          className={`text-sm ${m.primary
                            ? 'text-white/80'
                            : 'text-gray-600 dark:text-gray-400'
                            }`}
                        >
                          {m.description}
                        </p>
                      </div>
                    </div>

                    <span className="flex items-center gap-1 font-medium">
                      {m.cta}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="flex gap-3">
                <CoffeeOutlined className="text-primary-500 mt-1" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I usually respond within a few hours during business days
                  (GMT+3). Happy to discuss ideas over a virtual coffee.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6">Start a Project</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border px-4 py-3 bg-transparent dark:bg-gray-800 dark:border-gray-700"
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border px-4 py-3 bg-transparent dark:bg-gray-800 dark:border-gray-700"
              />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full rounded-lg border px-4 py-3 bg-transparent dark:bg-gray-800 dark:border-gray-700"
              >
                {services.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project goals, timeline, and constraints."
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border px-4 py-3 bg-transparent"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary-600 text-white py-4 font-semibold flex items-center justify-center gap-2 hover:bg-primary-700 transition"
              >
                {isSubmitting ? 'Sending…' : <>Send Message <Send size={18} /></>}
              </button>
                          {submitStatus === 'success' && (
              <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 p-4">
                <CheckCircle className="text-green-500" />
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Message received. I’ll get back to you shortly.
                </p>
              </div>
            )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

