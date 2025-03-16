import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { CTASection } from './components/CTASection';
import { StatsAndReviews } from './components/StatsAndReviews';
import { PythonFoundation } from './components//PythonFoundation';
import { Partners } from './components//Partners';
import { Footer } from './components//Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Carousel />
      <CTASection />
      <StatsAndReviews />
      <PythonFoundation />
      <Partners />
      <Footer />
    </main>
  );
}
