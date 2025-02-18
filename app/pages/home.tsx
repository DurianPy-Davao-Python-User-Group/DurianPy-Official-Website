import { Hero } from '../components/home/Hero';
import { Carousel } from '../components/home/Carousel';
import { CTASection } from '../components/home/CTASection';
import { StatsAndReviews } from '../components/home/StatsAndReviews';
import { PythonFoundation } from '../components/home/PythonFoundation';
import { Partners } from '../components/home/Partners';
import { Footer } from '../components/home/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Carousel />
      <CTASection />
      <StatsAndReviews />
      <PythonFoundation />
      <Partners />
      <Footer />
    </>
  );
}
