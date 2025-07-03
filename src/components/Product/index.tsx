'use client';

import React from 'react';
import Link from 'next/link';
import { FaCogs, FaGlobe, FaBrain, FaChartLine } from 'react-icons/fa';

type ProductType = {
  Icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  button: string;
};

const products: ProductType[] = [
  {
    Icon: FaCogs,
    title: 'iSolution Core Insurance System',
    description:
      'A robust, scalable, and fully integrated core insurance platform designed for both Life and Non-Life insurers.',
    features: [
      'Policy Administration',
      'Claims Management',
      'Reinsurance Module',
      'Agent & Broker Portals',
      'Financial Accounting',
      'Extensive Reporting & Analytics',
    ],
    button: 'Request a Demo',
  },
  {
    Icon: FaGlobe,
    title: 'eBeema Digital Aggregator',
    description:
      'A cutting-edge online platform connecting customers with various insurance products and providers seamlessly.',
    features: [
      'Instant Online Quotes',
      'Policy Comparison',
      'Online Policy Purchase',
      'Digital Payment Gateways',
      'Customer Self-Service Portal',
      'Mobile App Integration',
    ],
    button: 'See it in Action',
  },
  {
    Icon: FaBrain,
    title: 'AI-Powered Customer Service Chatbot',
    description:
      'Enhance customer experience and reduce operational costs with our intelligent, always-on chatbot.',
    features: [
      'Natural Language Understanding',
      '24/7 Policy Inquiries',
      'Claims Status & FAQs',
      'Personalized Interactions',
      'Seamless Agent Handover',
      'Multi-language Support',
    ],
    button: 'Learn More',
  },
  {
    Icon: FaChartLine,
    title: 'Advanced Analytics & BI',
    description:
      'Transform your data into actionable insights to drive better business decisions and strategic growth.',
    features: [
      'Real-time Dashboards',
      'Predictive Modeling',
      'Fraud Detection',
      'Customer Segmentation',
      'Underwriting Optimization',
      'Regulatory Compliance Reporting',
    ],
    button: 'Discover Insights',
  },
];

const ProductPage: React.FC = () => {
  return (
    
    <section className="bg-[#f7fafc] py-24 px-4" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Comprehensive Product Suite
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions tailored to every aspect of the insurance value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => {
            const { Icon } = product;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
              >
                <div className="text-center">
                  <Icon className="text-4xl text-indigo-600 mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">{product.description}</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link href="#contact">
                    <button className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-6 py-2 rounded-full transition">
                      {product.button}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
