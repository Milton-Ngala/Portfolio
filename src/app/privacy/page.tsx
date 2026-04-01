import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for miltonngala.com',
};

const PrivacyPolicyPage = () => {
  return (
    <main className="pt-20 max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: January 2026</p>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          This Privacy Policy explains how information is collected, used, and protected when you visit this website.
        </p>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Contact data</strong> — name, email, phone number submitted via the contact form.</li>
            <li><strong>Usage data</strong> — pages visited, device type, browser, general interaction patterns.</li>
            <li><strong>Preference data</strong> — theme preference stored in localStorage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>To respond to enquiries and provide requested services.</li>
            <li>To improve website performance and user experience.</li>
            <li>To maintain website security and prevent abuse.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Data Sharing</h2>
          <p className="text-sm">
            Personal data is not sold or rented. Contact form submissions are processed via{' '}
            <a href="https://resend.com" className="text-primary-600 dark:text-primary-400 underline" target="_blank" rel="noopener noreferrer">Resend</a>{' '}
            for email delivery only.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Your Rights</h2>
          <p className="text-sm">
            You may request access to, correction of, or deletion of your personal data at any time by contacting me directly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">5. Contact</h2>
          <p className="text-sm">
            Questions about this policy? Reach out via the{' '}
            <a href="/contact" className="text-primary-600 dark:text-primary-400 underline">contact page</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
