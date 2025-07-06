import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: 'What services does InsurTech Nepal offer?',
    answer:
      'We provide digital insurance solutions such as core insurance systems, mobile/web platforms, analytics, compliance tools, and custom software development.',
  },
  {
    question: 'Is InsurTech Nepal only for companies in Nepal?',
    answer:
      'No, we serve clients globally including offices in UAE, Pakistan, and the USA. Our services are tailored for local and international needs.',
  },
  {
    question: 'Can you build a custom insurance portal?',
    answer:
      'Yes, we specialize in building custom portals for agents, customers, and internal operations with seamless integration.',
  },
  {
    question: 'Do you offer support after deployment?',
    answer:
      'Absolutely. We provide maintenance, security updates, and dedicated support post-deployment to ensure stability and performance.',
  },
];

const FAQSection: React.FC = () => {
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

export default FAQSection;
