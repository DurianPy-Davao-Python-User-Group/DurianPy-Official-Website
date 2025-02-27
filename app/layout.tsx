import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navs/public/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-monstserrat',
});

const head = {
  title: 'DurianPy',
  description: `Accelerating Davao's Tech Growth with Python`,
};

// Get the base URL from environment variables
const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'https://durianpy.org'; // Fallback URL

export const metadata: Metadata = {
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
  twitter: {
    card: 'summary_large_image',
    ...head,
  },
  openGraph: {
    ...head,
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-dark-green`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
