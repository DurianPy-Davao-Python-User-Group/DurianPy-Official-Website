'use client';

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import EventCard from './EventCard';

interface Event {
  title: string;
  date: string;
  location: string;
  variant: 'main' | 'regular';
  link: string;
}

const EventCarousel = ({ events }: { events: Event[] }) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CarouselContainer
      opts={{
        align: 'start',
      }}
      orientation={width <= 640 ? 'vertical' : 'horizontal'}
      className="max-w-[60%] md:max-w-[80%] 2xl:max-w-full mx-auto"
    >
      <CarouselContent className="max-h-[200px] md:max-h-full">
        {events.map((event, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 2xl:basis-1/3">
            <EventCard event={event} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
};

export default EventCarousel;
