'use client';

import { useRouter } from 'next/navigation';

const TechHeroSection = () => {
  const router = useRouter();
  const handleButtonClick = () => {
     router.push('/contact'); 
  };

  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
    
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">
         Advanced Technology Powering the Future of Insurance
        </h1>
        <p className="text-base mb-8">
         Our cloud-native architecture, robust APIs, and AI-driven tools ensure speed, security, and scalability—empowering insurers to innovate faster and serve smarter.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleButtonClick}
            className="border border-white text-white hover:bg-white hover:text-[#2b0569f9] px-6 py-3 rounded-md font-medium"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechHeroSection;
