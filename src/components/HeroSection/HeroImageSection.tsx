'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import GetDemo from '../GetDemoBtn';

interface HeroImageSectionProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  textColor?: string;
}

const HeroImageSection: FC<HeroImageSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  textColor = 'text-black',
}) => {
  return (
    <div className=" w-full h-100 overflow-hidden">
      <Image
        src={imageSrc}
        alt="Hero"
        fill
        priority
        height={100}
      />
      <div
        className={`relative z-10 flex flex-col items-center justify-center text-center h-full px-4 bg-opacity-50 ${textColor}`}
      >
        <h1 className="text-5xl md:text-7xl font-bold m-4">{title}</h1>
        <h3 className="text-2xl md:text-3xl font-semibold m-14">{subtitle}</h3>
        <GetDemo />
      </div>
    </div>
  );
};

export default HeroImageSection;
