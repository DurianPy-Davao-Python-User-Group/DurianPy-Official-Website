'use client';
import { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/container';
import CountUp from 'react-countup';

type Statistic = {
  id: number;
  value: number;
  label: string;
  large?: boolean;
};

const statistics: Statistic[] = [
  { id: 1, value: 350, label: 'Active Members' },
  {
    id: 2,
    value: 150,
    label: 'Participants at PyConf Mini Davao 2024',
    large: true,
  },
  { id: 3, value: 20, label: 'Monthly Meetups' },
];

type StatsCardProps = {
  value: number;
  label: string;
  isVisible: boolean;
  large?: boolean;
};

function StatsCard({ value, label, isVisible, large }: StatsCardProps) {
  return (
    <div
      className={`p-4 border border-white rounded-lg grid place-content-center hover:bg-mintBliss/20 hover:border-mintBliss hover:text-mintBliss transition-colors duration-300 ${large ? 'row-span-2 p-6' : ''}`}
    >
      <div className="text-center">
        <span className="text-4xl xl:text-7xl font-bold">
          {isVisible && <CountUp start={0} end={value} duration={3} />}+
        </span>
        <br />
        <span className="text-xs xl:text-lg">{label}</span>
      </div>
    </div>
  );
}

type StatisticsSectionProps = {
  isVisible: boolean;
};

function StatisticsSection({ isVisible }: StatisticsSectionProps) {
  return (
    <div className="text-white grid grid-cols-2 grid-rows-2 gap-4 h-58 2xl:h-max mt-12 sm:mt-5 md:mt-5 lg:mt-5">
      {statistics.map((stat) => (
        <StatsCard
          key={stat.id}
          value={stat.value}
          label={stat.label}
          isVisible={isVisible}
          large={stat.large}
        />
      ))}
    </div>
  );
}

export function StatsAndReviews() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-dark-green text-white h-screen"
    >
      <Container>
        <div className="flex flex-col items-center px-8 xl:px-14 2xl:flex-row 2xl:px-0 2xl:justify-between">
          <div className="w-full">
            {/* Section Title */}
            <div className="text-center 2xl:text-left text-3xl lg:text-5xl xl:text-7xl font-bold xl:leading-none text-white pb-7 sm:space-x-10 md:space-x-16 lg:space-x-10 xl:space-x-20 2xl:space-x-5">
              <h2>
                Statistics <span className="text-midoriGreen">&</span> <br />
                <span className="text-centerStage">Reviews</span>
              </h2>
            </div>

            {/* Section Description */}
            <div className="text-center 2xl:text-left xl:text-xl sm:space-x-13 pb-12 md:space-x-15 lg:mx-72 xl:mx-0 2xl:mr-32 lg:space-x-10 xl:space-x-15 2xl:space-x-10">
              <p className="text-white">
                <span className="font-bold">DurianPy</span> is a community for
                Python enthusiasts to learn, share, and connect through monthly
                meetups, workshops, and events. We collaborate with
                organizations to bring valuable learning experiences to
                developers of all levels.
              </p>
            </div>
          </div>

          {/* Section Statistics */}
          <StatisticsSection isVisible={isVisible} />
        </div>
      </Container>
    </section>
  );
}
