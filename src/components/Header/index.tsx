'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GetDemo from '../GetDemoBtn';
import Image from 'next/image';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'About', path: '/about' },
  { name: 'Client', path: '/client' },
  { name: 'Technology', path: '/technology' },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={` flex bg-white sticky top-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? 'h-[70px]' : 'h-[100px]'
      }`}
    >
      <nav
        className={`container mx-auto px-10 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="ml-24 flex items-center">
          <Image
            src="/Logo.png"
            alt="Company logo"
            width={isScrolled ? 60 : 100}
            height={isScrolled ? 60 : 100}
            className="object-contain transition-all duration-300"
            priority
          />
        </div>

        <ul
          className={`flex gap-8  items-center font-medium transition-all duration-300 ${
            isScrolled ? 'text-sm' : 'text-base'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                href={item.path}
                className={`transition-all duration-300 ease-in-out ${
                  pathname === item.path
                    ? 'text-gray-800 font-semibold'
                    : 'text-gray-800'
                }`}
              >
                {item.name}
                <span
                  className={`block h-[4px] mt-2 rounded-xl bg-[#44c9c0]  transition-all duration-300 ${
                    pathname === item.path ? 'w-10' : 'w-0 group-hover:w-10'
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`transition-all pb-6 cursor-pointer duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
          <GetDemo />
        </div>
      </nav>
    </header>
  );
};

export default Header;
