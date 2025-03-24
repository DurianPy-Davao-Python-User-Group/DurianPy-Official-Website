import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CountdownTimer from './CountdownTimer';

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
        'rounded-md border py-4 border-midori-green bg-gradient-ltr-darkgreen-lightgreen text-center lg:text-left md:max-w-[80%] mx-auto lg:px-14 lg:py-7 lg:flex lg:max-w-[100%] lg:justify-between',
        event.variant === 'main' &&
          'bg-gradient-ltr-darkgreen-lightgreen py-8 md:py-14'
      )}
    >
      <div>
        <h2
          className={cn(
            'font-semibold text-sm',
            event.variant && 'text-2xl mb-2 md:text-5xl md:mb-3'
          )}
        >
          {event.title}
        </h2>
        <p className={cn('text-[8px]', event.variant && 'text-xs md:text-xl')}>
          {event.date} <br /> {event.location}
        </p>
        {event.variant === 'main' && (
          <Button className="mx-auto mt-5 font-semibold text-[7px] text-dark-green px-[10px] py-[6px] bg-primary rounded-full md:py-[10px] md:px-5 md:text-xs lg:mx-0 lg:text-2xl">
            Register Here
          </Button>
        )}
      </div>
      <div className='hidden lg:block border-4 rounded-full border-midori-green'></div>
      <div className='hidden lg:block'>
        <CountdownTimer eventDate={new Date(event.date).toISOString()} />
      </div>
    </div>
  );
}
