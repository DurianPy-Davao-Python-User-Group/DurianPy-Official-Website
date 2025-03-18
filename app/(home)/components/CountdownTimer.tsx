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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-none text-[#36FF90] p-2 w-[100%] md:w-auto">
      <h2 className="text-[1.75rem] font-bold mb-2">COMING SOON</h2>
      <div className="flex justify-center space-x-8 text-center font-light">
        <div>
          <p className="text-[3.25rem] w-[70px] text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.days}`}</p>
          <p className="text-md">DAYS</p>
        </div>
        <div>
          <p className="text-[3.25rem] w-[70px] text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.hours}`}</p>
          <p className="text-md">HRS</p>
        </div>
        <div>
          <p className="text-[3.25rem] w-[70px] text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.minutes}`}</p>
          <p className="text-md">MIN</p>
        </div>
        <div>
          <p className="text-[3.25rem] w-[70px] text-center tabular-nums tracking-[-0.05em]">{`${timeLeft.seconds}`}</p>
          <p className="text-md">SEC</p>
        </div>
      </div>
    </div>
  );
}
