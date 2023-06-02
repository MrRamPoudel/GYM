"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <a href="#" className="text-white text-2xl font-bold">
                Fitness 360
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/" className="text-gray-300 hover:text-white px-4">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-4">
                About
              </Link>
              <Link href="/classes" className="text-gray-300 hover:text-white px-4">
                Classes
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white px-4">
                Membership
              </Link>
              <a href="/contact" className="text-gray-300 hover:text-white px-4">
                Contact
              </a>
              <a href="/login" className="text-gray-300 hover:text-white px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                >
                  <title />
                  <g id="Complete">
                    <g id="user">
                      <g>
                        <path
                          d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="7"
                          fill="none"
                          r="4"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>

            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {toggle && (
        <div className="md:hidden bg-gray-900">
          <div className="flex flex-col items-center">
            <Link href="/" className="text-white py-2 hover:bg-gray-500 block w-full text-center">
              Home
            </Link>
            <Link href="/about" className="text-white py-2 hover:bg-gray-500 block w-full text-center">
              About
            </Link>
            <Link href="/classes" className="text-white py-2 hover:bg-gray-500 block w-full text-center">
              Classes
            </Link>
            <Link href="/pricing" className="text-white py-2 hover:bg-gray-500 block w-full text-center">
              Membership
            </Link>
            <Link href="/contact" className="text-white py-2 hover:bg-gray-500 block w-full text-center">
              Contact
            </Link>
            <Link href="/login" className="text-white py-2 hover:bg-gray-500 block w-full text-center">
              Log in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}