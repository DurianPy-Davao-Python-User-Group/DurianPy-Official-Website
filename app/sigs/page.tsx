'use client';

import React from 'react';
import Card from './components/card';

const sigsData = [
  { image: '/assets/sigsIcons/Group125.png', title: 'Data' },
  { image: '/assets/sigsIcons/Group122.png', title: 'Backend' },
];

export default function Sigs() {
  return (
    <main className="flex flex-col justify-center mt-28">
      <div>
        <p className="text-primary text-[32px] md:text-[70px] leading-9 md:leading-none font-black text-center">
          SPECIAL <br />
          <span className="text-white">INTEREST</span> GROUPS
        </p>

        <p className="text-white text-xs md:text-xl text-center mt-4 mx-auto w-[85%] 2xl:w-[55%]">
          DurianPy&rsquo;s{' '}
          <span className="text-primary font-bold">
            Special Interest Groups
          </span>{' '}
          (SIGs) are focused communities within our user group that allow Python
          enthusiasts to dive deeper into specific topics. Whether you&rsquo;re
          passionate about{' '}
          <span className="text-primary font-bold">data science</span> or{' '}
          <span className="text-primary font-bold">backend development</span>,
          our SIGs providea space for hands-on learning, networking, and
          collaboration.
        </p>

        <button
          className="my-6 md:my-8 lg:my-10 mx-auto block bg-primary text-[8px] md:text-xl leading-3 md:leading-none font-bold rounded-xl px-2 md:px-4 lg:px-8 py-1 md:py-2 lg:py-4 hover:scale-105 duration-300"
          onClick={() =>
            (window.location.href = 'https://forms.gle/XxDJZebqbJB6tJo27')
          }
        >
          Form a SIG today
        </button>
      </div>

      <div className="mt-6 md:mt-12 lg:mt-16">
        <p className="text-primary text-[32px] md:text-[70px] leading-9 md:leading-none font-black text-center">
          CURRENT <span className="text-white">SIGs</span>
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-8 xl:gap-20 mt-6">
          {sigsData.map((sig, index) => (
            <Card key={index} image={sig.image} title={sig.title} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className="text-primary text-xl md:text-4xl font-semibold text-center">
          Want to Start a SIG?
        </p>
        <p className="text-white text-xs md:text-2xl text-center mt-4 mx-auto w-[85%]">
          If you’re passionate about a particular Python topic and want to start
          a SIG, reach out to us at{' '}
          <span className="underline">durianpy.davao@gmail.com</span>. Our
          organizers will review and respond within 48 hours.
        </p>
      </div>
    </main>
  );
}
