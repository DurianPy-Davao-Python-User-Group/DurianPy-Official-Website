'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

export const JobBoard = () => {
  const [placeholder, setPlaceholder] = useState('');

  return (
    <div>
      {/* HERO SECTION */}
      <div className="w-full h-96 absolute -z-10 blur-xl bg-gradient-to-r from-green-300/0 via-yellow-300/40 to-yellow-400/70"></div>

      {/* TITLE */}
      <div className=" h-[500px] flex flex-col items-center justify-center p-2">
        <div className="flex flex-col items-center gap-[5px]">
          <p className="text-white text-xl font-normal">WELCOME TO</p>
          <div className="self-stretch h-12 text-center justify-start">
            <span className="text-white text-4xl font-black">JOB </span>
            <span className="text-primary text-4xl font-black ">BOARD</span>
          </div>

          <p className="text-white text-xs px-4 text-center">
            Search and find your dream job now easier than ever, you can simply
            browse and find a job if you need it
          </p>

          {/* SEARCH BAR */}
          <div className="w-[362px] h-[33px] bg-white flex flex-row items-center rounded-[64px]">
            <div className="w-full flex flex-row justify-center gap-2">
              <div className="flex flex-row items-start">
                <p className="text-[9px]">[icon]</p>
                <Input
                  type="text"
                  placeholder="Job title or keyword"
                  variant="underline"
                  className="w-[101px] h-[11px] text-[9px] font-[600] text-dark-green/45 border-b-0 text-left"
                  value={placeholder}
                  onChange={() => {}}
                />
              </div>

              <p className="text-[9px]">|</p>

              <div className="flex flex-row items-center gap-1">
                <p className="text-[9px]">[icon]</p>
                <Input
                  type="text"
                  placeholder="Add country or city"
                  variant="underline"
                  className="w-[101px] h-[11px] text-[9px] font-[600] text-dark-green/45 border-b-0 placeholder:text-neutral-400"
                  value={placeholder}
                  onChange={() => {}}
                />
              </div>

              <button className="w-[56px] h-[13px] bg-medium-dark-green text-white text-[9px] rounded-[24px]">
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
