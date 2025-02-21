import React from 'react';
import Image from 'next/image';

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
}

const PartnersMobile = ({ partners }: { partners: PartnersProps[] }) => {
  return (
    <>
      <div className="text-center text-2xl font-semibold mb-2 text-[#ffc200]">
        Partners
      </div>
      <p className="text-center text-xs mb-6 text-white max-w-[31ch] mx-auto">
        We collaborate with like-minded organizations to{' '}
        <span className="text-[#417659]">
          foster creativity, innovation, and growth.
        </span>
        Explore our partnerships and see how we create meaningful impact
        together.
      </p>

      <section className="py-6">
        <div className="flex flex-wrap justify-center gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-transparent rounded-lg w-[210px] h-[315px] flex flex-col items-center border border-[#7ee4ac]"
            >
              {/* Partner Logo */}
              <div className="w-full flex items-center justify-center h-[110px] mt-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="max-h-[110px] w-auto object-contain"
                />
              </div>

              {/* Separator Line */}
              <div className="w-full border-t border-[1.5px] border-[#97ffc6] mt-6"></div>

              {/* Partner Name and Description */}
              <div className="relative w-full text-center flex flex-col justify-center py-2 px-3 text-sm font-medium text-[#ffc200] rounded-b-lg h-[120px]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4c8d69e3] to-[#10201885] opacity-50 rounded-b-lg h-[130px]"></div>
                <p className="relative text-lg font-bold leading-none mt-8 mb-2">
                  {partner.name}
                </p>
                <p className="relative text-white text-xs mt-1 px-4">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#ffc200] w-[130px] h=[45px] py-[4px] flex justify-center items-center text-black text-sm font-semibold rounded-2xl mx-auto cursor-pointer mt-4">
        Show all
      </div>
    </>
  );
};

export default PartnersMobile;
