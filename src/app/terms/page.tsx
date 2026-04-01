import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for miltonngala.com',
};

const TermsOfServicePage = () => {
  return (
    <main className="pt-20 max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: January 2026</p>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-sm">
          By accessing or using this website, you agree to be bound by these terms.
        </p>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Use of the Website</h2>
          <p className="text-sm">
            You agree to use this website for lawful purposes only and in a manner that does not infringe the rights of others.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Intellectual Property</h2>
          <p className="text-sm">
            All content on this website — including text, design, and code — is the intellectual property of Milton Ngala unless otherwise stated. Unauthorised reproduction is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Limitation of Liability</h2>
          <p className="text-sm">
            To the fullest extent permitted by law, Milton Ngala shall not be liable for any damages arising from your use of or inability to use this website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Changes to Terms</h2>
          <p className="text-sm">
            These terms may be updated at any time. Continued use of the website constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
