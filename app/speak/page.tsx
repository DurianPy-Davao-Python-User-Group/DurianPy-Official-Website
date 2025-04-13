import { Footer } from '../(home)/components/Footer';
import HeroSection from './components/speak';

export const metadata = {
  title: 'Speak | My Awesome App',
  description: 'Share your thoughts with the community using our Speak feature.',
  openGraph: {
    title: 'Speak | My Awesome App',
    description: 'Share your thoughts with the community using our Speak feature.',
    url: 'https://yourdomain.com/speak',
    siteName: 'My Awesome App',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Speak Page Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speak | My Awesome App',
    description: 'Join the conversation with our new Speak feature.',
    images: ['https://yourdomain.com/og-image.png'],
  },
};



export default function SpeakPage() {
  return (
    <main>
      <HeroSection />
      <Footer />
    </main>
  );
}
