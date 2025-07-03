'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Image from 'next/image';
import Logo from "../../../public/logo.png";

const Footer = () => {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `transition-all duration-300 hover:text-[#3AAFA9] ${
      pathname === href ? 'text-[#3AAFA9] font-bold' : 'text-white'
    }`;

  return (
    <footer className="bg-[#3AAFA9] text-white py-2 md:py-5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src={Logo}
                alt="Logo"
                className="rounded-sm"
                width={100}
                height={110}
              />
              <div>
                <span className="text-3xl font-semibold">InsurTech Nepal</span>
              </div>
            </div>
            <p className="text-white text-lg p-2">
              Shaping technology for the future. We are a leading provider of innovative
              technology solutions, dedicated to helping businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center p-3 bg-gray-800 rounded-md hover:bg-[#3AAFA9] transition-colors duration-200"
                >
                  <Icon className="h-6 w-6 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-white">Contact Us</h3>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="h-5 w-5" />
              <span className="text-lg">123 Main Street, Anytown, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-5">📞</span>
              <span className="text-lg">+1 555-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-5">✉️</span>
              <span className="text-lg">info@insuretech.com</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              {[
                { href: '/services/predictive-modelling', label: 'Predictive Modelling' },
                { href: '/services/chat-gpt-integration', label: 'Chat GPT Integration' },
                { href: '/services/natural-language-processing', label: 'Natural Language Processing' },
                { href: '/services/machine-learning', label: 'Machine Learning' },
                { href: '/services/computer-vision', label: 'Computer Vision' },
                { href: '/services/big-data-analytics', label: 'Big Data Analytics' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClasses(href)}>
                    <span className="text-white text-xl">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        
          <div className="space-y-4 mt-6 lg:mt-0">
            <div>
              <h4 className="text-3xl font-semibold text-white mt-4">Quick Links</h4>
              <ul className="space-y-2 mt-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about-us', label: 'About Us' },
                  { href: '#product', label: 'Our Products' },
                 { href: '#client', label: 'Client' },
                  { href: '#technology', label: 'Technology' },
                  { href: '#contact', label: 'Contact US' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white text-xl transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-white text-lg mt-6">
          &copy; {new Date().getFullYear()} InsurTech Nepal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
