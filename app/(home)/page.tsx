import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { CTASection } from './components/CTASection';
import { StatsAndReviews } from './components/StatsAndReviews';
import { PythonFoundation } from './components//PythonFoundation';
import { Partners } from './components//Partners';
// import UpcomingEvents from './components//UpcomingEvents';
import { Sponsors } from './components/Sponsors';
import { Testimonials } from './components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Carousel />
      <CTASection />
      <StatsAndReviews />
      <Testimonials />
      <PythonFoundation />
      <Partners />
      {/* <UpcomingEvents /> */}
      <Sponsors />
    </main>
  );
}
