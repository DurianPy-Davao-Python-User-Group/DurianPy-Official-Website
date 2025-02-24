'use client';
import { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/container';
import CountUp from 'react-countup';

export function StatsAndReviews() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} className="bg-green-900 py-16 text-white">
      <Container>
        <div className="flex flex-col items-center px-8 xl:px-[320px] 2xl:flex-row 2xl:px-0 2xl:justify-between">
          <div className="w-full">
            {/* Section Title */}
            <div className="text-center 2xl:text-left text-3xl xl:text-7xl font-bold xl:leading-none text-white pb-7 px-2 sm:px-10 md:px-16 lg:px-10 xl:px-20 2xl:px-5">
              <h2>
                Statistics <span className="text-midoriGreen">&</span> <br />
                <span className="text-centerStage">Reviews</span>
              </h2>
            </div>

            {/* Section Description */}
            <div
              className="text-center 2xl:text-left pb-7 xl:pb-[121px] sm:px-10 md:px-16 
                lg:px-32 xl:px-10 2xl:px-5 lg:pr-99 2xl:pr-72"
            >
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
          <div className="text-white grid grid-cols-2 grid-rows-2 gap-4 h-52 2xl:h-max mt-12 sm:mt-5 md:mt-5 lg:mt-5 xl:-mt-14">
            {/* Active Members */}
            <div className="bg-green-900 p-4 border border-white rounded-lg grid place-content-center hover:bg-mintBliss/20 hover:border-mintBliss hover:text-mintBliss transition-colors duration-300">
              <div className="text-center">
                <span className="text-4xl font-bold">
                  {isVisible && <CountUp start={0} end={350} duration={3} />}+
                </span>
                <br />
                <span className="text-xs">Active Members</span>
              </div>
            </div>

            {/* Monthly Meetup Attendees */}
            <div className="row-span-2 bg-green-900 p-6 border border-white rounded-lg grid place-content-center hover:bg-mintBliss/20 hover:border-mintBliss hover:text-mintBliss transition-colors duration-300">
              <div className="text-center">
                <span className="text-4xl font-bold">
                  {isVisible && <CountUp start={0} end={150} duration={3} />}+
                </span>
                <br />
                <span className="text-xs">Participants at PyConf Mini Davao 2024</span>
              </div>
            </div>

            {/* Events Hosted */}
            <div className="bg-green-900 p-6 border border-white rounded-lg grid place-content-center hover:bg-mintBliss/20 hover:border-mintBliss hover:text-mintBliss transition-colors duration-300">
              <div className="text-center">
                <span className="text-4xl font-bold">
                  {isVisible && <CountUp start={0} end={20} duration={3} />}+
                </span>
                <br />
                <span className="text-xs">Monthly Meetups</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
