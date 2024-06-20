// Navbar.jsx

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Website</div>
        {/* Hamburger menu button */}
        <div className="block sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Menu links */}
        <div className={`sm:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex justify-end sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
            <li><a className="text-white hover:text-gray-200" href="/">Home</a></li>
            <li><a className="text-white hover:text-gray-200" href="/services">Services</a></li>
            <li><a className="text-white hover:text-gray-200" href="/about">About</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
