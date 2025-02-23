'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
}

export function PartnersDescriptionCarousel({
  partners,
}: {
  partners: PartnersProps[];
}) {
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

  const resumeAutoplay = () => {
    if (api) {
      plugin.current.play();
    }
  }

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="opacity-40 w-1/2 bg-gradient-to-r from-[#36FF90] to-transparent h-full absolute blur-md"></div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full bg-transparent via-5% to-transparent before:border-4 before:mr-6 before:border-[#36FF90] flex"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => resumeAutoplay()}
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
        {Array.from({ length: count > 5 ? 5 : count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-5 h-5 rounded-full transition-transform duration-300',
              current === index + 1 ? 'bg-primary' : 'bg-[#B7B7B7]',
              current >= 5 && index === 4 && 'bg-primary',
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
