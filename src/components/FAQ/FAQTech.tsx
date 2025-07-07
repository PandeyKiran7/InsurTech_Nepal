import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: 'What technology stack do you use?',
    answer: 'We use modern stacks including React, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, and Kubernetes, depending on the solution.',
  },
  {
    question: 'Is your system cloud-based or on-premise?',
    answer: 'We primarily offer cloud-based solutions but also support hybrid and on-premise deployments based on client needs.',
  },
  {
    question: 'Do you support mobile-first development?',
    answer: 'Yes, we follow a mobile-first approach to ensure seamless experiences across devices.',
  },
  {
    question: 'Is your system API-first and modular?',
    answer: 'Yes, our systems are built with an API-first architecture, making it easy to extend and integrate.',
  },
];


const FAQTech: React.FC = () => {
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

export default FAQTech;
