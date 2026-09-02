/**
 * /tech — Technical Expertise page.
 *
 * Server wrapper exports metadata; interactive accordion rendered by TechPageClient.
 */
import type { Metadata } from 'next';
import TechPageClient from '@/components/TechPageClient';

export const metadata: Metadata = {
  title: 'Technical Skills & Expertise',
  description:
    'Milton Ngala\'s technical stack: .NET Core, C#, React, Next.js, TypeScript, Azure, Docker, SQL Server, and more. Full-stack engineer with enterprise and cloud architecture depth.',
  alternates: { canonical: 'https://ngala.co.ke/tech' },
  openGraph: {
    title: 'Technical Skills & Expertise | Milton Ngala',
    description:
      'Senior Software Engineer proficient in .NET, React, Azure, microservices, and clean architecture. Explore the full technical stack.',
    url: 'https://ngala.co.ke/tech',
  },
};

const TechPage = () => (
  <div className="pt-20">
    <TechPageClient />
  </div>
);

export default TechPage;
