import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: 'What types of clients do you work with?',
    answer: 'We work with insurers, brokers, aggregators, third-party administrators, and digital startups in the insurance space.',
  },
  {
    question: 'Do you offer white-label solutions?',
    answer: 'Yes, we offer fully customizable white-label platforms that reflect your branding and business logic.',
  },
  {
    question: 'How do you ensure data security for clients?',
    answer: 'We use robust security practices including encryption, regular audits, role-based access, and compliance with data privacy regulations.',
  },
  {
    question: 'Can clients request specific features or workflows?',
    answer: 'Yes, our team works closely with clients to design and implement custom workflows and features.',
  },
];


const FAQClient: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center  text-[#2b0569f9] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-gray-800 text-lg font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-[#2b0569f9]">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQClient;
