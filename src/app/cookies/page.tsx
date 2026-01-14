'use client';

export default function CookiePolicyPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Last updated: January 2026
            </p>

            <section className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>
                    This Cookie Policy explains what cookies are, how we use them, and your
                    choices regarding their use.
                </p>

                <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
                <p>
                    Cookies are small text files stored on your device when you visit a
                    website. They help websites function properly and provide information
                    to site owners.
                </p>

                <h2 className="text-xl font-semibold">2. Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Essential Cookies:</strong> Necessary for basic website
                        functionality and security.
                    </li>
                    <li>
                        <strong>Analytics Cookies:</strong> Help us understand how visitors
                        interact with the site (used only with consent).
                    </li>
                    <li>
                        <strong>Preference Cookies:</strong> Remember user settings and
                        preferences.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold">3. How We Use Cookies</h2>
                <p>
                    Cookies are used to ensure proper website operation, improve
                    performance, analyze traffic, and enhance user experience.
                </p>

                <h2 className="text-xl font-semibold">4. Your Cookie Choices</h2>
                <p>
                    When you first visit our website, you are asked to accept or reject
                    non-essential cookies. You may change your preference at any time by
                    clearing your browser cookies or using the cookie preferences option
                    if available.
                </p>

                <h2 className="text-xl font-semibold">5. Third-Party Cookies</h2>
                <p>
                    Some cookies may be placed by third-party services we use for analytics
                    or performance monitoring. These third parties have their own privacy
                    policies.
                </p>

                <h2 className="text-xl font-semibold">6. Updates to This Policy</h2>
                <p>
                    We may update this Cookie Policy from time to time to reflect changes
                    in technology or legal requirements.
                </p>
            </section>
        </main>
    );
}
