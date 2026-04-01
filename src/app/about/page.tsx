import type { Metadata } from 'next';
import AboutContent from '@/components/About';

export const metadata: Metadata = {
  title: 'About | Milton Ngala',
  description: 'Software Engineer based in Nairobi, building digital solutions that make a real difference.',
};

const AboutPage = () => (
  <div className="pt-16">
    <AboutContent />
  </div>
);

export default AboutPage;
