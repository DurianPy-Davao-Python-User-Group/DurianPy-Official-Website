import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CountdownTimer from './CountdownTimer';
import Link from 'next/link';

export interface Event {
  title: string;
  date: string | string[];
  location: string;
  variant: 'main' | 'regular'; // "main" for the featured event, "regular" for other events
  link: string;
}

export default function EventCard({ event }: { event: Event }) {
  const getDisplayDate = (date: string | string[]) => {
    if (Array.isArray(date)) {
      if (date.length === 0) return '';
      if (date.length === 1) return date[0];
      return `${date[0]} - ${date[date.length - 1]}`;
    }
    return date;
  };

  const getFirstDateString = (date: string | string[]) => {
    return Array.isArray(date) ? (date[0] ?? '') : date;
  };

  return (
    <div
      className={cn(
        'rounded-md border py-4 border-midori-green bg-medium-dark-green text-center xl:py-10',
        event.variant !== 'main' &&
          'transition-transform duration-200 hover:scale-105',
        event.variant === 'main' &&
          'bg-gradient-ltr-darkgreen-lightgreen py-8 lg:py-14 max-w-[80%] md:max-w-[80%] lg:max-w-[80%] mx-auto xl:text-left md:px-6 xl:px-14 xl:py-7 xl:flex xl:max-w-[100%] xl:justify-between hover:'
      )}
    >
      <div>
        <h2
          className={cn(
            'font-semibold text-sm lg:text-2xl md:text-xl xl:text-[40px] xl:mb-2',
            event.variant === 'main' &&
              'text-[20px] mb-2 lg:text-5xl lg:mb-3 md:text-3xl xl:text-[45px]'
          )}
        >
          {event.title}
        </h2>
        <p
          className={cn(
            'text-[8px] lg:text-[15px] md:text-[11px] xl:text-xl space-y-1',
            event.variant === 'main' &&
              'text-xs lg:text-xl md:text-[17px] md:leading-tight'
          )}
        >
          {getDisplayDate(event.date)} <br /> {event.location}
        </p>
        {event.variant === 'main' && (
          <Button
            disabled={!event.link}
            className="mx-auto mt-5 text-[10px] font-medium text-dark-green px-[10px] py-[6px] bg-primary hover:scale-105 hover:bg-primary transition-transform duration-300 rounded-full md:py-[9px] md:px-5 md:text-[12px] lg:py-[12px] lg:px-6 lg:text-[16px] xl:mx-0 xl:text-2xl"
          >
            {event.link ? (
              <Link href={event.link} target="_blank">
                Register Here
              </Link>
            ) : (
              <Link href={'/#'}>Registration coming soon</Link>
            )}
          </Button>
        )}
      </div>

      {event.variant === 'main' && (
        <div className="hidden xl:block border-4 rounded-full border-midori-green"></div>
      )}

      {event.variant === 'main' && (
        <div className="hidden xl:block mr-8">
          <CountdownTimer eventDate={getFirstDateString(event.date)} />
        </div>
      )}
    </div>
  );
}
