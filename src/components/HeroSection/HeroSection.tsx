'use client';

import Image from 'next/image';

const HeroSection = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/gallery-banner.jpg" // ✅ Make sure this is correct
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Explore Solutions
          </button>
          <button
            onClick={handleButtonClick}
            className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
