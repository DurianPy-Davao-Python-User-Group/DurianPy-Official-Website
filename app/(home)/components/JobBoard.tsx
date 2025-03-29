'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Map } from 'lucide-react';

export const JobBoard = () => {
  const [placeholder, setPlaceholder] = useState('');

  return (
    <div>
      {/* HERO SECTION */}
      {/* GRADIENT */}
      <div className="w-full h-96 absolute -z-10 blur-xl bg-gradient-to-r from-green-300/0 via-yellow-300/40 to-yellow-400/70"></div>

      {/* TITLE */}
      <div className="h-[500px] flex flex-col items-center justify-center pl-3 pr-2 gap-y-1">
        <p className="text-white text-xl font-medium">WELCOME TO</p>

        <div className="self-stretch h-12 text-center justify-start">
          <span className="text-white text-4xl font-black">JOB </span>
          <span className="text-primary text-4xl font-black ">BOARD</span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-white text-[13px] font-medium px-4 text-center">
          Search and find your dream job now easier than ever, you can simply
          browse and find a job if you need it
        </p>

        {/* SEARCH BAR */}
        <div className="w-[362px] h-[33px] bg-white flex flex-row items-center rounded-[64px] mt-3">
          <div className="w-full flex flex-row justify-center gap-2">
            <div className="flex flex-row items-center -ml-1">
              <Search className="w-[18px] h-[18px] text-medium-dark-green stroke-[6]" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                variant="underline"
                className="-ml-2 w-[120px] h-[11px] text-[9px] font-[600] text-dark-green/45 border-b-0 text-left"
                value={placeholder}
                onChange={() => {}}
              />
            </div>

            <div className="flex flex-row items-center gap-1 translate-x-4">
              <div className="flex items-center">
                <div className="w-[1px] h-[18px] bg-dark-green/45"></div>
              </div>
              <Map className="w-[18px] h-[18px] text-medium-dark-green stroke-[4]" />

              <Input
                type="text"
                placeholder="Add country or city"
                variant="underline"
                className="-ml-3 w-[120px] h-[11px] text-[9px] font-[600] text-dark-green/45 border-b-0 text-left"
                value={placeholder}
                onChange={() => {}}
              />
            </div>

            <button className="w-[56px] h-[13px] bg-medium-dark-green text-white text-[9px] rounded-[24px] mt-1">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}

      {/* FOOTER */}
    </div>
  );
};
