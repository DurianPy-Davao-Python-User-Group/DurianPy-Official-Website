'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SponsorsProps {
  name: string;
  logoMobile: string;
  description: string;
  url: string;
}

const SponsorsMobile = ({ sponsors }: { sponsors: SponsorsProps[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('sponsors-carousel-container');
      if (!container) return;

      const cardHeight = 250;
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      let index = Math.round(scrollTop / cardHeight);

      if (scrollTop <= 5) {
        index = 0;
      } else if (scrollTop >= maxScroll - 5) {
        index = sponsors.length - 1;
      }

      setActiveIndex(index);
    };

    const container = document.getElementById('sponsors-carousel-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [sponsors.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <h1 className="text-center text-2xl font-semibold mb-2 text-[#ffc200]">
        <span className="text-white">Our</span> Sponsors
      </h1>
      <p className="text-center text-[12px] mb-10 text-white max-w-[31ch] mx-auto">
        A big thank you to our generous sponsors whose support makes our work
        possible and helps us create lasting impact.
      </p>

      <div className="flex justify-center items-center mb-4">
        <Button
          className="w-[150px] py-[4px] flex justify-center items-center text-sm pt-3 pb-3"
          variant={'sponsor-be-our-sponsor'}
          onClick={() => {
            window.location.href = '/404';
          }}
        >
          Be Our Sponsor
        </Button>
      </div>

      <div className="relative">
        {/* Carousel or Full View */}
        <div
          className={`relative w-full overflow-hidden transition-all duration-500 ${
            showAll ? 'h-auto' : 'h-[540px]'
          }`}
        >
          <div
            id="sponsors-carousel-container"
            className={`overflow-y-auto no-scrollbar transition-all duration-500 ${
              showAll ? 'flex flex-col gap-1' : 'h-full'
            }`}
            style={{
              paddingBottom: showAll ? '20px' : '100px',
            }}
          >
            <Carousel className="h-full">
              <CarouselContent
                className={`flex flex-col items-center ${
                  showAll ? 'gap-4 mb-2' : 'gap-4 mt-4 mb-6'
                }`}
              >
                {sponsors.map((sponsor, index) => {
                  const isActive = activeIndex === index;
                  const shouldScale =
                    index === 0 ? isVisible && isActive : isActive;
                  const scaleSize = shouldScale ? 'scale-110' : 'scale-100';

                  return (
                    <CarouselItem
                      key={index}
                      className="flex justify-center w-[190px]"
                    >
                      <div
                        className={`bg-transparent mt-2 mb-2 rounded-lg w-[190px] h-[240px] flex flex-col items-center border border-[#ffffff] transition-all duration-500 ${
                          showAll
                            ? 'opacity-100 scale-100'
                            : shouldScale
                              ? `opacity-100 ${scaleSize}`
                              : 'opacity-50'
                        }`}
                      >
                        {/* Sponsor Logo */}
                        <div className="w-full flex items-center justify-center h-[100px] mt-2">
                          <Link
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={sponsor.logoMobile}
                              alt={sponsor.name}
                              width={100}
                              height={100}
                              className={cn(
                                'max-h-[100px] w-auto object-contain cursor-pointer',
                                sponsor.name === 'Stace' ? 'scale-125' : ''
                              )}
                            />
                          </Link>
                        </div>

                        {/* Icon and Horizontal Line */}
                        <div className="relative h-[50px] flex items-center">
                          {/* Icon */}
                          <div className="mr-4 justify-start">
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
                          <div className="w-[100px] h-[1.5px] bg-[#FFFFFF]"></div>
                        </div>

                        {/* Name + description */}
                        <p className="relative text-white text-[9px] mt-[1px] px-4 leading-tight text-left max-h-[90px] overflow-hidden pb-4">
                          {sponsor.description}
                          <br></br>
                          <br></br>— {sponsor.name}
                        </p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Dot Indicators */}
        {!showAll && (
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col space-y-2">
            {sponsors.map((_, index) => (
              <span
                key={index}
                className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-[#ffc200]'
                    : 'bg-gray-500 opacity-50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Show All Button */}
        <div
          className={`bg-[#ffc200] w-[130px] py-[4px] flex justify-center items-center text-black text-sm font-semibold rounded-2xl mx-auto cursor-pointer mt-8 transition-all duration-500 ${
            showAll ? 'scale-105' : 'scale-100'
          }`}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Collapse' : 'Show all'}
        </div>
      </div>
    </div>
  );
};

export default SponsorsMobile;
