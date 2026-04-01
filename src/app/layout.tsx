import type { Metadata } from 'next';
import { Montserrat, Open_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://miltonngala.com'),
  title: {
    default: 'Milton Ngala — Senior Software Engineer',
    template: '%s | Milton Ngala',
  },
  description:
    'Senior Software Engineer specialising in full-stack web applications, cloud architecture, and scalable systems. Based in Nairobi, working with clients globally.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Next.js',
    '.NET',
    'Azure',
    'Nairobi',
    'Kenya',
  ],
  authors: [{ name: 'Milton Ngala', url: 'https://miltonngala.com' }],
  creator: 'Milton Ngala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://miltonngala.com',
    siteName: 'Milton Ngala',
    title: 'Milton Ngala — Senior Software Engineer',
    description:
      'Senior Software Engineer specialising in full-stack web applications, cloud architecture, and scalable systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Milton Ngala — Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milton Ngala — Senior Software Engineer',
    description:
      'Senior Software Engineer specialising in full-stack web applications, cloud architecture, and scalable systems.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-screen font-sans antialiased transition-colors duration-300"
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
