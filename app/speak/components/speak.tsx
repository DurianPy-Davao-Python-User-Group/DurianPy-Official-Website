'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const handleRedirect = (url: string) => {
  if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
};

const SpeakDetails: React.FC = () => {
  return (
    <section>
      <div className="flex-column max-w-7xl mx-auto pl-8 md:pl-12 lg:pl-16">
        {/* Main Container - Always Horizontal */}
        <div className="flex flex-row items-center justify-start w-full mt-8 q md:mt-10 lg:mt-10">
          {/* Left Section - Text & Small Logo */}
          <div className="w-1/2">
            <h1 className="text-[#FFFFFF] [@media(max-width:380px)]:text-[20px] text-[25px] sm:text-[44px] md:text-[47px] lg:text-[65px] font-black leading-[1.3]">
              Share Your <br />
              Knowledge <br />
              <div className="flex items-center space-x-2 md:space-x-5">
                <span>with</span>
                <Image
                  src="/assets/speakIcons/logoName.svg"
                  alt="DurianPy"
                  width={0}
                  height={0}
                  className="mt-1 sm:mt-1 md:mt-1 w-auto [@media(max-width:380px)]:h-6 h-8 sm:h-14 md:h-15 lg:h-20"
                />
              </div>
            </h1>
            <p className="text-gray-300 my-4 md:my-8 lg:my-12 leading-tight [@media(max-width:392px)]:text-[6px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[18px]">
              We are excited to have you as a speaker. <br />
              <span>Help inspire the Python community in Davao.</span>
            </p>
            <Button
              onClick={() =>
                handleRedirect('https://forms.gle/x2cc6CrRhbhDeaxe9')
              }
              className="bg-yellow-500 text-black font-medium py-2 md:py-2 lg:py-3 px-4 md:px-5 lg:px-7 [@media(max-width:320px)]:text-[6px] text-[10px] md:text-[14px] lg:text-[18px] rounded-full hover:bg-yellow-600 transition-all duration-300 ease-out hover:scale-105"
            >
              Submit a Talk Proposal
            </Button>
          </div>

          {/* Right Section - Large Logo */}
          <div className="w-1/2">
            <div className="ml-4 flex justify-end md:mt-5 lg:mt-10 relative ">
              <Image
                src="/assets/speakIcons/glowBg.svg"
                alt="Glow BG"
                width={0}
                height={0}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[1000px] rounded-full blur-3xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[185px] h-[200px] md:w-[340px] md:h-[450px] lg:w-[465px] lg:h-[500px] bg-green-800/15 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[185px] h-[150px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[400px] bg-green-700/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[185px] h-[100px] md:w-[150px] md:h-[250px] lg:w-[250px] lg:h-[300px] bg-green-600/25 rounded-full blur-xl -z-10"></div>

              {/* Logo */}
              <Image
                src="/assets/speakIcons/logoIcon.svg"
                alt="DurianPy Logo"
                width={0}
                height={0}
                className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] relative z-10"
              />
            </div>
          </div>
        </div>
        <div className="container text-white mt-10 ">
          <h1 className="[@media(max-width:380px)]:text-[20px] text-[25px] sm:text-[45px] md:text-[50px] lg:text-[60px] font-bold mb-6 lg:mb-8">
            Submission <span className="text-[#FFC201]">Guidelines </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mr-8 md:mr-12 lg:mr-20 mx-10 lg:mx-0">
            {/* Left Column */}
            <div className="space-y-8">
              {/* What to be Mindful of */}
              <div className="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[0.25px] before:bg-white">
                <h2 className="[@media(max-width:380px)]:text-[16px] text-[16px] sm:text-[20px] md:text-[25px] lg:text-[28px] font-semibold mb-2">
                  What to be Mindful of
                </h2>
                <p className="[@media(max-width:392px)]:text-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-300">
                  DurianPy welcomes developers of <br /> all experience levels -
                  beginners to experts
                </p>
              </div>

              {/* What to Avoid */}
              <div className="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[0.25px] before:bg-white">
                <h2 className="[@media(max-width:380px)]:text-[16px] text-[16px] sm:text-[20px] md:text-[25px] lg:text-[28px] font-semibold mb-2">
                  What to Avoid
                </h2>
                <div className="[@media(max-width:392px)]:text-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                  <p className="text-gray-300">
                    Too much code without explanation.{' '}
                  </p>{' '}
                  <span>Proprietary code with no open-source reference </span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* What to Include */}
              <div className="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[0.25px] before:bg-white">
                <h2 className="[@media(max-width:380px)]:text-[16px] text-[16px] sm:text-[20px] md:text-[25px] lg:text-[28px] font-semibold mb-2">
                  What to Include
                </h2>
                <div className="[@media(max-width:392px)]:text-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                  <p className=" text-gray-300">How can people reach you? </p>{' '}
                  <span>Where they can find your slides or code </span>
                </div>
              </div>

              {/* Helpful Resources */}
              <div className="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[0.25px] before:bg-white">
                <h2 className="[@media(max-width:380px)]:text-[16px] text-[16px] sm:text-[20px] md:text-[25px] lg:text-[28px] font-semibold mb-2">
                  Helpful Resources
                </h2>
                <div className="[@media(max-width:392px)]:text-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                  <a
                    onClick={() =>
                      handleRedirect(
                        'https://us.pycon.org/2014/speaking/proposal_advice/'
                      )
                    }
                    className="hover:underline block cursor-pointer"
                  >
                    Great Advice for Giving Talks
                  </a>
                  <a
                    onClick={() =>
                      handleRedirect('https://forms.gle/x2cc6CrRhbhDeaxe9')
                    }
                    className="hover:underline block cursor-pointer"
                  >
                    Submit Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-14">
          <a href="mailto:durianpy.davao@gmail.com">
            <Button
              className="bg-yellow-500 text-black font-medium py-2 md:py-2 lg:py-3 px-4 md:px-5 lg:px-7 [@media(max-width:320px)]:text-[6px] text-[10px] md:text-[14px] lg:text-[18px] rounded-full hover:bg-yellow-600 transition-all duration-300 ease-out hover:scale-105"
            >
              Have Questions?
            </Button>
          </a>
          </div>
        </div>

        <div className="container text-white mt-10 lg:mt-20">
          <h1 className="[@media(max-width:380px)]:text-[20px] text-[28px] sm:text-[40px] md:text-[45px] lg:text-[60px] font-bold">
            Google <span className="text-[#FFC201]"> Forms </span>
          </h1>
          <div className="[@media(max-width:392px)]:text-[8px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-300 mt-3 mb-7 lg:mb-5 ">
            <p>
              Please fill out the Google Form for the Call for Speakers,
              providing your bio, topic, and relevant experience.{' '}
            </p>{' '}
            <span> We look forward to reviewing your application </span>
          </div>
          <div
            className="mr-10 relative p-[5px] bg-gradient-to-l from-yellow-400 via-green-400 to-green-600"
            style={{
              borderTopLeftRadius: '75px',
              borderBottomRightRadius: '75px',
              borderTopRightRadius: '0px',
              borderBottomLeftRadius: '0px',
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScTPUrZ8Xkfl2hsSlUZt0qzN7tE3zKt5e30d1OcI52YOsnrQg/viewform?embedded=true"
              width="100%"
              height="550"
              className="h-[250px] md:h-[350px] lg:h-[550px] bg-white rounded-lg"
              style={{
                border: 'none',
                borderTopLeftRadius: '75px',
                borderBottomRightRadius: '75px',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '0px',
                overflow: 'hidden',
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakDetails;
