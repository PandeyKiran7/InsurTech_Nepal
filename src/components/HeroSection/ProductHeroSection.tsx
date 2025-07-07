'use client';

import { useRouter } from 'next/navigation';

const ProductHeroSection = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/contact');
  };

  return (
    <section className="relative bg-[#68aaf7f9] h-[450px] flex items-center justify-center overflow-hidden">
      <div className="text-center text-gray-100">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">
           Smarter Insurance Software for a Digital Future
        </h1>
        <p className="text-base mb-8">
          From claims automation to policy management, our cloud-based solutions empower insurers, agents, and customers with faster, smarter, and secure digital experiences.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleButtonClick}
            className="border border-white text-white hover:bg-white hover:text-[#2b0569f9] px-6 py-3 rounded-md font-medium transition"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
