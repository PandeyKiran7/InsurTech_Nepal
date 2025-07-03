import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import RetailImage from '../../assets/images/retail-banner.jpeg'; 

const RetailHeroSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/aiconsultant');
  };

  return (
    <main>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Ultimate Retail Experience Starts Here
            </h2>
            <p className="text-xl tracking-wider text-gray-900 mb-6 mr-20">
              Discover a smarter way to shop with our AI-powered retail platform. From personalized product suggestions to seamless checkout, we make online shopping faster, easier, and more enjoyable.
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-[#3AAFA9] hover:bg-[#2C9C95] text-white mt-10 font-bold py-3 px-6 rounded-md"
            >
              Schedule Demo
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={RetailImage}
                alt="Retail Shopping"
                className="object-cover rounded-xl"
                layout="responsive"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RetailHeroSection;
