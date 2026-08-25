'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Ambient gradient orbs — replaces the original tiny icon elements.
 * These are large, blurred colour blobs positioned behind the hero content
 * to give it depth and a modern "glow" aesthetic.
 */
const orbs = [
  {
    // Top-left — teal primary
    className:
      'absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary-400/20 dark:bg-primary-500/15 blur-3xl',
    delay: 0,
    floatY: [0, -18, 0],
  },
  {
    // Top-right — amber accent
    className:
      'absolute -top-16 right-0 w-[420px] h-[420px] rounded-full bg-accent-400/20 dark:bg-accent-500/12 blur-3xl',
    delay: 1,
    floatY: [0, 14, 0],
  },
  {
    // Bottom-centre — teal secondary
    className:
      'absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary-300/15 dark:bg-primary-600/12 blur-3xl',
    delay: 1.8,
    floatY: [0, -10, 0],
  },
  {
    // Bottom-right — accent warm
    className:
      'absolute bottom-16 -right-24 w-[360px] h-[360px] rounded-full bg-accent-300/12 dark:bg-accent-500/10 blur-3xl',
    delay: 2.5,
    floatY: [0, 12, 0],
  },
];

const FloatingElements = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map(({ className, delay, floatY }, i) => (
        <motion.div
          key={i}
          className={className}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: 1,
                  scale: 1,
                  y: floatY,
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.4, delay }
              : {
                  opacity: { duration: 1.2, delay },
                  scale: { duration: 1.2, delay },
                  y: {
                    duration: 6 + i * 1.2,
                    delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
          }
        />
      ))}
    </div>
  );
};

export default FloatingElements;
