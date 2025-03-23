'use client';

import EventCard from './EventCard';
import CountdownTimer from './CountdownTimer';

export function UpcomingEventsDesktop() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center 
        bg-gradient-to-r from-[#1A3E2A] to-[#3EB372] 
        p-6 rounded-lg border-[#36FF90] border-[0.96px] 
        md:w-[90%] lg:w-[900px] xl:w-[1050px] !important mx-auto relative"
    >
      {/* Main Event Details */}
      <div className="w-full md:w-[50%] p-4">
        <EventCard
          title="Pycon Mini Davao"
          date="Date"
          location="Location"
          variant="main"
        />
        <div className="mt-5 flex justify-left">
          <button
            onClick={() => (window.location.href = '/404')}
            className="bg-yellow-500 text-black font-medium px-6 py-2 rounded-[40px] 
              transition-transform transform hover:scale-105 shadow-lg focus:outline-none active:bg-yellow-600"
          >
            Register Here
          </button>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="w-full md:w-[54%] p-6 flex justify-center items-center relative">
        <div className="absolute xl:left-0 lg:left-[-1.05rem] top-1/2 transform -translate-y-1/2 
            w-1.5 h-[85%] bg-[#36FF90] rounded-full"></div>
        <CountdownTimer eventDate="2025-06-20T00:00:00Z" />
      </div>
    </div>
  );
}
