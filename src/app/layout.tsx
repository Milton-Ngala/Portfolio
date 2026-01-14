import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Milton Ngala',
    description: 'Software Engineer'
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={`${inter.className} min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300`}>
                <ThemeProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <FloatingActionButton />
                </ThemeProvider>
            </body>
        </html>
    );
}
