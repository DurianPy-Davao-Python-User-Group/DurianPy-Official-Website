'use client';

import { Container } from '@/components/ui/container';
import EventCard from './EventCard';
import CountdownTimer from './CountdownTimer';

export function UpcomingEvents() {
  return (
    <section className="bg-[#112018] py-16 font-montserrat flex justify-center">
      <Container>
        {/* Section Title */}
        <h2 className="text-white text-[2.75rem] font-bold text-left mb-4">
          Upcoming <span className="text-yellow-500">Events</span>
        </h2>

        {/* Main Event */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#1A3E2A] to-[#3EB372] p-5 rounded-lg border-[#36FF90] border-[0.96px] w-[1050px] h-[240px] mx-auto relative">
          {/* Main Event Details */}
          <div className="w-full md:w-[50%] p-4 mt-[-10px]">
            <EventCard
              title="Pycon Mini Davao"
              date="Date"
              location="Location"
              variant="main"
            />
            <div className="mt-5 flex justify-left">
              <button
                onClick={() => (window.location.href = '/404')}
                className="bg-yellow-500 text-black font-medium px-5 py-2 rounded-[40px] transition-transform transform hover:scale-105 shadow-lg focus:outline-none active:bg-yellow-600"
              >
                Register Here
              </button>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="w-full md:w-[50%] p-6 flex justify-center items-center relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-[85%] bg-[#36FF90] rounded-full"></div>
            <CountdownTimer eventDate="2025-06-20T00:00:00Z" />
          </div>
        </div>

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
