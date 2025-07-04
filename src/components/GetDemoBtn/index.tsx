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
        className="bg-[#44c9c0] text-white p-2 rounded-xl tra"
        onClick={handleButtonClick}
      >
        GetDemo
      </button>
    </div>
  );
};

export default GetDemo;
