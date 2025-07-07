"use client";

import React from "react";
import { FaShieldAlt, FaMobileAlt, FaRobot } from "react-icons/fa";
import HeroSection from "../HeroSection/HeroSection";
import { Check, CheckCheckIcon, Ticket } from "lucide-react";
import ServicesPage from "../Service";
const HomePage: React.FC = () => {
  return (
    <div id="home" className="pt-0 font-poppins">
      <HeroSection />
      <section className="bg-gray-100  py-16">
        <div className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["40+", "Insurance Companies Served"],
            ["2M+", "Policies Processed"],
            ["10+", "Years in Insurance Technology"],
            ["80%", "Market Share in Nepal"],
          ].map(([number, label], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="text-3xl font-bold text-[#2b0569f9] mb-2">
                {number}
              </div>
              <div className="text-gray-700">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div>
              <h2 className="text-base font-bold text-gray-700">
                Our Flagship Solutions
              </h2>
              <div className=" mx-auto  w-10 h-1 bg-[#2b0569f9] mt-1 rounded"></div>
            </div>
            <p className="text-[#2b0569f9] font-bold mt-8 text-2xl">
              Comprehensive insurance technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  max-w-6xl mx-auto py-10 shadow-sm gap-10 w-full px-20 ">
            {[
              {
                icon: (
                  <FaShieldAlt className="text-4xl text-[#2b0569f9] mb-4" />
                ),
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
                icon: (
                  <FaMobileAlt className="text-4xl text-[#2b0569f9] mb-4" />
                ),
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
                icon: <FaRobot className="text-4xl text-[#2b0569f9] mb-4" />,
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
                className={`relative rounded-2xl shadow-2xl bg-white overflow-hidden p-6 ${
                  index === 1 ? "scale-105 p-8 z-10" : ""
                } transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_30px_rgba(43,5,105,0.3)]`}
              >
                <div className="pt-6 flex flex-col items-start min-h-[120px]">
                  {product.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                </div>

                <p className="mb-4 text-base text-gray-700">
                  {product.description}
                </p>

                <ul className="list-none space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-1 w-5 h-5 stroke-[3] text-black" />
                      <span className="font-medium text-base text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white drop-[#2b0569f9] gap-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-base text-gray-700 mb-2">
              What Our Clients Say
            </h2>
            <div className=" mx-auto  w-10 h-1 bg-[#2b0569f9] mt-1 rounded"></div>
            <p className="text-[#2b0569f9] font-bold mt-8 text-2xl font-poppins">
              Trusted by leading insurance companies across Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                className="bg-gray-100 p-6 rounded-xl shadow-black hover:shadow-md transition"
              >
                <p className="font-poppins text-base text-gray-700 mb-4">
                  {testimonial.text}
                </p>
                <div className="font-semibold  text-gray-700">
                  {testimonial.author}
                </div>
                <div className="text-base text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesPage />
    </div>
  );
};

export default HomePage;
