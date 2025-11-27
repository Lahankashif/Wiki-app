import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Wikipedia Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">Wikipedia</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/search"
              className="text-gray-700 hover:text-black font-medium"
            >
              Search
            </Link>
            <Link
              to="/history"
              className="text-gray-700 hover:text-black font-medium"
            >
              History
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-black font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 hover:text-black font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/search"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Search
            </Link>
            <Link
              to="/history"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              History
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
