'use client';

import React from 'react';
import Link from 'next/link';

const clients = [
  {
    name: 'Himalayan Life Insurance',
    img: 'https://via.placeholder.com/120x60/6C63FF/FFFFFF?text=Client+A',
  },
  {
    name: 'Everest General Insurance',
    img: 'https://via.placeholder.com/120x60/4ECDC4/FFFFFF?text=Client+B',
  },
  {
    name: 'National Life Insurance',
    img: 'https://via.placeholder.com/120x60/FFD93D/FFFFFF?text=Client+C',
  },
  {
    name: 'Reliable Insurance Co.',
    img: 'https://via.placeholder.com/120x60/6C63FF/FFFFFF?text=Client+D',
  },
  {
    name: 'Global IME Life',
    img: 'https://via.placeholder.com/120x60/4ECDC4/FFFFFF?text=Client+E',
  },
  {
    name: 'Neco General',
    img: 'https://via.placeholder.com/120x60/FFD93D/FFFFFF?text=Client+F',
  },
];

const ClientPage = () => {
  return (
    <section className="bg-[#f7fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto">
     
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Our Valued Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Proudly serving the leading insurance companies and institutions in Nepal.
          </p>
        </div>
   
        <div className="bg-white shadow-lg rounded-2xl p-10">
          <p className="text-center text-gray-700 text-lg leading-relaxed mb-8">
            We are honored to partner with a diverse range of insurance providers. Our solutions are
            trusted by institutions that represent over 80% of the insurance market in Nepal.
          </p>

          <h3 className="text-center text-2xl font-semibold text-indigo-600 mb-8">
            Some of Our Esteemed Partners:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="mx-auto mb-4 opacity-90 text-gray-700"
                />
                <p className="font-semibold text-gray-800">{client.name}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 text-base md:text-lg">
              Want to join our growing list of satisfied partners?
            </p>
            <Link href="#contact">
              <button className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-6 py-2 rounded-full shadow-md transition">
                Partner With Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPage;
