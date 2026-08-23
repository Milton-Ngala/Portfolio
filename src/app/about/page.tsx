import type { Metadata } from 'next';
import AboutContent from '@/components/About';

export const metadata: Metadata = {
  // Use a bare string so the template ('%s | Milton Ngala') produces
  // "About Milton Ngala | Milton Ngala" — previously it was double-suffixed.
  title: 'About Milton Ngala',
  description:
    'Senior Software Engineer based in Nairobi with expertise in .NET, C#, React, and Azure. Learn about my background, approach, and technical experience.',
  alternates: {
    canonical: 'https://ngala.co.ke/about',
  },
};

const AboutPage = () => (
  <div className="pt-16">
    <AboutContent />
  </div>
);

export default AboutPage;
