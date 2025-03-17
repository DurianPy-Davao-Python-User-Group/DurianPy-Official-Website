import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import EventCard from './EventCard';
import CountdownTimer from './CountdownTimer';

export function UpcomingEvents() {
  return (
    <section className="bg-[#112018] py-16 font-montserrat">
      <Container>
        {/* Section Title */}
        <h2 className="text-white text-4xl font-bold text-center mb-8">
          Upcoming <span className="text-yellow-500">Events</span>
        </h2>

        {/* Featured Event with Countdown */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 p-6 rounded-xl text-white">
          <h3 className="text-2xl font-semibold">Event Name</h3>
          <p className="text-sm opacity-80">
            Event Date <br /> Event Location
          </p>
          <div className="flex items-center justify-between mt-4">
            <CountdownTimer eventDate={'2025-06-20T00:00:00'} />
          </div>
          <Button className="mt-4 bg-yellow-500 text-black font-bold px-6 py-2 rounded-[40px] transition-transform transform hover:scale-105 shadow-xl hover:bg-yellow-500">
            Register Here
          </Button>
        </div>

        {/* Other Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Replace with dynamic event data */}
          <EventCard title="Event 1" date="Date" location="Davao City" />
          <EventCard title="Event 2" date="Date" location="Davao City" />
          <EventCard title="Event 3" date="Date" location="Davao City" />
        </div>
      </Container>
    </section>
  );
}
