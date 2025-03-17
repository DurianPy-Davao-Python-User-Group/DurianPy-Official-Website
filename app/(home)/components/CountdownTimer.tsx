'use client';

import { useEffect, useState } from 'react';
import { formatDistanceStrict } from 'date-fns';

interface CountdownTimerProps {
  eventDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ eventDate }) => {
  const targetDate = new Date(eventDate).getTime();
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(formatDistanceStrict(new Date(), targetDate));
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return <p className="text-2xl font-bold">{timeLeft}</p>;
};

export default CountdownTimer;
