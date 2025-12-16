import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arsan Pathak - MERN Stack Developer | Portfolio',
  description: 'Full Stack MERN Developer specializing in React, Node.js, and modern web technologies. View my projects and experience.',
  keywords: 'MERN Stack Developer, React Developer, Node.js, Full Stack, Web Developer, JavaScript',
  authors: [{ name: 'Arsan Pathak' }],
  creator: 'Arsan Pathak',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arsanpathak.dev',
    title: 'Arsan Pathak - MERN Stack Developer',
    description: 'Full Stack MERN Developer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Arsan Pathak Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsan Pathak - MERN Stack Developer',
    description: 'Full Stack MERN Developer specializing in React, Node.js, and modern web technologies.',
    creator: '@arsanpathak',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}