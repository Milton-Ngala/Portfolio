import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
};

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">
    <div className="text-center max-w-md">
      <p className="text-8xl font-heading font-bold text-primary-500 mb-4 tabular-nums">404</p>
      <h1 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-3">
        Page not found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-primary inline-flex"
      >
        Back to home
      </Link>
    </div>
  </div>
);

export default NotFound;
