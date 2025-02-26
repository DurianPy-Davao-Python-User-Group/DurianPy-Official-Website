import type { Metadata } from 'next';
import localFont from 'next/font/local';
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

const head = {
  title: 'DurianPy',
  description: `Accelerating Davao's Tech Growth with Python`,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${head.title}`,
    default: head.title,
  },
  keywords: ['Python', 'Python Philippines', 'Python Davao'],
  description: head.description,
  metadataBase: new URL('https://durianpy.org'),
  alternates: {
    canonical: './',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-green`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
