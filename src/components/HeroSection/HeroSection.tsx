'use client';

import Image from 'next/image';

const HeroSection = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      
      <Image
        src="/gallery-banner.jpg" 
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Modern Insurance Technology for Nepal and Beyond
        </h1>
        <p className="text-lg mb-8">
          Powering over 80% of Nepal's insurance industry with scalable, secure, and
          innovative software solutions.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleButtonClick}
            className="bg-[#44c9c0] hover:bg-[#44c9c0] text-white px-6 py-3 rounded-md font-medium"
          >
            Explore Solutions
          </button>
          <button
            onClick={handleButtonClick}
            className="border border-white text-white hover:bg-white hover:text-[#44c9c0] px-6 py-3 rounded-md font-medium"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
