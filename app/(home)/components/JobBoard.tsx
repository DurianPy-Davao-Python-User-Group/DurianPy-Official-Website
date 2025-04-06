'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import gradient from '@/public/assets/jobBoard/gradient.svg';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Map } from 'lucide-react';

export const JobBoard = () => {
  const [placeholder, setPlaceholder] = useState('');

  return (
    <div className="lg:h-[680px] md:h-[670px] sm:h-[300px]">
      {/* HERO SECTION */}
      {/* GRADIENT */}
      <Image
        src={gradient}
        alt="bg"
        className="absolute top-20 left-0 -z-10 w-full h-[500px] object-cover sm:h-[500px] md:h-[800px]"
      />

      {/* TITLE */}
      <div className="h-[500px] md:h-[700px] md:translate-y-20 flex flex-col items-center justify-center pl-3 pr-2 gap-y-1 md:gap-y-8 ">
        <p className="text-white text-xl font-medium md:text-[36px]">
          WELCOME TO
        </p>

        <div className="self-stretch h-12 text-center justify-start">
          <span className="text-white text-4xl font-black md:text-[96px]">
            JOB{' '}
          </span>
          <span className="text-primary text-4xl font-black  md:text-[96px] ">
            BOARD
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-white text-[13px] font-medium px-4 text-center md:text-[24px] md:w-[700px] lg:w-[700px]">
          Search and find your dream job now easier than ever, you can simply
          browse and find a job if you need it
        </p>

        {/* SEARCH BAR */}
        <div className="w-[362px] md:w-[867px] h-[33px] md:h-[74px] lg:w-[867px] bg-white flex flex-row items-center rounded-[64px] mt-3 p-100">
          <div className="w-full flex flex-row justify-center gap-2 md:gap-x-60 ">
            <div className="flex flex-row items-center -ml-1 gap-x-2 md:pl-6">
              <Search className="w-[18px] md:w-[30px] md:h-[30px] h-[18px] text-medium-dark-green stroke-[4]" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                variant="underline"
                className="-ml-2 w-[120px] md:w-[180px] h-[11px] text-[9px] md:text-[14px] font-[600] text-dark-green/45 border-b-0 text-left"
                value={placeholder}
                onChange={() => {}}
              />
            </div>

            <div className="flex flex-row md:pr-5">
              <div className="flex flex-row items-center gap-1 translate-x-3">
                <div className="flex flex-row gap-x-3">
                  {/* VERTICAL LINE */}
                  <div className="w-[1px] md:w-[3px] sm:h-[20px] md:h-[30px] bg-dark-green/45"></div>

                  <Map className="md:-translate-y-0.75 w-[18px] h-[18px] md:w-[30px] md:h-[30px] text-medium-dark-green stroke-[3]" />
                </div>

                <Input
                  type="text"
                  placeholder="Add country or city"
                  variant="underline"
                  className="-ml-3 w-[120px] md:w-[200px] h-[11px] text-[9px] md:text-[14px] font-[600] text-dark-green/45 border-b-0 text-left"
                  value={placeholder}
                  onChange={() => {}}
                />
              </div>

              <button className="w-[56px] h-[13px] md:w-[160px] md:h-[54px] bg-medium-dark-green text-white text-[9px] md:text-[14px] rounded-[24px] mt-1">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}

      {/* FOOTER */}
    </div>
  );
};
