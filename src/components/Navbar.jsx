import React from 'react';
import logoImg from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Dev Stack Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-pink-600 font-semibold">
            Home
          </a>
          <a href="#tech-section" className="hover:text-gray-900 transition-colors">
            Technologies
          </a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:opacity-95 transition-opacity shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;