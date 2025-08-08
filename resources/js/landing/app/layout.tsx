import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Handei Zimbabwe - Discover the Jewel of Southern Africa',
  description: 'Explore Zimbabwe\'s breathtaking destinations, from Victoria Falls to Great Zimbabwe ruins. Your gateway to unforgettable African adventures, wildlife safaris, and cultural experiences.',
  keywords: 'Zimbabwe tourism, Victoria Falls, safari, Great Zimbabwe, Hwange National Park, travel Zimbabwe, African adventure',
  authors: [{ name: 'Handei Zimbabwe' }],
  creator: 'Handei Zimbabwe',
  publisher: 'Handei Zimbabwe',
  openGraph: {
    title: 'Handei Zimbabwe - Discover the Jewel of Southern Africa',
    description: 'Explore Zimbabwe\'s breathtaking destinations, from Victoria Falls to Great Zimbabwe ruins.',
    url: 'https://handeizimbabwe.com',
    siteName: 'Handei Zimbabwe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Victoria Falls - Zimbabwe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handei Zimbabwe - Discover the Jewel of Southern Africa',
    description: 'Explore Zimbabwe\'s breathtaking destinations, from Victoria Falls to Great Zimbabwe ruins.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://handeizimbabwe.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main className="pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}