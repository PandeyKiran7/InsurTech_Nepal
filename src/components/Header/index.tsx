'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GetDemo from '../GetDemoBtn';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'About', path: '/about' },
  { name: 'Client', path: '/client' },
  { name: 'Technology', path: '/technology' },
];

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
          MyCompany
        </div>
        <ul className="flex space-x-8 text-xl font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`relative transition-all duration-300 ease-in-out ${
                  pathname === item.path
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-900 hover:text-indigo-500'
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-300 ${
                    pathname === item.path ? 'w-full' : 'group-hover:w-full'
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <GetDemo/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
