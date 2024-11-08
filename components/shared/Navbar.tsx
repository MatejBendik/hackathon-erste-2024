'use client'

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      {/* Logo or App Name */}
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        My AI Version
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </a>
        <a href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
          About
        </a>
        <a href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
          Contact
        </a>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        {/* Toggle Theme Button */}
        <button
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="Toggle Dark Mode"
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          🌙
        </button>

        {/* User Login/Logout Buttons */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
