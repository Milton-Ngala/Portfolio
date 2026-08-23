import type { Metadata } from 'next';
import { Montserrat, Open_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import StructuredData from '@/components/StructuredData';

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
  metadataBase: new URL('https://ngala.co.ke'),
  title: {
    // ~52 characters — within the 50-60 target
    default: 'Milton Ngala | Senior Software Engineer',
    template: '%s | Milton Ngala',
  },
  description:
    'Senior Software Engineer specialising in .NET, C#, React, and Next.js. Building scalable enterprise systems and full-stack applications. Based in Nairobi, working with clients globally.',
  keywords: [
    'Senior Software Engineer',
    'Full Stack Developer',
    '.NET',
    'C#',
    'React',
    'Next.js',
    'TypeScript',
    'Azure',
    'cloud architecture',
    'microservices',
    'REST APIs',
    'Nairobi',
    'Kenya',
  ],
  authors: [{ name: 'Milton Ngala', url: 'https://ngala.co.ke' }],
  creator: 'Milton Ngala',
  // Canonical is set per-page via alternates.canonical; this provides the base
  alternates: {
    canonical: 'https://ngala.co.ke',
  },
  icons: {
    icon: '/Ngala_Logo.png',
    shortcut: '/Ngala_Logo.png',
    apple: '/Ngala_Logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ngala.co.ke',
    siteName: 'Milton Ngala',
    title: 'Milton Ngala | Senior Software Engineer',
    description:
      'Senior Software Engineer specialising in .NET, C#, React, and Next.js. Building scalable enterprise systems and full-stack applications from Nairobi.',
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
    title: 'Milton Ngala | Senior Software Engineer',
    description:
      'Senior Software Engineer specialising in .NET, C#, React, and Next.js. Building scalable enterprise systems and full-stack applications.',
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
      <head>
        {/*
          next/font/google handles font loading automatically — no manual preconnect
          needed for fonts.googleapis.com. These tags were redundant and removed to
          avoid unnecessary DNS lookups on mobile.
        */}
      </head>
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
        {/* JSON-LD structured data — injected once at root, not per-page */}
        <StructuredData />
      </body>
    </html>
  );
};

export default RootLayout;
