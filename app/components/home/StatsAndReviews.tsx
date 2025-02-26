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
      className={`p-4 border border-white rounded-lg flex justify-center items-center lg:w-55 hover:bg-mint-bliss/20 hover:border-mint-bliss hover:text-mint-bliss transition-colors duration-300 ${large ? 'row-span-2 p-6' : ''}`}
    >
      <div className="text-center flex flex-col">
        <p className="text-[2.563rem] md:text-[5rem] width-1440:text-[4.313rem] font-bold">
          {isVisible && <CountUp start={0} end={value} duration={3} />}+
        </p>
        <p className="text-[0.625rem] md:text-[1.375rem] width-1440:text-[1.4rem] leading-[13px] md:leading-[27px] width-1440:leading-[22px]">
          {label}
        </p>
      </div>
    </div>
  );
}

type StatisticsSectionProps = {
  isVisible: boolean;
};

function StatisticsSection({ isVisible }: StatisticsSectionProps) {
  return (
    <div className="text-white grid grid-cols-2 grid-rows-2 gap-4 max-w-[311px] md:max-w-[630px] w-full max-h-[205px] md:max-h-[416px] width-1440:h-[346px] !h-full select-none">
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
    <section ref={sectionRef} className="text-white py-[64px]">
      <Container>
        <div className="flex flex-col justify-center items-center width-1440:flex-row gap-[29px]">
          <div className="w-full flex flex-col gap-[16px] width-1440:gap-[52px]">
            {/* Section Title */}
            <div className="text-center width-1440:text-left text-web-title-font font-bold md:leading-[98px]">
              <h2>
                Statistics <span className="text-midori-green">&</span> <br />
                <span className="text-primary">Reviews</span>
              </h2>
            </div>

            {/* Section Description */}
            <div className="text-white text-web-body-font mx-auto text-center width-1440:text-left width-1440:mx-0 max-w-[300px] md:max-w-[485px]">
              <p>
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
