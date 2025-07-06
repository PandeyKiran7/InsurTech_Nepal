'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const ProductHeroSection: FC<HeroSectionProps> = ({
  title = 'Modern Insurance Technology for Nepal and Beyond',
  subtitle = `Powering over 80% of Nepal's insurance industry with scalable, secure, and innovative software solutions.`,
  backgroundImage = '/gallery-banner.jpg',
  ctaText = 'Request Demo',
  ctaLink = '/contact',
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(ctaLink);
  };

  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-base mb-8">{subtitle}</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleButtonClick}
            className="border border-gray-800 text-black hover:bg-[] hover:text-[#2b0569f9] px-6 py-3 rounded-md font-medium"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
