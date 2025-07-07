import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: 'What types of insurance products do you offer?',
    answer: 'We offer a wide range of insurance products including life, health, motor, travel, and property insurance, all customizable for your needs.',
  },
  {
    question: 'Can your platform handle policy issuance and renewals?',
    answer: 'Yes, our system is built to automate policy issuance, renewals, endorsements, and cancellations with complete audit trails.',
  },
  {
    question: 'Is your product scalable for large enterprises?',
    answer: 'Absolutely. Our product is built on scalable architecture that can handle enterprise-grade data and user loads.',
  },
  {
    question: 'Can we integrate your product with our CRM or ERP?',
    answer: 'Yes, we support API-based integration with most CRM and ERP systems, ensuring seamless data flow.',
  },
];


const FAQProduct: React.FC = () => {
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

export default FAQProduct;
