import { Container } from '@/components/ui/container';
import React from 'react';
import EventCard from './EventCard';
import CountdownTimer from './CountdownTimer';

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
    title: 'RAGs and DAGs',
    date: 'June 20, 2025',
    location: 'Mugna Tech, Davao City',
    variant: 'regular',
    link: '/404',
  },
  {
    title: 'RAGs and DAGs',
    date: 'June 20, 2025',
    location: 'Mugna Tech, Davao City',
    variant: 'regular',
    link: '/404',
  },
  {
    title: 'RAGs and DAGs',
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
      <h1 className="font-montserrat font-bold text-center  text-2xl lg:text-left md:text-[80px] leading-[100%] lg:leading-normal">
        Upcoming <span className="text-primary md:block lg:inline">Events</span>
      </h1>

      {/* Featured */}
      <EventCard event={EVENTS[0]} />

      {/* Countdown Timer */}
      <div className='lg:hidden'>
        <CountdownTimer eventDate={new Date(EVENTS[0].date).toISOString()} />
      </div>

      {/* Other events */}
      <div className=""></div>
    </Container>
  );
};

export default UpcomingEvents;
