import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: 'What is InsurTech Nepal?',
    answer: 'InsurTech Nepal is a digital insurance technology company focused on transforming the insurance landscape through innovation.',
  },
  {
    question: 'When was InsurTech Nepal founded?',
    answer: 'InsurTech Nepal was founded in 2020 with the vision of modernizing insurance operations in emerging markets.',
  },
  {
    question: 'Where are your offices located?',
    answer: 'We are headquartered in Nepal with regional offices in UAE, Pakistan, and the USA.',
  },
  {
    question: 'What is your mission?',
    answer: 'Our mission is to empower insurers with flexible, secure, and scalable digital tools that improve accessibility and efficiency.',
  },
];


const FAQAbout: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fffffffd] py-16 px-6">
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

export default FAQAbout;
