import React from 'react';

export default function Sigs() {
  return (
    <main className="flex flex-col justify-center mt-28">
      <div>
        <p className="text-primary text-[32px] leading-9 font-black text-center">
          SPECIAL <br />
          <span className="text-white">INTEREST</span> GROUPS
        </p>

        <p className="text-white text-xs text-center mt-4 mx-auto w-[85%]">
          DurianPy’s{' '}
          <span className="text-primary font-bold">
            Special Interest Groups
          </span>{' '}
          (SIGs) are focused communities within our user group that allow Python
          enthusiasts to dive deeper into specific topics. Whether you're
          passionate about{' '}
          <span className="text-primary font-bold">data science</span> or{' '}
          <span className="text-primary font-bold">backend development</span>,
          our SIGs providea space for hands-on learning, networking, and
          collaboration.
        </p>

        <button className="mt-4 mx-auto block bg-primary text-[8px] leading-3 font-bold rounded-xl px-2 py-1">
          Join a SIG today
        </button>
      </div>

      <div className="mt-16">
        <p className="text-primary text-[32px] leading-9 font-black text-center">
          CURRENT <span className="text-white">SIGs</span>
        </p>
      </div>

      <div className="mt-16">
        <p className="text-primary text-xl font-semibold text-center">
          Want to Start a SIG?
        </p>
        <p className="text-white text-xs text-center mt-4 mx-auto w-[85%]">
          If you’re passionate about a particular Python topic and want to start
          a SIG, reach out to us at{' '}
          <span className="underline">durianpy.davao@gmail.com</span>. Our
          organizers will review and respond within 48 hours.
        </p>
      </div>
    </main>
  );
}
