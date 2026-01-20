'use client';

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import FloatingElements from "@/components/FloatingElements";
import TechTags from "@/components/TechTags";
import About from "@/components/About";
import Work from "@/components/Work";
import ValueProposition from "@/components/ValueProposition";
import Image from "next/image";
import ngala from "../assets/ngala.png";
import useTheme from "@/contexts/ThemeContext";


const Home = () => {
    const { theme } = useTheme();
    const handleScheduleConsultation = () => {
        window.open("https://calendly.com/milton-antony-ngala", "_blank");
    };

    return (
        <>
            <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
                <FloatingElements />

                <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl mb-5">
                    {/* Greeting */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            👋 Hi there!
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        I'm{" "}
                        <span className="text-primary-600 dark:text-primary-400">
                            Milton Ngala
                        </span>
                        <br />
                        <span className="text-gray-600 dark:text-gray-400">
                            a Software Engineer
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"></span>
                    </motion.h1>
                    <motion.div
                        className="mb-8 flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {theme === "dark" ? <Image src={ngala} alt="Hero" width={150} height={150} className="rounded-full" /> : <Image src={ngala} alt="Hero" width={150} height={150} className="rounded-full" />}
                    </motion.div>

                    {/* Supporting Text */}
                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Open to meaningful conversations and new opportunities,{" "}
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                            I design and build software that solves real-world problems
                        </span>
                        .
                    </motion.p>

                    {/* Tech Tags */}
                    <TechTags />
                    {/* Call to Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <Link href="/work">
                            <motion.button
                                className="bg-primary-600 dark:bg-primary-500 text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 flex items-center gap-2 shadow-lg"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0, 18, 51, 0.2)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See My Work
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>

                        <motion.button
                            onClick={handleScheduleConsultation}
                            className="bg-transparent border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Calendar size={20} />
                            Book a Consultation
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <Link href="/about">
                            <motion.button
                                className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {/* <ChevronDown size={32} /> */}
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
                <ValueProposition />
                <About />
                <Work />
            </section>
        </>
    );
};

export default Home;
