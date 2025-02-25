'use client';
import { Container } from '../ui/container';
import Image from 'next/image';
import { Button } from '../ui/button';

const numCircles = 4;
const minDuration = 3;
const maxDuration = 7;
const durations = Array.from(
  { length: numCircles },
  (_, i) =>
    ((i / numCircles) * (maxDuration - minDuration) + minDuration).toFixed(2) // Ensures consistent values
);

const circles = [
  { left: '8%', top: '10%', size: 70 },
  { left: '15%', top: '45%', size: 70 },
  { left: '75%', top: '30%', size: 70 },
  { left: '90%', top: '40%', size: 70 },
];


export function Hero() {
  const handleRedirect = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      {/* css styles for the pulsing circles */}
      <style>
        {circles
          .map(
            (_, index) => `
          @keyframes smooth-light-${index} {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-smooth-light-${index} {
            animation: smooth-light-${index} ${durations[index]}s ease-in-out infinite;
          }
        `
          )
          .join('\n')}
      </style>

      <section className="relative bg-dark-green overflow-clip">
        {/* Background elements */}
        <div>
          <div className="absolute inset-0 bg-[url('/image/rectangle.svg')] bg-cover bg-center h-1/3 scale-x-[1.5] top-[35%] opacity-30 md:h-1/2 md:opacity-65 md:top-[45%] blur-lg" />
          <div className="absolute w-full h-full bg-[url('/image/ellipse.svg')] bg-no-repeat bg-cover bg-center md:bg-contain top-[50%] md:top-[40%] lg:top-[50%] lg:scale-x-[120%]" />
          <Image
            src="/image/gear.svg"
            height={600}
            width={600}
            alt="a"
            priority
            className="absolute translate-x-[80%] top-1/2 scale-[120%] md:scale-100 md:right-[15%] rotate-180 md:rotate-[210deg] blur-sm w-auto h-auto lg:right-[10%]"
          />
          <div className="absolute inset-0 bg-[url('/image/blender.svg')] bg-no-repeat blur-md scale-x-125 h-1/2 translate-y-[135%] scale-y-50" />
          <Image
            src="/image/gear.svg"
            height={600}
            width={600}
            alt="a"
            priority
            className="absolute translate-x-[-80%] top-0 scale-[135%] md:scale-[105%] md:translate-x-[-65%] md:translate-y-[15%] lg:scale-[135%] -rotate-12 blur-sm w-auto h-auto"
          />
        </div>

        {/* Animated Pulsing Circles */}
        <div className="hidden md:block">
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
                <filter
                  id="filter0_f_514_198"
                  x="0.0474129"
                  y="0.0474129"
                  width="91.3512"
                  height="91.3513"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="11.4763"
                    result="effect1_foregroundBlur_514_198"
                  />
                </filter>
              </defs>
            </svg>
          ))}
        </div>

        {/* Hero section */}
        <Container className="justify-center flex items-center min-h-screen md:min-h-[600px] lg:min-h-screen">
          <div className="relative flex flex-col items-center justify-center pt-20 pb-16 text-center gap-8 lg:gap-0">
            <div className="flex flex-col lg:gap-4 lg:mb-8">
              <div className="mx-auto">
                <Image
                  src="/assets/logo.svg"
                  height={300}
                  width={300}
                  className='md:scale-150'
                  alt="Durianpy Logo"
                  priority={true}
                />
              </div>
              <p className="font-montserrat text-xl md:text-3xl mb-7 px-8 md:w-[90%] mx-auto tracking-wider text-white">
                Accelerating <span className="text-primary">Davao&apos;s</span>{' '}
                Tech Growth with Python
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:pb-12">
              <Button variant={'hero-primary'} size={'default'} onClick={() => handleRedirect('https://www.meetup.com/durianpy/')}>
                Attend an Event
              </Button>
              <Button variant={'hero-secondary'} onClick={() => handleRedirect('https://forms.gle/x2cc6CrRhbhDeaxe9')}>
                Give a Talk
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
