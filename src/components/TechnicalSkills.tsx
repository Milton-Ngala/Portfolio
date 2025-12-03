import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  Smartphone, 
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const TechnicalSkills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript Mastery', level: 90 },
        { name: 'Tailwind UI Design', level: 88 },
        { name: 'Vue.js / Nuxt.js', level: 82 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: '.NET Core APIs', level: 93 },
        { name: 'Node.js Microservices', level: 87 },
        { name: 'Python FastAPI', level: 80 },
        { name: 'GraphQL', level: 78 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Azure Deployments', level: 90 },
        { name: 'GitHub Actions CI/CD', level: 85 },
        { name: 'Docker & Scaling', level: 83 },
        { name: 'Kubernetes', level: 75 },
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis Caching', level: 82 },
        { name: 'Elasticsearch', level: 78 },
      ]
    },
  ];

  const specializations = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive, progressive web apps that work seamlessly across all devices'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'HIPAA, GDPR compliant solutions with enterprise-grade security'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Sub-3 second load times with optimized code and caching strategies'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Multi-region deployments with CDN optimization and localization'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical Skills Matrix
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the modern development stack, from frontend frameworks to cloud infrastructure
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.title}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-primary-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                <spec.icon className="w-8 h-8 text-primary-400" />
              </div>
              <h4 className="text-lg font-heading font-semibold mb-2">
                {spec.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;