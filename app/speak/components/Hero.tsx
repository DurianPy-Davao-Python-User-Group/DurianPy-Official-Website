'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="flex-column max-w-7xl mx-auto pl-8 md:pl-12 lg:pl-16">
        {/* Main Container - Always Horizontal */}
        <div className="flex flex-row items-center justify-start w-full mt-9 md:mt-5 lg:mt-0">
          {/* Left Section - Text & Small Logo */}
          <div className="w-1/2">
            <h1 className="text-[#FFFFFF] [@media(max-width:380px)]:text-[20px] text-[28px] sm:text-[44px] md:text-[50px] lg:text-[65px] font-black leading-[1.3] mt-10">
              Share Your <br />
              Knowledge <br />
              <div className="flex items-center space-x-2 md:space-x-5">
                <span>with</span>
                <Image
                  src="/assets/speakIcons/logoName.svg"
                  alt="DurianPy"
                  width={0}
                  height={0}
                  className="mt-1 sm:mt-3 md:mt-2 w-auto [@media(max-width:380px)]:h-6 h-8 sm:h-10 md:h-16 lg:h-20"
                />
              </div>
            </h1>
            <p className="text-gray-300 my-4 md:my-8 lg:my-12 leading-tight [@media(max-width:392px)]:text-[6px] text-[8px] sm:text-[12px] md:text-[14px] lg:text-[18px]">
              We are excited to have you as a speaker. <br />
              <span>Help inspire the Python community in Davao.</span>
            </p>
            <button className="bg-yellow-500 text-black font-medium py-2 md:py-2 lg:py-3 px-4 md:px-5 lg:px-7 [@media(max-width:320px)]:text-[6px] text-[10px] md:text-[14px] lg:text-[18px] rounded-full hover:bg-yellow-600">
              Submit a Talk Proposal
            </button>
          </div>

          {/* Right Section - Large Logo */}
          <div className="w-1/2">
            <div className="ml-3 flex justify-end md:mt-20 lg:mt-28 relative">
              <Image
                src="/assets/speakIcons/glowBg.svg"
                alt="Glow BG"
                width={0}
                height={0}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[7000px] lg:w-[800px] lg:h-[1000px] rounded-full blur-3xl"
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
          <h1 className="text-5xl font-bold mb-12">Submission Guidelines</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mr-8 md:mr-12 lg:mr-20">
            {/* Left Column */}
            <div className="space-y-8">
              {/* What to be Mindful of */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-white">
                <h2 className="text-2xl font-semibold mb-4">
                  What to be Mindful of
                </h2>
                <p className="text-gray-300">
                  DurianPy welcomes developers of all experience levels -
                  beginners to experts
                </p>
              </div>

              {/* What to Avoid */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-white">
                <h2 className="text-2xl font-semibold mb-4">What to Avoid</h2>
                <p className="text-gray-300">
                  Too much code without explanation.{' '}
                </p>{' '}
                <span>Proprietary code with no open-source reference </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* What to Include */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-white">
                <h2 className="text-2xl font-semibold mb-4">What to Include</h2>
                <p className="text-gray-300">How can people reach you? </p>{' '}
                <span>Where they can find your slides or code </span>
              </div>

              {/* Helpful Resources */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-white">
                <h2 className="text-2xl font-semibold mb-4">
                  Helpful Resources
                </h2>
                <div className="">
                  <a href="#" className="hover:underline block">
                    Great Advice for Giving Talks
                  </a>
                  <a href="#" className="hover:underline block">
                    Submit Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition">
              Have questions?
            </button>
          </div>
        </div>

        <div className="container text-white mt-10 lg:mt-20">
          <h1 className="text-5xl font-bold">
            Google <span className="text-[#FFC201]"> Forms </span>
          </h1>
          <div className="text-gray-300 my-8">
            <p>
              Please fill out the Google Form for the Call for Speakers,
              providing your bio, topic, and relevant experience.{' '}
            </p>{' '}
            <span> We look forward to reviewing your application </span>
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScTPUrZ8Xkfl2hsSlUZt0qzN7tE3zKt5e30d1OcI52YOsnrQg/viewform"
            width="100%"
            height="800"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
