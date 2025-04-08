'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  eventDate: string;
}

export default function CountdownTimer({ eventDate }: CountdownTimerProps) {
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    if (difference > 0) {
      return {
        days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
        seconds: formatNumber(Math.floor((difference / 1000) % 60)),
      };
    }
    return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate, calculateTimeLeft]);

  if (!isClient) return null;

  return (
    <div className="bg-none p-2 w-full text-[#36FF90] md:w-auto">
      <h2 className="text-sm font-bold mb-8 md:mb-6 xl:text-5xl text-center hidden xl:block">
        COMING SOON
      </h2>
      <h2 className="text-[1rem] font-bold mb-2 md:mb-3 lg:text-[40px] md:text-3xl text-center block lg:block xl:hidden">
        PYCON COUNTDOWN
      </h2>
      <div className="flex justify-center gap-4 md:space-x-8 text-center text-2xl lg:text-[75px] md:text-[55px] xl:text-[60px] leading-[100%]">
        <div>
          <p className="text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.days}`}</p>
          <p className="text-sm md:text-xl">DAYS</p>
        </div>
        <div>
          <p className="text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.hours}`}</p>
          <p className="text-sm md:text-xl">HRS</p>
        </div>
        <div>
          <p className="text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.minutes}`}</p>
          <p className="text-sm md:text-xl">MIN</p>
        </div>
        <div>
          <p className="text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.seconds}`}</p>
          <p className="text-sm md:text-xl">SEC</p>
        </div>
      </div>
    </div>
  );
}
