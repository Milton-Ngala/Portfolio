import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for miltonngala.com',
};

const CookiePolicyPage = () => {
  return (
    <main className="pt-20 max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-2">
        Cookie Policy
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: January 2026</p>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-sm">
          This policy explains what cookies are, how this site uses them, and your choices.
        </p>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">1. What Are Cookies?</h2>
          <p className="text-sm">
            Cookies are small text files stored on your device when you visit a website. They help websites function correctly and remember your preferences.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Preference cookies</strong> — stores your dark/light theme choice in localStorage (not a cookie, no server transmission).</li>
            <li>No analytics, advertising, or third-party tracking cookies are currently used.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Your Choices</h2>
          <p className="text-sm">
            You can clear localStorage at any time via your browser settings. This will reset your theme preference to the default (dark mode).
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
