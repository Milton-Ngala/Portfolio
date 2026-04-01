import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your project, book a consultation, or just say hello.',
};

const ContactPage = () => (
  <div className="pt-16">
    <Contact />
  </div>
);

export default ContactPage;
