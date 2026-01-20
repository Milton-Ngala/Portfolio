'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, MapPin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Header */}
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-4">
                            About Me
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Building digital solutions that make a real difference
                        </p>
                    </header>
                </motion.div>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none bg-primary-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-200 leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            I've worked with startups and large enterprises to design digital solutions
                            that make a measurable impact whether it's helping clinics cut wait times or
                            mapping 100,000 homes for utility access.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            My approach combines technical depth with practical problem-solving. I believe
                            the best software doesn't just work it makes people's lives easier and
                            businesses more efficient.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed mb-12"
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

                    {/* Journey Section */}
                    <motion.div
                        className="bg-primary-50 dark:bg-gray-800 rounded-2xl p-8 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-6">
                            My Journey
                        </h3>
                        <div className="space-y-4 text-gray-700 dark:text-gray-200">
                            <p>
                                Started as a curious developer fascinated by how technology could solve everyday problems.
                                My first major project was a clinic management system that reduced patient wait times by 40%.
                            </p>
                            <p>
                                Since then, I've had the privilege of working on diverse projects from travel booking
                                platforms processing thousands of reservations to GIS systems mapping entire cities.
                            </p>
                            <p>
                                Today, I focus on helping growing businesses and enterprise clients build scalable,
                                maintainable systems that drive real business value.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.6 }}
                    >
                        <Link href="/contact">
                            <motion.button
                                className="inline-flex items-center bg-primary-600 dark:bg-primary-500 text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300"
                                whileHover={{ scale: 1.05, x: 5 }}
                            >
                                Let's Work Together
                                <ArrowRight className="ml-2" size={18} />
                            </motion.button>
                        </Link>
                    </motion.div>
            </div>
        </section>
    );
};

export default About;
