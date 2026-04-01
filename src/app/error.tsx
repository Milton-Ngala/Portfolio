'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          An unexpected error occurred. You can try again or head back home.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-primary-400 transition"
          >
            Go home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Error;
