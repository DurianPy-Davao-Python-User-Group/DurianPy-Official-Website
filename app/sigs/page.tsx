'use client';

import React from 'react';
import Card from './components/card';
import { Footer } from '../(home)/components/Footer';

const sigsData = [
  { image: '/assets/sigsIcons/Group125.png', title: 'Data' },
  { image: '/assets/sigsIcons/Group122.png', title: 'Backend' },
];

export default function Sigs() {
  return (
    <main className="relative flex flex-col justify-center mt-28 2xl:mt-60">
      <div>
        <p className="text-primary text-[32px] md:text-[70px] leading-9 md:leading-none font-black text-center">
          SPECIAL <br />
          <span className="text-white">INTEREST GROUPS</span>
        </p>

        <p className="text-white text-xs md:text-xl text-center mt-4 2xl:my-14 mx-auto w-[80%] 2xl:w-[55%]">
          DurianPy&rsquo;s{' '}
          <span className="text-primary font-bold">
            Special Interest Groups
          </span>{' '}
          (SIGs) are focused communities within our user group that allow Python
          enthusiasts to dive deeper into specific topics. Whether you&rsquo;re
          passionate about{' '}
          <span className="text-primary font-bold">data science</span> or{' '}
          <span className="text-primary font-bold">data science</span> or{' '}
          <span className="text-primary font-bold">backend development</span>,
          our SIGs providea space for hands-on learning, networking, and
          collaboration.
        </p>

        <button
          className="my-6 md:my-8 lg:my-10 mx-auto block bg-primary text-black text-[8px] md:text-xl leading-3 md:leading-none font-bold rounded-full px-2 md:px-4 lg:px-8 py-1 md:py-2 lg:py-4 border border-transparent hover:bg-opacity-50 hover:border-primary hover:text-primary transition-colors"
          onClick={() =>
            (window.location.href = 'https://forms.gle/XxDJZebqbJB6tJo27')
          }
        >
          Join a SIG today
        </button>
        <div className="relative w-full h-[250px] md:h-[350px] -mt-20 -mb-20 flex flex-col items-center">
          <div className="absolute top-0 w-[50%] md:w-[80%] h-[100px] md:h-[150px] bg-[#36FF90] rounded-b-full blur-2xl md:blur-3xl opacity-10 z-[-1] -mt-5"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full md:w-[85%] h-[80%] md:h-[71%] bg-[#36FF90] rounded-full blur-[80px] md:blur-[120px] opacity-30 z-[-2]"></div>
          <div className="absolute bottom-0 w-[50%] md:w-[80%] h-[100px] md:h-[150px] bg-[#36FF90] rounded-t-full blur-2xl md:blur-3xl opacity-10 z-[-1]"></div>
        </div>
      </div>
      <div className="sm:mt-15 md:-mt-10 lg:-mt-10">
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
      <Footer />
    </main>
  );
}
