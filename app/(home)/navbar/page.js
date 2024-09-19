"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.logo.com/api/v2/images?design=logo_5439449a-0a5c-4637-a158-2d6bdd140350&u=2024-08-20T21%3A13%3A03.341Z&format=svg&margins=166&width=1000&height=750&fit=contain"
              alt="Logo"
              className="h-8"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
              aria-label="Toggle menu"
            >
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-4`}>
            <Link
              href="/homepage"
              className="text-gray-700 hover:text-blue-500"
            >
              Home
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-500"
            >
              Projects
            </Link>
            <Link href="/skills" className="text-gray-700 hover:text-blue-500">
              Skills
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4">
          <Link
            href="/homepage"
            className="block text-gray-700 hover:text-blue-500 py-2"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-blue-500 py-2"
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className="block text-gray-700 hover:text-blue-500 py-2"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="block text-gray-700 hover:text-blue-500 py-2"
          >
            Skills
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
