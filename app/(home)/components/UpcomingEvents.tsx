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
    title: 'Pycon Mini Davao',
    date: 'June 20, 2025',
    location: 'Mugna Tech, Davao City',
    variant: 'main',
    link: '/404',
  },
  {
    title: 'RAGs & DAGs',
    date: 'June 20, 2025',
    location: 'Mugna Tech, Davao City',
    variant: 'regular',
    link: '/404',
  },
  {
    title: 'RAGs & DAGs',
    date: 'June 20, 2025',
    location: 'Mugna Tech, Davao City',
    variant: 'regular',
    link: '/404',
  },
  {
    title: 'RAGs & DAGs',
    date: 'June 20, 2025',
    location: 'Mugna Tech, Davao City',
    variant: 'regular',
    link: '/404',
  },
];

const UpcomingEvents = () => {
  return (
    <Container className="text-white space-y-4 md:space-y-8">
      {/* Title */}
      <h1 className="font-montserrat font-bold text-center text-2xl 2xl:text-left md:text-[80px] leading-[100%] 2xl:leading-normal">
        Upcoming{' '}
        <span className="text-primary md:block 2xl:inline">Events</span>
      </h1>

      {/* Featured */}
      <EventCard event={EVENTS[0]} />

      {/* Countdown Timer */}
      <div className="block md:block lg:hidden">
        <CountdownTimer eventDate={new Date(EVENTS[0].date).toISOString()} />
      </div>

      {/* Other events */}
      <div className="grid grid-cols-1 gap-3 max-w-[40%] md:max-w-[80%] mx-auto md:grid-cols-3 2xl:grid-cols-3 2xl:max-w-[80%]">
        {EVENTS.slice(1).map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>

      {/* See more Events Button */}
      <Button className="bg-primary mx-auto md:max-w-[80%] w-full py-5 text-dark-green 2xl:text-2xl 2xl:max-w-full">
        <Link href="/404">See More Events</Link>
      </Button>
    </Container>
  );
};

export default UpcomingEvents;
