import { motion } from 'framer-motion';
import { Code, Database, Server, Zap } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Code, delay: 0, x: '10%', y: '20%' },
    { Icon: Database, delay: 0.5, x: '80%', y: '30%' },
    { Icon: Server, delay: 1, x: '15%', y: '70%' },
    { Icon: Zap, delay: 1.5, x: '85%', y: '80%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={40} className="text-primary-400 dark:text-primary-500" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;