'use client';

import React, { useState } from 'react';
import {
  FaCogs,
  FaGlobe,
  FaBrain,
  FaChartLine,
} from 'react-icons/fa';
import { Check, MoreHorizontal } from 'lucide-react';
import CTA from '../Cta';
import ProductHeroSection from '../HeroSection/ProductHeroSection';

type ProductType = {
  Icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  button: string;
  useCases?: string[];
  benefits?: string[];
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
  useCases: [
    'Automating policy lifecycle from issuance to renewal',
    'Managing claims efficiently with transparency',
    'Empowering agents with digital tools for faster service',
  ],
  benefits: [
    'Faster turnaround time and reduced manual errors',
    'Improved customer satisfaction and retention',
    'Seamless collaboration across departments',
  ],
  button: 'Request a Demo',
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

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll
    ? product.features
    : product.features.slice(0, 3);

  return (
     
    < div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
      <div className="text-center">
        <product.Icon className="text-xl text-[#2b0569f9] mb-4" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {product.title}
      </h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <ul className="text-gray-700 mb-4 space-y-2">
        {visibleFeatures.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-[#2b0569f9] mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {product.features.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center text-[#2b0569f9] text-sm mb-4 hover:underline"
        >
          <MoreHorizontal className="h-5 w-5 mr-1" />
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
    
  );
};


const ProductPage: React.FC = () => {
  return (
    <>
      <section className="bg-[#f7fafc] py-24 px-4" id="products">
      {/* <ProductHeroSection/> */}
        <div className="max-w-7xl mx-auto mt-10">
          <div className="text-center mb-16">
            <h2 className="text-base font-extrabold text-gray-800">
              Our Comprehensive Product Suite
            </h2>
            <div className="mx-auto w-10 h-1 bg-[#2b0569f9] mt-1 rounded"></div>
            <p className="text-2xl font-bold text-[#2b0569f9] max-w-2xl mx-auto mt-6">
              Innovative solutions tailored to every aspect of the insurance value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
        
        <div className='text-gray-800'>
        <CTA/>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
