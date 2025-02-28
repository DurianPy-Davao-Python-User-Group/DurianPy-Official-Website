'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
  url: string;
}

const PartnersDesktop = ({ partners }: { partners: PartnersProps[] }) => {
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
      console.log('Moving to index:', index);
      api.scrollTo(index);
    }

    plugin.current.stop();
  };

  return (
    <div className="xl:grid xl:grid-cols-3 lg:flex lg:flex-col lg:h-auto text-white gap-x-4">
      {/* Description Section */}
      <div className="space-y-16 xl:mb-28 lg:flex-1 lg:h-auto">
        <div className="space-y-6 max-w-[365px] mx-auto xl:mx-0">
          <h1 className="text-primary text-[80px] font-bold">Partners</h1>
          <p className="text-xl text-left">
            We collaborate with like-minded organizations to{' '}
            <span className="text-[#36FF90]">
              foster creativity, innovation, and growth.
            </span>{' '}
            Explore our partnerships and see how we create meaningful impact
            together.
          </p>
        </div>

        <div className="max-w-[365px] mx-auto">
          <div className="relative w-full">
            <div className="opacity-40 w-1/2 bg-gradient-to-r from-[#36FF90] to-transparent h-full absolute blur-md"></div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full bg-transparent via-5% to-transparent before:border-4 before:mr-6 before:border-[#36FF90] flex"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={() => onMouseLeave()}
              setApi={setApi}
            >
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index}>
                    <div className="p1">
                      <h2 className="text-primary text-[40px] mb-5 font-bold">
                        {partner.name}
                      </h2>
                      <p className="text-xl">{partner.desc}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex gap-4 mt-7 justify-center items-center">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  'w-3 h-3 rounded-full transition-transform duration-300 mb-10',
                  current === index + 1 ? 'bg-primary' : 'bg-[#B7B7B7]'
                )}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 lg:flex-1 lg:h-auto flex">
        <div
          className="grid grid-cols-10 grid-rows-8 gap-x-4 gap-y-2 p-6 w-full xl:h-full"
          style={{
            transform: 'scale(0.80)',
            transformOrigin: 'top center',
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className={cn(
                'relative group transition-all duration-500 ease-in-out',
                index === 0 && 'col-span-10 row-span-2',
                [1, 5].includes(index) && 'col-span-3 row-span-3',
                index === 2 && 'col-span-4 row-span-4',
                [3, 4].includes(index) && 'col-span-3 row-span-2',
                index === 6 && 'col-span-7 row-span-2'
              )}
            >
              {/* Gradient Overlay (Covers the full box now) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00833A] to-[rgba(62,179,114,0)] opacity-0 transition-opacity duration-500 rounded-lg group-hover:opacity-100"></div>

              <Link
                href={partner.url}
                target="_blank"
                className="border border-[#36FF90] rounded-lg xl:px-6 xl:py-4 lg:p-6 w-full h-full flex justify-center items-center"
              >
                {/* Logo Container */}
                <div className="w-full h-full xl:min-h-0 lg:min-h-[200px] md:min-h-[160px] relative flex justify-center items-center transition-transform duration-500 ease-in-out hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    fill
                    className={cn(
                      'object-contain',
                      partner.name === 'PizzaPy'
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

export default PartnersDesktop;
