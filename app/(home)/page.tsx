import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { CTASection } from './components/CTASection';
import { StatsAndReviews } from './components/StatsAndReviews';
import { PythonFoundation } from './components/PythonFoundation';
import { Partners } from './components/Partners';
import UpcomingEvents from './components/UpcomingEvents';
import { Sponsors } from './components/Sponsors';
import { type Event } from './components/EventCard';
import { getHomePageData, getStatisticsData } from '@/lib/graphql/cms';

export default async function HomePage() {
  const homePageData = await getHomePageData();
  const statisticsData = await getStatisticsData();
  
  const events: Event[] = homePageData.events.map((event, index) => ({
    ...event,
    variant: index === 0 ? 'main' : 'regular',
  }));

  return (
    <main>
      <Hero />
      <Carousel photos={homePageData.carousel.photos} />
      <CTASection cards={homePageData.cta} />
      <StatsAndReviews statistics={statisticsData} />
      <PythonFoundation organizationStatus={homePageData.organizationStatus} />
      <Partners partners={homePageData.partners} />
      <UpcomingEvents events={events} />
      <Sponsors sponsors={homePageData.sponsors} />
    </main>
  );
}