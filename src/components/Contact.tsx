'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Calendar, Send, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { WhatsAppOutlined, CoffeeOutlined } from '@ant-design/icons';
import services from '@/constants/services';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType: string;
};

type FormErrors = Partial<FormData>;

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const initialForm: FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: services[0].name,
  };

  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const currentYear = new Date().getFullYear();

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = 'Name is required.';
    if (!formData.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      next.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      next.phone = 'Enter a valid phone number.';
    }
    if (!formData.message.trim()) {
      next.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      next.message = 'Message must be at least 20 characters.';
    }
    return next;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitStatus('success');
      setFormData(initialForm);
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
      action: () => window.open('https://calendly.com/milton-antony-ngala', '_blank'),
      primary: true,
    },
    {
      icon: WhatsAppOutlined,
      title: 'WhatsApp',
      description: 'Fast questions & clarifications',
      cta: 'Chat',
      action: () => window.open('https://wa.me/254741760092', '_blank'),
      primary: false,
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'milton.antony.ngala@gmail.com',
      cta: 'Send',
      action: () => window.open('mailto:milton.antony.ngala@gmail.com'),
      primary: false,
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+254 741 760 092',
      cta: 'Call',
      action: () => window.open('tel:+254741760092'),
      primary: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container-wide mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1>Let's Build Something That Works</h1>
          <p>
            Whether you're validating an idea or scaling an existing system,
            I can help you design and ship with confidence.
          </p>
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-medium border border-primary-200 dark:border-primary-800/60">
            <Clock className="w-3.5 h-3.5" />
            Accepting a limited number of clients in {currentYear}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-h3 mb-6">Ways to reach me</h2>
            <div className="space-y-3">
              {contactMethods.map((m) => (
                <motion.button
                  key={m.title}
                  onClick={m.action}
                  className={`w-full rounded-card p-5 text-left transition-all duration-200 border ${
                    m.primary
                      ? 'bg-primary-600 dark:bg-primary-500 text-white border-primary-600 dark:border-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600'
                      : 'card hover:shadow-card-md hover:border-primary-300 dark:hover:border-primary-700'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        m.primary ? 'bg-white/20' : 'bg-primary-50 dark:bg-primary-900/20'
                      }`}>
                        <m.icon className={`w-4.5 h-4.5 ${m.primary ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`} />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${m.primary ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>
                          {m.title}
                        </p>
                        <p className={`text-xs mt-0.5 ${m.primary ? 'text-white/75' : 'text-gray-500 dark:text-gray-400'}`}>
                          {m.description}
                        </p>
                      </div>
                    </div>
                    <span className={`flex items-center gap-1 text-xs font-medium ${m.primary ? 'text-white/90' : 'text-gray-400 dark:text-gray-500'}`}>
                      {m.cta}
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 card p-5 flex gap-3">
              <CoffeeOutlined className="text-primary-500 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I usually respond within a few hours during business days (GMT+3).
                Happy to discuss ideas over a virtual coffee.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-8"
          >
            <h2 className="text-h3 mb-6">Start a project</h2>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <input name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className="input" />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} className="input" />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <input name="phone" type="tel" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} className="input" />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
              <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="input">
                {services.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project goals, timeline, and constraints."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : <><Send size={16} /> Send Message</>}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Message received. I'll get back to you shortly.
                  </p>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4"
                >
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Something went wrong. Please try again or reach out directly.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
