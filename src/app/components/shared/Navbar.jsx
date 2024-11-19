"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "For Companies", href: "/" },
    { name: "For Talent", href: "/jobs" },
    { name: "Our Products", href: "/" },
  ];
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleDropdown = () => {
  //     setIsOpen(!isOpen);
  //   };
  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-blue-800 top-3 lg:px-8 hover:bg-black">
        <div className="container flex items-center justify-between mx-auto text-white">
          {/* Left Side: Logo and Navigation */}
          <div className="flex items-center space-x-20">
            <Link
              href="/"
              className="block cursor-pointer py-1.5 text-white font-bold text-2xl"
            >
              <Image
                src="/logo.59102633.svg"
                alt="logo"
                width={140}
                height={50}
                className="invert"
              />
            </Link>
            <ul className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-xl text-slate-300 hover:border py-4 hover:border-t-0 hover:border-l-0 hover:border-r-0 "
                >
                  <Link
                    href={item.href}
                    className="flex flex-row items-center gap-4 font-semibold"
                  >
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-white font-bold text-xl pt-4 ps-4"
              >
                Flexiple
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-slate-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-100 "
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <button className="bg-white text-slate-100 px-8 py-2 rounded-md hover:bg-gray-500">
                  Login
                </button>
              </li>
            </ul>
          </div>

          {/* Right Side: Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex flex-row items-center gap-2 btn border border-gray-400 px-8 py-2 rounded-lg text-lg font-semibold text-slate-300">
              Find Jobs
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button className="flex flex-row items-center gap-2 btn bg-purple-600 border-purple-600  border px-8 py-2 rounded-lg text-lg font-semibold text-slate-100">
              Hire Developers
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button className="text-dark text-lg font-semibold px-8 py-2 text-slate-300">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
