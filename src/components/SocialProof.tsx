import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Github, Linkedin, Award } from 'lucide-react';

const SocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, MedTech Solutions',
      company: 'MedTech Solutions',
      text: 'Milton delivered an exceptional healthcare management system that transformed our operations. His attention to HIPAA compliance and system security was outstanding.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      project: 'Healthcare Management System'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, TravelCorp International',
      company: 'TravelCorp International',
      text: 'The travel booking platform exceeded our expectations in both performance and user experience. Milton\'s expertise in handling high-volume transactions was invaluable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      project: 'Travel Booking Platform'
    },
    {
      id: 3,
      name: 'Dr. Amanda Rodriguez',
      role: 'Director of Operations, GeoAnalytics Pro',
      company: 'GeoAnalytics Pro',
      text: 'Milton created a powerful GIS visualization tool that revolutionized our data analysis capabilities. The system handles millions of data points effortlessly.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=150',
      project: 'GIS Mapping Dashboard'
    },
  ];

  const achievements = [
    {
      icon: Github,
      title: 'GitHub Activity',
      value: '2,500+',
      description: 'Contributions this year',
      link: 'https://github.com/miltonngala'
    },
    {
      icon: Award,
      title: 'Microsoft Certified',
      value: 'Azure',
      description: 'Solutions Architect Expert',
      link: '#'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Network',
      value: '1,200+',
      description: 'Professional connections',
      link: 'https://linkedin.com/in/miltonngala'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders and growing businesses worldwide
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="relative z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="text-center">
                    <p className="font-heading font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-primary-600 font-semibold text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonials[currentTestimonial].project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {achievements.map((achievement, index) => (
            <motion.a
              key={achievement.title}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                <achievement.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary-900 mb-2">
                {achievement.value}
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {achievement.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;