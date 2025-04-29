'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import gradient from '@/public/assets/jobBoard/gradient.svg';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Map } from 'lucide-react';

const jobData = [
  { id: 1, title: 'Frontend Developer', location: 'Davao' },
  { id: 2, title: 'Backend Developer', location: 'Cebu' },
  { id: 3, title: 'UI/UX Designer', location: 'Manila' },
  { id: 4, title: 'Data Analyst', location: 'Davao' },
];

export const JobBoard = () => {
  const [jobs, setJobs] = useState(jobData);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (location === '' || job.location === location)
  );

  useEffect(() => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setJobs(filtered);
  }, [searchTerm, location, jobs]);
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
        <div className="w-[362px] md:w-[867px] h-[33px] md:h-[74px] lg:w-[867px] bg-white flex items-center rounded-[64px] mt-3 p-3 overflow-hidden shadow-md">
          <div className="flex w-full justify-center gap-6 px-4 md:px-6">
            <div className="flex items-center gap-2">
              <Search className="w-[18px] md:w-[30px] h-[18px] md:h-[30px] text-medium-dark-green stroke-[4]" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                variant="underline"
                className="w-[180px] md:w-[280px] text-[14px] font-semibold text-dark-green/45 border-b-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-[3px] h-[30px] bg-dark-green/45"></div>
                <Map className="w-[18px] md:w-[30px] h-[18px] md:h-[30px] text-medium-dark-green stroke-[3]" />
              </div>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-[14px] font-semibold text-dark-green/45 bg-transparent focus:outline-none"
              >
                <option value="">Add country or city</option>
                {Array.from(new Set(jobData.map((job) => job.location))).map(
                  (loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  )
                )}
              </select>
              <button className="w-[160px] h-[54px] bg-medium-dark-green text-white rounded-[24px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* JOB CARDS SECTION */}
      <section className="px-4 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-dark-green">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.location}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No jobs found.
          </p>
        )}
      </section>
    </div>
  );
};
