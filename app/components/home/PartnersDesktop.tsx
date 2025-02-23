import React from 'react';
import { PartnersDescriptionCarousel } from './PartnersDescriptionCarousel';

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
}

const PartnersDesktop = ({ partners }: { partners: PartnersProps[] }) => {
  console.log(partners);
  return (
    <div className="xl:grid grid-cols-3 text-white">
      {/* Description Section */}
      <div className="space-y-16">
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

        <PartnersDescriptionCarousel partners={partners} />
      </div>

      <div className="col-span-2">Logos</div>
    </div>
  );
};

export default PartnersDesktop;
