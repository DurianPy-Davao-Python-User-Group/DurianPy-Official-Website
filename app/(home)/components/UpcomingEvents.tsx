'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { UpcomingEventsDesktop } from './UpcomingEventsDesktop';
import { UpcomingEventsMobile } from './UpcomingEventsMobile';
import EventCard from './EventCard';

export function UpcomingEvents() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-[#112018] py-12 font-montserrat flex justify-center mb-10">
      <Container>
        {/* Section Title */}
        <h2 className="text-white font-bold text-[30px] md:text-[40px] lg:text-[60px] leading-tight
          text-center md:text-left mb-[20px] 
          hidden lg:block md:hidden">
          Upcoming <span className="text-yellow-500">Events</span>
        </h2>

        {/* Render Desktop or Mobile layout */}
        {isMobile ? <UpcomingEventsMobile /> : <UpcomingEventsDesktop />}

        {/* Regular Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <EventCard title="Event 1" date="Date" location="Location" />
          <EventCard title="Event 2" date="Date" location="Location" />
          <EventCard title="Event 3" date="Date" location="Location" />
        </div>
      </Container>
    </section>
  );
}