'use client';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const circles = [
  { left: '8%', top: '10%' },
  { left: '15%', top: '45%' },
  { left: '75%', top: '30%' },
  { left: '90%', top: '40%' },
];

const handleRedirect = (url: string) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
};

export function Hero() {
  const circleRefs = useRef<(SVGSVGElement | null)[]>([]);

  useGSAP(() => {
    circleRefs.current.forEach((circle, index) => {
      if (circle) {
        gsap.fromTo(
          circle,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1.2,
            duration: 2 + index * 0.5, // Different timing per circle
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          }
        );
      }
    });
  });

  return (
    <>
      <section className="relative bg-dark-green overflow-clip">
        {/* All Background elements */}
        <div>
          <div className="absolute inset-0 bg-[url('/image/rectangle.svg')] bg-cover bg-no-repeat bg-center top-[45%] blur-md scale-x-[2] md:scale-y-[1.3] lg:top-[65%] lg:scale-y-[1.7] height-1000:top-[50%]" />
          <div className="absolute inset-0 bg-[url('/image/ellipse.svg')] bg-no-repeat bg-contain bg-center scale-x-[1.8] scale-y-[2.4] top-[72%] md:top-[73%] md:bg-contain md:scale-x-[3.5] height-1000:top-[71%]" />
          <Image
            src="/image/gear.svg"
            height={600}
            width={600}
            alt="a"
            priority
            className="absolute right-[90%] top-[30%] scale-[135%] md:scale-[105%] lg:scale-[120%] md:hidden lg:block lg:top-[5%] lg:right-[80%] -rotate-12 blur-sm w-auto h-auto xl:scale-[140%] xl:right-0 xl:left-[-28%] xl:top-[10%] width-1912:left-[-22%]"
          />
          <Image
            src="/image/gear.svg"
            height={600}
            width={600}
            alt="a"
            priority
            className="absolute left-[70%] top-[50%] right-[6%] scale-[115%] md:scale-100 md:right-[15%] rotate-180 md:rotate-[200deg] blur-sm w-auto h-auto md:hidden lg:block xl:top-[50%] xl:left-[80%] xl:scale-[130%] width-1912:left-[80%] width-1912:scale-150 height-1000:top-[70%]"
          />
          <div
            className="absolute inset-0 h-[30%] w-full top-[80%] md:top-[82%] blur-sm scale-x-[2]"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.67) 36.9%, #FFF 65.4%, rgba(255, 255, 255, 0.00) 100%)`,
            }}
          />
        </div>

        {/* Animated Pulsing Circles */}
        <div>
          {circles.map(({ left, top }, index) => (
            <svg
              key={index}
              ref={(el) => {
                circleRefs.current[index] = el;
              }} // Assign ref
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 92 92"
              fill="none"
              className="absolute w-auto h-8 md:h-14"
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
        <Container className="justify-center flex items-center min-h-screen">
          <div className="relative flex flex-col place-items-center justify-center text-center gap-8">
            <div className="flex flex-col">
              <Image
                src="/assets/logo.svg"
                height={64}
                width={64}
                className="w-auto h-32 md:h-44"
                alt="Durianpy Logo"
                priority={true}
              />
              <p className="font-montserrat text-sm scale-[1.20] w-[80%] md:scale-[1.25] md:text-xl mb-7 md:w-full mx-auto tracking-wider text-white">
                Accelerating <span className="text-primary">Davao&apos;s</span>{' '}
                Tech Growth with <br /> <span>Python</span>
              </p>
            </div>

            <div className="flex flex-col md:gap-4 lg:pb-12">
              <Button
                variant={'hero-primary'}
                size={'default'}
                onClick={() =>
                  handleRedirect('https://www.meetup.com/durianpy/')
                }
                className="scale-[80%] w-48 md:scale-100"
              >
                Attend an Event
              </Button>
              <Button
                variant={'hero-secondary'}
                onClick={() =>
                  handleRedirect('https://forms.gle/x2cc6CrRhbhDeaxe9')
                }
                className="scale-[80%] w-32 md:scale-100"
              >
                Give a Talk
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
