/**
 * /services — Services page.
 *
 * Server wrapper exports metadata. The interactive card grid lives in
 * ServicesPageClient (marked 'use client') so this file remains a Server
 * Component and can export `metadata`.
 *
 * Previously this was a single 'use client' file that also imported
 * `type Metadata` — Next.js silently ignores `export const metadata` in
 * client components, so the page had no SEO title at all.
 */
import type { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Software Engineering Services',
  description:
    'End-to-end software engineering services: .NET & React development, cloud architecture on Azure, CI/CD, API development, system design, and technical consultation.',
  alternates: { canonical: 'https://ngala.co.ke/services' },
  openGraph: {
    title: 'Software Engineering Services | Milton Ngala',
    description:
      'Full-stack development, .NET APIs, Azure cloud architecture, and technical consulting. Based in Nairobi, working with clients globally.',
    url: 'https://ngala.co.ke/services',
  },
};

const ServicesPage = () => (
  <div className="pt-16">
    <ServicesPageClient />
  </div>
);

export default ServicesPage;
