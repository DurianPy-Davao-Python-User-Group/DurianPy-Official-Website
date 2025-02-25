"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
  link: string;
}

const PartnersMobile = ({ partners }: { partners: PartnersProps[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("carousel-container");
      if (!container) return;

      const cardHeight = 320;
      const index = Math.round(container.scrollTop / cardHeight);
      setActiveIndex(index);
    };

    const container = document.getElementById("carousel-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl font-semibold mb-2 text-[#ffc200]">
        Partners
      </h1>
      <p className="text-center text-xs mb-6 text-white max-w-[31ch] mx-auto">
        We collaborate with like-minded organizations to{" "}
        <span className="text-[#36FF90]">
          foster creativity, innovation, and growth.
        </span>{" "}
        Explore our partnerships and see how we create meaningful impact
        together.
      </p>

      {/* Carousel or Full View */}
      <div className={`relative w-full overflow-hidden transition-all ${showAll ? "h-auto" : "h-[350px]"}`}>
        <div
          id="carousel-container"
          className={`overflow-y-auto no-scrollbar ${showAll ? "flex flex-col gap-4" : "h-full"}`}
        >
          <Carousel className="h-full">
            <CarouselContent className="flex flex-col items-center gap-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div
                    className={`bg-transparent rounded-lg w-[210px] h-[315px] flex flex-col items-center border border-[#7ee4ac] transition-opacity duration-300 ${
                      showAll || activeIndex === index ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {/* Partner Logo */}
                    <div className="w-full flex items-center justify-center h-[110px] mt-4">
                      <a href={partner.link} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={120}
                          height={120}
                          className="max-h-[110px] w-auto object-contain cursor-pointer"
                        />
                      </a>
                    </div>

                    {/* Separator Line */}
                    <div className="w-full border-t border-[1.5px] border-[#97ffc6] mt-6"></div>

                    {/* Partner Name and Description */}
                    <div className="relative w-full text-center flex flex-col justify-center py-2 px-3 text-sm font-medium text-[#ffc200] rounded-b-lg h-[120px]">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#4c8d69e3] to-[#10201885] opacity-50 rounded-b-lg h-[130px]"></div>
                      <p className="relative text-lg font-bold leading-none mt-10 mb-2">
                        {partner.name}
                      </p>
                      <p className="relative text-white text-xs mt-1 px-4">
                        {partner.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Dot Indicators (VERTICALLY ON THE LEFT) */}
        {!showAll && (
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col space-y-2">
            {partners.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-[#ffc200]" : "bg-gray-500 opacity-50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Show All Button */}
      <div
        className="bg-[#ffc200] w-[130px] py-[4px] flex justify-center items-center text-black text-sm font-semibold rounded-2xl mx-auto cursor-pointer mt-4"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Collapse" : "Show all"}
      </div>
    </>
  );
};

export default PartnersMobile;
