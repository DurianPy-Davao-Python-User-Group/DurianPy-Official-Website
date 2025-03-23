'use client';

import EventCard from './EventCard';
import CountdownTimer from './CountdownTimer';

export function UpcomingEventsMobile() {
  return (
    <div className="flex flex-col items-center w-full max-w-[90%] mx-auto">
      <h2
        className="text-white font-bold text-center mb-4 lg:hidden
        text-[30px] md:text-4xl sm:text-[24px] leading-tight"
      >
        Upcoming <span className="text-yellow-500">Events</span>
      </h2>
      {/* Main Event Card */}
      <div className="bg-gradient-to-r from-[#1A3E2A] to-[#3EB372] p-4 rounded-lg border-[#36FF90] border-[0.96px] w-[310px] md:w-[500px] sm:w-[70%]">
        <div className="md:mt-2">
          <EventCard
            title="Pycon Mini Davao"
            date="Date"
            location="Location"
            variant="main"
          />
        </div>

        {/* Button inside for iPad (>=768px) */}
        <div className="mt-4 mb-[28px] sm:flex justify-center hidden">
          <button
            onClick={() => (window.location.href = '/404')}
            className="bg-yellow-500 text-black text-[15px] font-medium px-[16px] py-[7px] rounded-[40px] transition-transform shadow-lg focus:outline-none active:bg-yellow-600"
          >
            Register Here
          </button>
        </div>
      </div>

      {/* Button outside for mobile (<768px) */}
      <div className="mt-4 justify-center md:hidden sm:flex">
        <button
          onClick={() => (window.location.href = '/404')}
          className="bg-yellow-500 text-black text-[13px] font-semibold px-[13px] py-[7px] rounded-[40px] transition-transform transform hover:scale-105 shadow-lg focus:outline-none active:bg-yellow-600"
        >
          Register Here
        </button>
      </div>

      {/* Countdown Timer BELOW - Smaller for 1024px */}
      <div className="w-full flex justify-center mt-4 scale-[80%] md:scale-[95%] sm:scale-[80%]">
        <CountdownTimer eventDate="2025-06-20T00:00:00Z" />
      </div>
    </div>
  );
}
