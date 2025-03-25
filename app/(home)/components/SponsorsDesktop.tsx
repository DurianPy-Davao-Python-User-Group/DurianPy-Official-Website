'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

interface SponsorshipProps {
  name: string;
  logo: string;
  logoMobile: string;
  testimonial: string;
  url: string;
}

const SponsorsDesktop = ({ sponsors }: { sponsors: SponsorshipProps[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const onMouseLeave = () => {
    if (api) {
      plugin.current.play();
    }
  };

  const onMouseEnter = (index?: number) => {
    if (!api) {
      return;
    }

    if (index != null) {
      api.scrollTo(index);
    }

    plugin.current.stop();
  };

  return (
    <div className="xl:grid xl:grid-cols-3 lg:flex lg:flex-col lg:h-auto text-white gap-x-4">
      {/* Description Section */}
      <div className="space-y-16 xl:mb-28 lg:flex-1 lg:h-auto">
        <div className="space-y-6 max-w-[365px] mx-auto xl:mx-0">
          <h1 className="text-primary text-[80px] leading-none font-bold "><span className='text-white'>Our</span> Sponsor</h1>
          <p className="text-xl text-left">
            A big thank you to our generous sponsors whose support makes our work possible and helps us create lasting impact.
          </p>
        </div>

        <div className="max-w-[365px] mx-auto">
          <div className="relative w-full">
            <div className="opacity-40 w-1/2 bg-gradient-to-r from-[#36FF90] to-transparent h-full absolute blur-md"></div>
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 lg:flex-1 lg:h-auto flex">
        <div
          className="grid grid-cols-10 grid-rows-8 gap-x-4 gap-y-2 p-6 w-full xl:h-full lg:h-full scale-75 origin-top"
        >
          <Carousel>
            <CarouselContent>
              {sponsors.map((sponsor, index) => (
                <CarouselItem key={index}>
                  <div className="relative group transition-all duration-500 col-span-10 row-span-2 ease-in-out">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00833A] to-[rgba(62,179,114,0)] opacity-0 transition-opacity duration-500 rounded-lg group-hover:opacity-100"></div>

                    <Link
                      href={sponsor.url}
                      target="_blank"
                      className="border border-[#36FF90] rounded-lg xl:px-6 xl:py-4 lg:p-6 w-full h-full flex justify-center items-center"
                    >
                      {/* Logo Container */}
                      <div className="w-full h-full xl:min-h-0 lg:min-h-[200px] md:min-h-[160px] relative flex justify-center items-center transition-transform duration-500 ease-in-out hover:scale-105">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          loading="lazy"
                          fill
                          // className={cn(
                          //   'object-contain',
                          //   'w-full h-full',
                          //   'md:scale-[0.80]',
                          //   'lg:scale-100'
                          // )}
                          onMouseEnter={() => onMouseEnter(index)}
                          onMouseLeave={() => onMouseLeave()}
                        />
                      </div>
                      {/* <p className="text-xl">{sponsor.testimonial}</p> */}
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className= "relative group transition-all duration-500 col-span-3 row-span-4 ease-in-out"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00833A] to-[rgba(62,179,114,0)] opacity-0 transition-opacity duration-500 rounded-lg group-hover:opacity-100"></div>

              <Link
                href={sponsor.url}
                target="_blank"
                className="border border-[#36FF90] rounded-lg xl:px-6 xl:py-4 lg:p-6 w-full h-full flex justify-center items-center"
              >
                {/* Logo Container */}
                <div className="w-full h-full xl:min-h-0 lg:min-h-[200px] md:min-h-[160px] relative flex justify-center items-center transition-transform duration-500 ease-in-out hover:scale-105">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    loading="lazy"
                    fill
                    className={cn(
                      'object-contain',
                      sponsor.name === 'PizzaPy'
                        ? 'object-cover'
                        : 'object-contain',
                      'w-full h-full',
                      'md:scale-[0.80]',
                      'lg:scale-100'
                    )}
                    onMouseEnter={() => onMouseEnter(index)}
                    onMouseLeave={() => onMouseLeave()}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsDesktop;
