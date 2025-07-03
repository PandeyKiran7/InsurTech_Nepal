'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const GetDemo: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/contact'); 
  };

  return (
    <div>
      <button
        className="inline-flex items-center bg-gradient-to-r from-[#3AAFA9] to-[#56CCF2] text-white border-0 py-4 px-4 focus:outline-none rounded-2xl text-lg font-semibold transform transition-all duration-500 ease-in-out hover:bg-[#56CCF2] hover:scale-105 hover:shadow-xl hover:rotate-3 hover:opacity-90"
        onClick={handleButtonClick}
      >
        GetDemo
      </button>
    </div>
  );
};

export default GetDemo;
