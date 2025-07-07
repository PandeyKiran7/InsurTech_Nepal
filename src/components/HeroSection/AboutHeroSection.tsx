'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AboutHeroSection = () => {
  const router = useRouter();
  const handleButtonClick = () => {
     router.push('/contact'); 
  };

  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      
      <Image
        src="/gallery-banner.jpg" 
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />
    
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">
           Empowering Nepal’s Insurance Industry Since Day One
        </h1>
        <p className="text-base mb-8">
          At InsurTech Nepal, we combine deep domain expertise with cutting-edge software to deliver digital-first solutions trusted by leading insurers, agents, and brokers.
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

export default AboutHeroSection;
