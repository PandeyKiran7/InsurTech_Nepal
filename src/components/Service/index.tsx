// pages/services.tsx
import React, { JSX } from 'react';
import Head from 'next/head';
import { FaShieldAlt, FaLaptopCode, FaChartLine, FaUserShield } from 'react-icons/fa';
import FAQSection from '../FAQ';
import CTA from '../Cta';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaShieldAlt className="text-4xl text-[#2b0569f9]" />,
    title: 'Core Insurance System',
    description: 'Policy management, claims processing, billing & underwriting automation for insurers.',
  },
  {
    icon: <FaLaptopCode className="text-4xl text-[#2b0569f9]" />,
    title: 'Custom Software Development',
    description: 'Tailored digital solutions including web platforms, portals, and mobile apps.',
  },
  {
    icon: <FaChartLine className="text-4xl text-[#2b0569f9]" />,
    title: 'Data & Analytics',
    description: 'Leverage AI, ML, and predictive analytics to optimize insurance operations.',
  },
  {
    icon: <FaUserShield className="text-4xl text-[#2b0569f9]" />,
    title: 'Regulatory Compliance',
    description: 'Automated tools to ensure insurance compliance with Nepal’s evolving regulations.',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-800">
        <section className="bg-[#310e69f9] text-white py-20  text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-base opacity-90">
            Empowering Nepal’s insurance sector with modern, secure, and intelligent digital solutions.
          </p>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md hover:shadow-xl border border-gray-200 rounded-2xl p-6 text-start transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
            <div>
              <FAQSection/>
            </div>
      <CTA/>
      </main>
    </>
  );
};

export default ServicesPage;
