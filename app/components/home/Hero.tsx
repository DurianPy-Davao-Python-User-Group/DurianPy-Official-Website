import { Container } from '../ui/Container';
import Image from 'next/image';
import { useMemo } from 'react';

export function Hero() {
  const numCircles = 4;
  const minDuration = 3; // Min animation duration (seconds)
  const maxDuration = 7; // Max animation duration (seconds)
  const durations = useMemo(() => 
    Array.from({ length: numCircles }, () => 
      (Math.random() * (maxDuration - minDuration) + minDuration).toFixed(2)
    ), 
  []);

  const circles = [
    { left: '8%', top: '10%', size: 70 },
    { left: '15%', top: '45%', size: 70 },
    { left: '75%', top: '30%', size: 70 },
    { left: '90%', top: '40%', size: 70 },
  ];

  return (
    <>
    {/* css styles for the pulsing circles */}
      <style>
        {circles.map((_, index) => `
          @keyframes smooth-light-${index} {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-smooth-light-${index} {
            animation: smooth-light-${index} ${durations[index]}s ease-in-out infinite;
          }
        `).join('\n')}
      </style>

      <section className="relative bg-dark-green overflow-clip">
        {/* Background elements */}
        <div>
          <Image src="/image/ellipse.svg" height={375} width={500} alt="" className="absolute bottom-0 scale-x-[2.5] scale-y-[3.5] md:scale-x-[4] md:scale-y-[3] md:translate-x-[70%] lg:translate-x-full md:translate-y-1/2 blur-sm"/>
          <Image src="/image/blender.svg" height={1080} width={3020} alt="" className="absolute bottom-0 scale-y-[110%] translate-y-[30%]"/>
          <Image src="/image/gear.svg" height={600} width={600} alt="" className="absolute translate-x-[-80%] top-0 scale-[135%] md:translate-x-[-65%] md:translate-y-[15%] -rotate-12 blur-sm"/>
          <Image src="/image/gear-2.svg" height={600} width={600} alt="" className="absolute scale-125 right-0 bottom-0 translate-x-[75%] -translate-y-[15%] md:translate-x-[60%] md:translate-y-[60%] blur-sm"/>
        </div>

        {/* Animated Pulsing Circles */}
        <div className="hidden lg:block">
          {circles.map(({ left, top, size }, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
              viewBox="0 0 92 92"
              fill="none"
              className={`absolute animate-smooth-light-${index}`}
              style={{ left, top }}
            >
              <g filter="url(#filter0_f_514_198)">
                <circle cx="45.7231" cy="45.7231" r="22.7231" fill="#FFC201" />
              </g>
              <defs>
                <filter id="filter0_f_514_198" x="0.0474129" y="0.0474129" width="91.3512" height="91.3513"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="11.4763" result="effect1_foregroundBlur_514_198" />
                </filter>
              </defs>
            </svg>
          ))}
        </div>

        {/* Hero section */}
        <Container className="h-screen justify-center flex items-center">
          <div className="relative flex flex-col items-center justify-center pt-20 pb-16 text-center gap-8 lg:gap-0">

            <div className="flex flex-col gap-6 lg:gap-10 lg:mb-8">
              <div className="mx-auto">
                <Image src="/image/durianpy-logo.svg" height={400} width={300} alt="Durianpy Logo" className="lg:scale-150" />
              </div>
              <p className="text-xl md:text-3xl mb-8 px-10 md:w-[90%] mx-auto">
                Accelerating <span className="text-primary">Davao&apos;s</span> Tech Growth with Python
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:pb-12">
              <button className="bg-[#112018] text-[#3EB372] font-semibold py-2 px-8 rounded-full opacity-90 shadow-md hover:scale-105 transition-transform duration-300">
                Attend an Event
              </button>
              <button className="border-[1px] border-dark-green text-[#112018] font-normal py-2 px-4 rounded-full opacity-90 w-36 mx-auto shadow-md hover:scale-105 transition-transform duration-300">
                Give a Talk
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
