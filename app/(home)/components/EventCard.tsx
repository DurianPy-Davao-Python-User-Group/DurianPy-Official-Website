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
        'rounded-md border py-4 border-midori-green bg-medium-dark-green text-center transition-transform duration-200',
        event.variant === 'main'
          ? 'bg-gradient-ltr-darkgreen-lightgreen py-8 md:py-14 md:max-w-[80%] mx-auto 2xl:text-left 2xl:px-14 2xl:py-7 2xl:flex 2xl:max-w-[100%] 2xl:justify-between'
          : 'py-2 md:py-4 2xl:py-8 hover:scale-105 relative'
      )}
    >
      {/* Mobile & iPad View */}
      <div className="block lg:hidden">
        <div>
          <h2
            className={cn(
              'font-semibold text-[12px] md:text-[20px] 2xl:text-[40px] 2xl:mb-2',
              event.variant === 'main' && 'text-2xl mb-2 md:text-5xl md:mb-3'
            )}
          >
            {event.title}
          </h2>
          <p
            className={cn(
              'text-[8px] md:text-[11px] 2xl:text-xl space-y-1',
              event.variant === 'main' ? 'text-xs md:text-xl' : 'mt-1'
            )}
          >
            {event.date} <br /> {event.location}
          </p>
          {event.variant === 'main' && (
            <Button className="mx-auto mt-5 font-semibold text-[7px] text-dark-green px-[10px] py-[6px] bg-primary shadow-md rounded-full md:py-[10px] md:px-5 md:text-xs 2xl:mx-0 2xl:text-2xl">
              <Link href="/404">Register Here</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Desktop View*/}
      {event.variant === 'main' ? (
        <div className="hidden lg:flex w-full items-center justify-between bg-gradient-ltr-darkgreen-lightgreen px-6 my-[-20px] lg:my-[-30px] rounded-md 2xl:px-10 2xl:py-7">
          {/* Left Section: Event Details */}
          <div className="flex-1 flex flex-col text-left px-4">
            <h2 className="font-medium text-2xl xl:text-[43px] lg:text-[32px] lg:mb-2">
              {event.title}
            </h2>
            <p className="mt-2 lg:mt-1 text-xs lg:text-[17px] md:text-xl">
              {event.date} <br /> {event.location}
            </p>
            <Button className="mt-6 bg-primary w-[150px] text-black text-[17px] px-4 py-2 rounded-full shadow-md transition-transform duration-200 hover:scale-105">
              <Link href="/404">Register Here</Link>
            </Button>
          </div>

          {/* Vertical Separator */}
          <div className="w-[6px] h-[180px] lg:h-[170px] bg-midori-green mx-auto rounded-full"></div>

          {/* Right Section: Countdown Timer */}
          <div className="flex-1 flex justify-center xl:scale-[78%] lg:scale-[63%] xl:mr-[-45px] xl:ml-[-22px] lg:mr-[-95px] lg:ml-[-66px]">
            <CountdownTimer eventDate={new Date(event.date).toISOString()} />
          </div>
        </div>
      ) : (
        <div className="hidden lg:block p-6 xl:py-4 lg:py-2">
          {/* Regular Events */}
          <h2 className="font-medium text-2xl xl:text-[34px] lg:text-[26px]">
            {event.title}
          </h2>
          <p className="text-sm xl:text-[18px] xl:mt-2 lg:text-sm">
            {event.date} <br /> {event.location}
          </p>
        </div>
      )}
    </div>
  );
}
