'use client';
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: "How does AI personalize shopping in retail?",
    answer:
      "AI uses customer behavior data to recommend products, customize search results, and tailor promotions in real-time, enhancing the shopping experience.",
  },
  {
    question: "What are the benefits of AI in e-commerce?",
    answer:
      "AI boosts conversion rates, improves customer support with chatbots, streamlines inventory, and enables dynamic pricing for better revenue.",
  },
  {
    question: "Is AI implementation expensive for small retailers?",
    answer:
      "Many cloud-based AI tools offer scalable pricing, making them accessible to small and medium retailers without high upfront costs.",
  },
  {
    question: "Can AI help with customer service?",
    answer:
      "Yes, AI chatbots and virtual assistants provide instant support, answer common queries, and reduce human workload.",
  },
  {
    question: "Does AI replace human employees?",
    answer:
      "AI enhances human roles by automating repetitive tasks, allowing staff to focus on strategic and creative work.",
  },
];

export default function RetailFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="bg-indigo-100 text-black rounded-lg p-6 mb-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            What is AI-Powered Retail E-Commerce?
          </h3>
          <p className="text-xl">
            AI-powered retail e-commerce uses artificial intelligence to enhance how shoppers browse, discover, and purchase products. It enables features like intelligent search, smart recommendations, dynamic pricing, automated customer support, and inventory optimization to improve both the customer experience and business performance.
          </p>
        </div>

        <div className="rounded-md shadow-sm divide-y divide-gray-200 m-10">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-md ${
                index === 0 ? "rounded-t-md" : ""
              } ${index === faqData.length - 1 ? "rounded-b-md" : ""}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-10 py-10 text-left font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              >
                <span className="text-xl font-bold">{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <FaMinus className="h-5 w-5" />
                  ) : (
                    <FaPlus className="h-5 w-5" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-6 text-2xl text-gray-900 bg-gray-50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
