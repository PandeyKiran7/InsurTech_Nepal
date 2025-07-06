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
        className="bg-[#2b0569f9] text-white p-3 rounded-lg mt-4"
        onClick={handleButtonClick}
      >
        Get Demo
      </button>
    </div>
  );
};

export default GetDemo;
