'use client';
import { Handshake } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import CTA from '@/components/Cta';
import ClientHeroSection from '@/components/HeroSection/ClientHeroSection';
import FAQClient from '@/components/FAQ/FAQClient';

const clients = [
  {
    name: 'Nepal Life Insurance',
    img: '/partners/nepallife.png',
  },
  {
    name: 'Shikhar Insurance',
    img: '/partners/shikhar.png',
  },
  {
    name: 'IME Life Insurance',
    img: '/partners/ime.png',
  },
  {
    name: 'Prudential Insurance',
    img: '/partners/prudential.png',
  },
  {
    name: 'Siddhartha Insurance',
    img: '/partners/siddhartha.png',
  },
  {
    name: 'Reliable Nepal Life',
    img: '/partners/reliable.png',
  },
];

const ClientPage = () => {
  return (
    <section className="bg-[#f7fafc]">
        <div className=' mb-16 bg-blue-300'>
     <ClientHeroSection/>
        </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-gray-800">
            Our Valued Clients
          </h2>
          <div className="w-10 h-1 bg-[#2b0569f9] mx-auto mt-2 rounded"></div>
          <p className="text-2xl  text-[#2b0569f9] mt-4 font-semibold">
            Proudly serving the leading insurance companies and institutions in Nepal.
          </p>
        </div>
   
        <div className="bg-white shadow-lg rounded-2xl p-10 mb-16">
      <p className="text-center text-gray-700 text-lg leading-relaxed mb-8">
        We are honored to partner with a diverse range of insurance providers. Our solutions are
        trusted by institutions that represent over 80% of the insurance market in Nepal.
      </p>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-3">
          <Handshake className="w-8 h-8 text-[#2b0569f9]" />
        </div>
        <h3 className="text-2xl font-semibold text-[#2b0569f9]">
          Some of Our Esteemed Partners
        </h3>
        <div className="w-10 h-1 bg-[#2b0569f9] mx-auto mt-2 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={client.img}
              alt={client.name}
              className="mx-auto mb-4 max-h-16 object-contain"
            />
            <p className="font-semibold text-gray-800">{client.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4 text-base md:text-lg">
          Want to join our growing list of satisfied partners?
        </p>
        <Link href="#contact">
          <button className="bg-[#2b0569f9] hover:bg-[#1e044e] text-white font-medium px-6 py-2 rounded-full shadow-md transition">
            Partner With Us
          </button>
        </Link>
      </div>
    </div>
      </div>
      <FAQClient/>
      <div className='text-gray-800'>
        <CTA/>
      </div>
    </section>
  );
};

export default ClientPage;
