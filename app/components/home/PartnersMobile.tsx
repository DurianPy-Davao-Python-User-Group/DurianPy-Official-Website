'use client';

import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface PartnersProps {
  name: string;
  logoMobile: string;
  desc: string;
  link: string;
}

const PartnersMobile = ({ partners }: { partners: PartnersProps[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('carousel-container');
      if (!container) return;

      const cardHeight = 250;
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      let index = Math.round(scrollTop / cardHeight);

      if (scrollTop <= 5) {
        index = 0;
      } else if (scrollTop >= maxScroll - 5) {
        index = partners.length - 1;
      }

      setActiveIndex(index);
    };

    const container = document.getElementById('carousel-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [partners.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sectionRef}>
        <h1 className="text-center text-2xl font-semibold mb-2 text-[#ffc200]">
          Partners
        </h1>
        <p className="text-center text-[12px] mb-10 text-white max-w-[31ch] mx-auto">
          We collaborate with like-minded organizations to{' '}
          <span className="text-[#36FF90]">
            foster creativity, innovation, and growth.
          </span>{' '}
          Explore our partnerships and see how we create meaningful impact
          together.
        </p>

        {/* Carousel or Full View */}
        <div
          className={`relative w-full overflow-hidden transition-all duration-500 ${
            showAll ? 'h-auto' : 'h-[520px]'
          }`}
        >
          <div
            id="carousel-container"
            className={`overflow-y-auto no-scrollbar transition-all duration-500 ${
              showAll ? 'flex flex-col gap-1' : 'h-full'
            }`}
            style={{
              paddingBottom: showAll ? '20px' : '100px',
            }}
          >
            <Carousel className="h-full">
              <CarouselContent
                className={`flex flex-col items-center ${showAll ? 'gap-1' : 'gap-4 mt-4 mb-4'}`}
              >
                {partners.map((partner, index) => {
                  const isActive = activeIndex === index;
                  const shouldScale =
                    index === 0 ? isVisible && isActive : isActive;
                  const scaleSize = shouldScale ? 'scale-110' : 'scale-100';

                  return (
                    <CarouselItem key={index} className="flex justify-center">
                      <div
                        className={`bg-transparent mt-2 mb-2 rounded-lg w-[190px] h-[230px] flex flex-col items-center border border-[#7ee4ac] transition-all duration-500 ${
                          showAll
                            ? 'opacity-100 scale-100'
                            : shouldScale
                              ? `opacity-100 ${scaleSize}`
                              : 'opacity-50'
                        }`}
                      >
                        {/* Partner Logo */}
                        <div className="w-full flex items-center justify-center h-[100px] mt-2">
                          <a
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={partner.logoMobile}
                              alt={partner.name}
                              width={100}
                              height={100}
                              className="max-h-[100px] w-auto object-contain cursor-pointer"
                            />
                          </a>
                        </div>

                        {/* Separator Line */}
                        <div className="w-full border-t border-[1.5px] border-[#97ffc6] mt-2"></div>

                        {/* Partner Name and Description */}
                        <div className="relative w-full text-center flex flex-col justify-center py-2 px-3 text-[#ffc200] rounded-b-lg h-[120px]">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#4c8d69e3] to-[#10201885] opacity-50 rounded-b-lg h-[90px]"></div>
                          <p className="relative text-[15px] leading-none mt-[-8px] mb-1">
                            {partner.name}
                          </p>
                          <p className="relative text-white text-[9px] mt-[1px] px-4 leading-tight text-left max-h-[90px] overflow-hidden">
                            {partner.desc}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

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
    </>
  );
};

export default PartnersMobile;
