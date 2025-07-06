"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `transition-all duration-300 hover:text-[#3AAFA9] ${
      pathname === href ? "text-[#3AAFA9] font-bold" : "text-white"
    }`;

  return (
    <footer className="bg-white text-gray-800 ">
      <div className="container mx-auto px-2 shadow-[0_-6px_12px_-4px_rgba(0,0,0,0.1)] pb-12 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 ml-10">
          <div className="space-y-2 ">
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-black font-bold ml-2">
                InsurTech Nepal
              </span>
            </div>
            <p className="text-gray-800 text-base p-2">
              Shaping technology for the future. We are a leading provider of
              innovative technology solutions, dedicated to helping businesses
              thrive in the digital age.
            </p>
            <div className="flex gap-6  ">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="items-center mt-6  rounded-md transition-colors duration-200"
                  >
                    <Icon className="h-6 w-6 text-gray-900 bg-white cursor-pointer rounded-xl" />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="space-y-4 ml-12 mr-4 cursor-pointer">
            <h3 className="text-2xl font-semibold text-[#2b0569f9] w-24">Services</h3>
            <span className="block w-10  border-b-4 border-[#2b0569f9] pb-1"></span>
            <ul className="space-y-2">
              {[
                {
                  href: "/services/predictive-modelling",
                  label: "Predictive Modelling",
                },
                {
                  href: "/services/chat-gpt-integration",
                  label: "Chat GPT Integration",
                },
                {
                  href: "/services/natural-language-processing",
                  label: "Natural Language Processing",
                },
                {
                  href: "/services/machine-learning",
                  label: "Machine Learning",
                },
                { href: "/services/computer-vision", label: "Computer Vision" },
              ].map(({ href, label }, index, arr) => (
                <li
                  key={href}
                  className={`text-gray-800 text-base transition-colors duration-300 ${
                    index !== arr.length ? "" : ""
                  }`}
                >
                  <Link href={href} className={linkClasses(href)}>
                    <span className="text-gray-800 hover:text-[#2b0569f9]  text-base">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mr-10 cursor-pointer ">
            <h4 className="text-2xl font-semibold text-[#2b0569f9] ">Quick Links</h4>
            <span className="block w-10  border-b-4  border-[#2b0569f9] pb-1"></span>

            <ul className="space-y-2 ml-0.5">
              {[
                { href: "#home", label: "Home" },
                { href: "#about-us", label: "About Us" },
                { href: "#product", label: "Our Products" },
                { href: "#client", label: "Client" },
                { href: "#technology", label: "Technology" },
              ].map(({ href, label }, index, arr) => (
                <li
                  key={href}
                  className={`text-gray-800  hover:text-[#2b0569f9] text-base transition-colors duration-300 ${
                    index !== arr.length ? "" : ""
                  }`}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
         <div className="space-y-4">
  <h3 className="text-2xl font-semibold text-[#2b0569f9]">Contact Us</h3>
  <div className="w-10 p-0.5 border-[#2b0569f9] bg-[#2b0569f9]"></div>
 
  <div className="flex items-center gap-2 text-gray-800 group cursor-pointer">
    <FaMapMarkerAlt className="h-5 w-5 text-gray-500 group-hover:text-[#2b0569f9]" />
    <span className="text-base">123 Main Street, Anytown, USA</span>
  </div>

  <div className="flex items-center gap-2 text-gray-800 group cursor-pointer">
    <PhoneCall className="h-5 w-5 text-gray-500 group-hover:text-[#2b0569f9]" />
    <span className="text-base">+1 555-123-4567</span>
  </div>

  <div className="flex items-center gap-2 text-gray-800 group cursor-pointer">
    <Mail className="h-5 w-5 text-gray-500 group-hover:text-[#2b0569f9]" />
    <span className="text-base">info@insuretech.com</span>
  </div>
</div>

        </div>
        <div className="w-[90%] items-center ml-16 border-1 border-gray-600 mt-6 "></div>
        <div className="text-center pt-4 text-gray-800">
                <span>
              &copy; {new Date().getFullYear()} InsurTech Nepal. All rights
              reserved.
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
