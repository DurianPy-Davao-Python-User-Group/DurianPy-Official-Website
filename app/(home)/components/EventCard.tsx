import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CountdownTimer from './CountdownTimer';
import Link from 'next/link';

interface Event {
  title: string;
  date: string;
  location: string;
  variant: 'main' | 'regular'; // "main" for the featured event, "regular" for other events
  link: string;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div
      className={cn(
        'rounded-md border py-4 border-midori-green bg-medium-dark-green text-center 2xl:py-8',
        event.variant !== 'main' &&
          'transition-transform duration-200 hover:scale-105',
        event.variant === 'main' &&
          'bg-gradient-ltr-darkgreen-lightgreen py-8 md:py-14 md:max-w-[80%] mx-auto 2xl:text-left 2xl:px-14 2xl:py-7 2xl:flex 2xl:max-w-[100%] 2xl:justify-between hover:'
      )}
    >
      <div>
        <h2
          className={cn(
            'font-semibold text-sm md:text-2xl 2xl:text-[40px] 2xl:mb-2',
            event.variant === 'main' && 'text-2xl mb-2 md:text-5xl md:mb-3'
          )}
        >
          {event.title}
        </h2>
        <p
          className={cn(
            'text-[8px] md:text-xl 2xl:text-xl space-y-1',
            event.variant === 'main' && 'text-xs md:text-xl'
          )}
        >
          {event.date} <br /> {event.location}
        </p>
        {event.variant === 'main' && (
          <Button className="mx-auto mt-5 text-[7px] text-dark-green px-[10px] py-[6px] bg-primary rounded-full md:py-[10px] md:px-5 md:text-xs 2xl:mx-0 2xl:text-2xl">
            <Link href="/404">Register Here</Link>
          </Button>
        )}
      </div>

      {event.variant === 'main' && (
        <div className="hidden 2xl:block border-4 rounded-full border-midori-green"></div>
      )}

      {event.variant === 'main' && (
        <div className="hidden 2xl:block">
          <CountdownTimer eventDate={new Date(event.date).toISOString()} />
        </div>
      )}
    </div>
  );
}
