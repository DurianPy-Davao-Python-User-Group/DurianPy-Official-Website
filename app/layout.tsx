import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/navs/public/Navbar';
import { ReactLenis } from 'lenis/react';
import { Footer } from './(home)/components/Footer';

const head = {
  title: 'DurianPy',
  description: `Accelerating Davao's Tech Growth with Python`,
};

// Get the base URL from environment variables
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.durianpy.org';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s | ${head.title}`,
    default: head.title,
  },
  keywords: [
    'Python Davao',
    'DurianPy',
    'Davao Python User Group',
    'DurianPy - Davao Python User Group',
  ],
  description: head.description,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    ...head,
  },
  facebook: {
    appId: "864906083053298"
  },
  twitter: {
    card: 'summary_large_image',
    ...head,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-dark-green`}>
        <Navbar />
        <ReactLenis root>{children}</ReactLenis>
        <Footer />
      </body>
    </html>
  );
}
