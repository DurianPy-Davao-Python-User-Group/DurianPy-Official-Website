import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/home/Hero';
import { Carousel } from '@/components/home/Carousel';
import { CTASection } from '@/components/home/CTASection';
import { StatsAndReviews } from '@/components/home/StatsAndReviews';
import { PythonFoundation } from '@/components/home/PythonFoundation';
import { Partners } from '@/components/home/Partners';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import { Sponsors } from '@/components/home/Sponsors';
import {
  RemoteLoader,
  type RemoteEntry,
} from '#/components/micro-frontend/RemoteLoader';

export const Route = createFileRoute('/')({
  component: Home,
});

const discovery = {
  version: '1.0.0',
  updatedAt: '2026-06-28T00:00:00Z',
  remotes: {
    serviceA: {
      url: 'http://localhost:3001/remoteEntry.js',
      scope: 'serviceA',
      module: './App',
      routePrefix: '/service-a',
      type: 'route',
    },
    serviceB: {
      url: 'http://localhost:3002/remoteEntry.js',
      scope: 'serviceB',
      module: './Widget',
      type: 'widget',
    },
    serviceC: {
      url: 'http://localhost:3003/remoteEntry.js',
      scope: 'serviceC',
      module: './HydratedContent',
      type: 'hydrated',
    },
    paidService: {
      url: 'http://localhost:3004/remoteEntry.js',
      scope: 'paidService',
      module: './PaidFeature',
      type: 'widget',
      featureFlag: 'ENABLE_PAID_FEATURES',
    },
    formService: {
      url: 'http://localhost:3005/remoteEntry.js',
      scope: 'formService',
      module: './Form',
      routePrefix: '/form',
      type: 'route',
    },
    mfeCeptionService: {
      url: 'http://localhost:3006/remoteEntry.js',
      scope: 'mfeCeptionService',
      module: './App',
      routePrefix: '/mfe-ception',
      type: 'route',
    },
  },
  featureFlags: {
    ENABLE_PAID_FEATURES: true,
  },
};

function Home() {
  const serviceBRemote = discovery.remotes.serviceB as RemoteEntry;

  return (
    <main>
      <RemoteLoader remote={serviceBRemote} />

      <Hero />
      <Carousel />
      <CTASection />
      <StatsAndReviews />
      <PythonFoundation />
      <Partners />
      <UpcomingEvents />
      <Sponsors />
    </main>
  );
}
