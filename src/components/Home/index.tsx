"use client";
import { useRouter } from "next/navigation";

import React from "react";
import Link from "next/link";
import { FaShieldAlt, FaMobileAlt, FaRobot } from "react-icons/fa";
import HeroSection from "../HeroSection/HeroSection";
import { Check, CheckCheckIcon, Ticket } from "lucide-react";
const HomePage: React.FC = () => {
  return (
    <div id="home" className="pt-0">
      <HeroSection />
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["40+", "Insurance Companies Served"],
            ["2M+", "Policies Processed"],
            ["10+", "Years in Insurance Technology"],
            ["80%", "Market Share in Nepal"],
          ].map(([number, label], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl font-bold text-[#44c9c0] mb-2">
                {number}
              </div>
              <div className="text-gray-700">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#44c9c0]">
              Our Flagship Solutions
            </h2>
            <p className="text-gray-600 mt-8">
              Comprehensive insurance technology solutions designed for the
              modern digital age
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaShieldAlt className="text-4xl text-teal-600 mb-4" />,
                title: "iSolution",
                description:
                  "Complete core insurance system with policy management, claims processing, and financial reporting.",
                features: [
                  "Policy Lifecycle Management",
                  "Claims Processing Automation",
                  "Real-time Reporting",
                  "Regulatory Compliance",
                ],
              },
              {
                icon: <FaMobileAlt className="text-4xl text-teal-600 mb-4" />,
                title: "eBeema",
                description:
                  "Digital insurance aggregator platform connecting customers with multiple insurance providers.",
                features: [
                  "Multi-Insurer Integration",
                  "Instant Quote Comparison",
                  "Digital Policy Issuance",
                  "Customer Portal",
                ],
              },
              {
                icon: <FaRobot className="text-4xl text-teal-600 mb-4" />,
                title: "AI Chatbot",
                description:
                  "Intelligent customer service automation with natural language processing.",
                features: [
                  "24/7 Customer Support",
                  "Multilingual Support",
                  "Policy Inquiries",
                  "Claims Status Updates",
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                {product.icon}
                <h3 className="text-xl font-semibold  text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="list-none text-gray-700 space-y-1 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-teal-600 mt-1 w-6 h-8 stroke-[4]" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Trusted by leading insurance companies across Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: '"Thanks to Insurtech Nepal, we streamlined our entire policy issuance process and reduced processing time by 70%."',
                author: "Rajesh Sharma",
                company: "CEO, Himalayan Life Insurance",
              },
              {
                text: '"The eBeema platform has revolutionized how we reach customers. Our online sales increased by 300% in just six months."',
                author: "Priya Thapa",
                company: "Digital Head, Everest General Insurance",
              },
              {
                text: '"Insurtech Nepal\'s solutions are robust, scalable, and perfectly tailored for the Nepalese insurance market."',
                author: "Arjun Pandey",
                company: "CTO, National Life Insurance",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <p className="italic text-gray-700 mb-4">{testimonial.text}</p>
                <div className="font-semibold text-gray-800">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
