// NavBar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        {/* Founders Icon */}
        <div className="flex">
          <img src="/founders-icon.png" alt="Founders Icon" className="w-8 h-8 mr-3" />
          <Link href="/" className="text-black text-lg font-bold">
            Founders
          </Link>

        </div>
        {/* Navigation links */}
        <div
          className={`hidden md:flex items-center space-x-1 lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link href="/" className="text-black hover:text-gray-300 font-semibold px-3 py-2">
                  Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/archive" className="text-black hover:text-gray-300 font-semibold	px-3 py-2">
                  Archive
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>

        {/* Mobil menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}  
          </button>
        </div>


      </div>
      {/* Mobile menu items */}
      <div className={`md:hidden ${isOpen ? '' : 'hidden'}`}>
        <Link href="/" className="block py-2 px-4 text-sm font-semibold	hover:bg-gray-200">
            Home
        </Link>
        <Link href="/archive" className="block py-2 px-4 font-semibold text-sm hover:bg-gray-200">
            Archive
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;