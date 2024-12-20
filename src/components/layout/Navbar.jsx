import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <nav className="bg-[#f5f5f1] px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Aromax" className="h-10" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link to="/our-coffee" className="text-gray-700 hover:text-primary">
            Our Coffee
          </Link>
          <Link to="/our-story" className="text-gray-700 hover:text-primary">
            Our Story
          </Link>
          <Link to="/coffee-blog" className="text-gray-700 hover:text-primary">
            Coffee Blog
          </Link>
          <Link to="/contact-us" className="text-gray-700 hover:text-primary">
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/sample-request"
            className="px-4 py-2 text-gray-700 hover:text-primary"
          >
            Request Sample
          </Link>
          <Link to="/signup" className="px-4 py-2 text-black rounded">
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover"
          >
            Log In
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center rounded-full bg-white p-2 text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">Open user menu</span>
              <UserIcon className="h-5 w-5" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <Link
                  to={`/contracts`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contracts
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log out
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-4 mt-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/our-coffee"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Our Coffee
            </Link>
            <Link
              to="/our-story"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/coffee-blog"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Coffee Blog
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/sample-request"
              className="px-4 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Request Sample
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-black rounded"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>

            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center rounded-full bg-white p-2 text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">Open user menu</span>
              <UserIcon className="h-5 w-5" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contracts
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log out
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
