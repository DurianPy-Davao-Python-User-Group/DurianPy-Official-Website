import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Container - Always Horizontal */}
        <div className="flex flex-row items-center justify-between w-full">
          
          {/* Left Section - Text & Small Logo */}
          <div className="w-1/2">
            <h1 className="text-white text-[32px] md:text-[50px] font-black leading-tight mt-10">
              Share Your <br />
              <span>Knowledge</span> <br />
              <span>
                with{" "}
                <img
                  src="/assets/speakIcons/logoName.svg"
                  alt="DurianPy Text"
                  className="inline-block h-7 md:h-9 lg:h-12"
                />
              </span>
            </h1>
            <p className="text-gray-300 mt-4 leading-relaxed">
              We are excited to have you as a speaker. <br />
              <span>Help inspire the Python community in Davao.</span>
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
              Submit a Talk Proposal
            </button>
          </div>

          {/* Right Section - Large Logo */}
          <div className="w-1/2">
            <div className="flex justify-end mt-20 md:mt-22 lg:mt-28 relative">
        {/* Reduced brightness background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[650px] md:h-[650px] lg:w-[750px] lg:h-[750px] bg-green-700/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[550px] md:h-[550px] lg:w-[550px] lg:h-[550px] bg-green-700/15 rounded-full blur-2xl -z-10"></div>
                    
                    {/* Second glow layer with reduced brightness */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-green-600/10 rounded-full blur-xl -z-10"></div>
                    
                    {/* Logo */}
                    <img
                        src="/assets/speakIcons/logoIcon.svg"
                        alt="DurianPy Logo"
                        className="w-[350px] md:w-[400px] lg:w-[500px] max-w-full relative z-10"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
