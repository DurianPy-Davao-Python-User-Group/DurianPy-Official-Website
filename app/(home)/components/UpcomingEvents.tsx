import { Container } from '@/components/ui/container';
import React from 'react';
import EventCard from './EventCard';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Event {
  title: string;
  date: string;
  location: string;
  variant: 'main' | 'regular';
  link: string;
}

const EVENTS: Event[] = [
  {
    title: 'PyCon Davao 2025',
    date: 'October 25, 2025',
    location: 'Ateneo de Davao University',
    variant: 'main',
    link: '/404',
  },
  {
    title: 'PyCon Davao Sprint Day',
    date: 'October 26, 2025',
    location: 'TBA',
    variant: 'regular',
    link: '/404',
  },
];

const UpcomingEvents = () => {
  return (
    <Container className="text-white space-y-4 lg:space-y-8">
      {/* Title */}
      <h1 className="font-montserrat font-bold text-center text-2xl xl:text-left lg:text-[80px] md:text-[70px] leading-[100%] xl:leading-normal">
        Upcoming <span className="text-primary md:block xl:inline">Events</span>
      </h1>

      {/* Featured */}
      <EventCard event={EVENTS[0]} />

      {/* Countdown Timer */}
      <div className="block lg:block xl:hidden">
        <CountdownTimer eventDate={new Date(EVENTS[0].date).toISOString()} />
      </div>

      {/* Other events */}
      <div className="grid grid-cols-1 gap-5 max-w-[40%] lg:max-w-[80%] md:max-w-[80%] mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:max-w-full">
        {EVENTS.slice(1).map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>

      {/* See more Events Button */}
      <Button className="bg-primary hover:bg-primary mx-auto max-w-[80%] lg:max-w-[80%] md:max-w-[80%] w-full md:py-2 xl:py-4 md:font-medium text-dark-green lg:py-4 lg:text-[15px] py-[4px] font-semibold text-[11px] xl:text-2xl xl:max-w-full">
        <Link href="/404">See More Events</Link>
      </Button>
    </Container>
  );
};

export default UpcomingEvents;
