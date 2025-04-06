'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface SponsorshipProps {
  name: string;
  logo: string;
  logoMobile: string;
  testimonial: string;
  url: string;
}

const SponsorsDesktop = ({ sponsors }: { sponsors: SponsorshipProps[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // State to hold the featured sponsor
  const [featuredSponsor, setfeaturedSponsor] = useState<SponsorshipProps>(
    sponsors[0]
  );

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);

    // Set the current index to the first item
    api.scrollTo(2);

    api.on('select', () => {
      const currentIndex = api.selectedScrollSnap();
      const correctedCurrentIndex = (currentIndex + 3) % sponsors.length;
      setCurrent(correctedCurrentIndex);
      setfeaturedSponsor(sponsors[correctedCurrentIndex]);
    });
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const autoPlayInteraction = () => {
    plugin.current.stop();
    // Wait for 5 seconds before resuming autoplay but when the user clicks it cancel the autoplay
    setTimeout(() => {
      if (api) {
        plugin.current.play();
      }
    }, 5000);
  };

  const carouselFeaturedAnimation = (
    sponsor: SponsorshipProps,
    index: number
  ) => {
    setfeaturedSponsor(sponsor);
    api?.scrollTo(index + 2);
    updateButton(index);
    autoPlayInteraction();
  };

  const updateButton = (index: number) => {
    setCurrent(index);
    api?.scrollTo(index + 2);
    setfeaturedSponsor(sponsors[index]);
    autoPlayInteraction();
  };

  return (
    <div className="xl:grid xl:grid-cols-[1fr_2fr] md:flex md:flex-col md:h-auto text-white gap-x-8 py-16 items-center ">
      {/* Description Section */}
      <div className="space-y-16 xl:mb-28 lg:flex-1 lg:h-auto md:flex-1 md:h-auto w-[480px]">
        <div className="space-y-9 xl:mx-0">
          <h1 className="text-primary text-[80px] leading-none font-bold mb-12">
            <span className="text-white">Our</span> Sponsors
          </h1>
          <p className="text-xl text-left mb-12 min-w-10">
            A big thank you to our generous sponsors whose support makes our
            work possible and helps us create lasting impact.
          </p>
          <Button
            variant={'sponsor-be-our-sponsor'}
            onClick={() => {
              window.location.href = '/404';
            }}
          >
            Be Our Sponsor
          </Button>
        </div>

        <div className="max-w-[365px] mx-auto">
          <div className="relative w-full">
            <div className="opacity-40 w-1/2 bg-gradient-to-r from-[#36FF90] to-transparent h-full absolute blur-md"></div>
          </div>
        </div>
      </div>

      <div className="pb-36 w-[633px] xl:ml-16">
        {/* Featured Section */}
        {featuredSponsor && (
          <div className="flex-1 h-[418px] mb-4">
            <Link
              href={featuredSponsor.url}
              target="_blank"
              className="border border-[#ffffff] rounded-lg xl:px-10 xl:py-4 lg:p-6 w-full h-full flex flex-col justify-center items-center overflow-hidden"
            >
              <div className="w-full h-[200px] relative flex justify-center items-center transition-transform duration-500 ease-in-out hover:scale-105">
                <Image
                  src={featuredSponsor.logo}
                  alt={featuredSponsor.name}
                  loading="lazy"
                  fill
                  className={cn(
                    'object-contain',
                    featuredSponsor.name === 'PythonPH'
                      ? 'scale-150' // Increase the size for specific sponsors
                      : '',
                    'w-full',
                    'h-full',
                    'p-12'
                  )}
                />
              </div>
              <div className="h-[50px] w-[480px] flex items-center">
                {/* Icon */}
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 20"
                    fill="white"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-quote-icon lucide-quote text-[#ffffff] transform rotate-180 w-6 h-6"
                  >
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                {/* Horizontal Line */}
                <div className="w-[440px] h-[1.5px] bg-[#FFFFFF]"></div>
              </div>
              <p className="lg:text-xl mt-4 text-[12px] max-md:m-5 pr-3 pl-3">
                {featuredSponsor.testimonial}
                <br></br>
                <br></br>— {featuredSponsor.name}
              </p>
            </Link>
          </div>
        )}

        {/* Carousel Section */}
        <div className="flex-1 h-auto flex relative">
          {/*Carousel Body*/}
          <Carousel
            className="w-full flex h-full"
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              loop: true,
            }}
          >
            {/* Previous Button */}
            <a onClick={autoPlayInteraction}>
              <CarouselPrevious className="absolute left-[-64px] z-10 h-16 w-16 sm:w-20 sm:h-20" />
            </a>

            {/* Carousel Content */}
            <CarouselContent>
              {sponsors.map((sponsor, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div
                    key={index}
                    className="relative group transition-all duration-500 col-span-3 row-span-4 ease-in-out h-[166px] w-[200px]
                  "
                    onClick={() => carouselFeaturedAnimation(sponsor, index)}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00833A] to-[rgba(62,179,114,0)] opacity-0 transition-opacity duration-500 rounded-lg group-hover:opacity-100"></div>

                    <div className="border border-[#ffffff] rounded-lg xl:px-6 xl:py-4 lg:p-6 w-full h-full flex justify-center items-center">
                      {/* Logo Container */}
                      <div className="min-h-[160px] min-w-[160px] relative flex justify-center items-center transition-transform duration-500 ease-in-out hover:scale-105">
                        <div className="">
                          <Image
                            src={sponsor.logoMobile}
                            alt={sponsor.name}
                            loading="lazy"
                            fill
                            className={cn(
                              'object-contain',
                              sponsor.name === 'PythonPH'
                                ? 'scale-75'
                                : 'scale-100',
                              'w-full',
                              'h-full'
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Next Button */}
            <a onClick={autoPlayInteraction}>
              <CarouselNext className="absolute right-[-64px] z-10 h-16 w-16 sm:w-20 sm:h-20" />
            </a>
          </Carousel>
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => updateButton(index)}
              className={cn(
                'w-3 h-3 rounded-full mx-1',
                current === index ? 'bg-primary' : 'bg-gray-400'
              )}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsDesktop;
