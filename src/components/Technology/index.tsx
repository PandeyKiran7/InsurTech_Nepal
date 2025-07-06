"use client";

import React from "react";
import {
  FaJava,
  FaDatabase,
  FaReact,
  FaAws,
  FaDocker,
  FaLock,
  FaCodeBranch,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";
import CTA from "../Cta";

const technologies = [
  {
    icon: <FaJava className="text-4xl text-indigo-600" />,
    name: "Java / Spring Boot",
  },
  {
    icon: <FaDatabase className="text-4xl text-green-600" />,
    name: "PostgreSQL / Oracle",
  },
  {
    icon: <FaReact className="text-4xl text-blue-500" />,
    name: "React / Angular",
  },
  {
    icon: <FaAws className="text-4xl text-yellow-500" />,
    name: "AWS Cloud Services",
  },
  {
    icon: <FaDocker className="text-4xl text-blue-600" />,
    name: "Docker / Kubernetes",
  },
  {
    icon: <FaLock className="text-4xl text-red-500" />,
    name: "Advanced Security Protocols",
  },
  {
    icon: <FaCodeBranch className="text-4xl text-purple-600" />,
    name: "Microservices Architecture",
  },
  {
    icon: <FaRobot className="text-4xl text-pink-500" />,
    name: "AI / Machine Learning",
  },
];

const securityItems = [
  {
    title: "Data Encryption",
    description:
      "All sensitive data is encrypted both in transit and at rest using industry-standard protocols.",
  },
  {
    title: "Regular Audits",
    description:
      "We conduct frequent security audits and penetration testing to identify and mitigate potential vulnerabilities.",
  },
  {
    title: "Disaster Recovery",
    description:
      "Robust backup and disaster recovery plans are in place to ensure business continuity and data integrity.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Our cloud-native architecture allows for dynamic scaling to meet fluctuating demands without compromising performance.",
  },
];

const TechnologyPage: React.FC = () => {
  return (
    <section className="py-28 px-4 bg-[#f7fafc]" id="technology">
      <div className="max-w-6xl mx-auto space-y-20">
        <div>
          <div className="text-center mb-12">
            <h2 className="text-base font-extrabold text-gray-800">
              Our Technology Stack
            </h2>
            <div className="w-10 h-1  text-gray-800 bg-[#2b0569f9] mx-auto mt-2 rounded"></div>
            <p className=" font-bold mt-4 text-2xl text-[#2b0569f9]">
              Building secure, scalable, and high-performance solutions with
              modern technologies.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-7xl mx-auto">
            <p className="text-left text-gray-500 mb-8 leading-relaxed">
              At Insurtech Nepal, we leverage a robust and modern technology
              stack to ensure our solutions are not only powerful and efficient
              but also secure and future-proof. Our architecture is designed for
              scalability, enabling us to handle millions of transactions and
              adapt to the evolving demands of the insurance industry.
            </p>

            <h3 className="text-left text-2xl font-semibold text-[#2b0569f9] mb-6">
              Key Technologies We Use:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition bg-white"
                >
                  <div className="mb-3">{tech.icon}</div>
                  <p className="font-medium text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-base font-extrabold text-gray-800">
              Security and Reliability
            </h2>
            <div className="w-10 h-1 bg-[#2b0569f9] mx-auto mt-2 rounded"></div>
            <p className="text-0 mt-2 text-2xl text-[#2b0569f9] font-semibold">
              Your data is our priority. We adhere to the highest standards of
              data security and system reliability.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-7xl mx-auto">
            <ul className="space-y-6">
              {securityItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-teal-500 text-xl mt-1" />
                  <p className="text-gray-600">
                    <strong>{item.title}:</strong> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-800">
      <CTA/>
      </div>
    </section>
  );
};

export default TechnologyPage;
