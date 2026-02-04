"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#howitworks" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="flex items-center justify-center mt-15">
      <nav className="bg-white border-2 rounded-3xl m-5 border-gray-200 w-full lg:w-6xl z-50 fixed ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-[0px_11px_66px_-26px_rgba(59,130,246,0.5)]">
          <div className="flex justify-between h-18 items-center">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link href="/" className="flex text-xl font-bold">
                <Image src="/logo.png" alt="Logo" width={150} height={50} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-purple-950 hover:text-purple-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-purple-950 hover:text-white focus:outline-none"
                aria-label="Toogle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            {/* Mobil Menu Content */}
            {isOpen && (
              <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300 h-full">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-purple-950 hover:text-purple-600 hover:bg-gray-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                    key="signin"
                    href="/signin"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-purple-950 hover:text-purple-600 hover:bg-gray-50"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            )}

            <div className="hidden lg:flex space-x-8">
              <Link
                key="signin"
                href="/signin"
                className=" flex gap-2 items-center"
              >
                <Button className="bg-white border text-purple-950 border-purple-950 hover:text-white hover:bg-purple-950 transition-colors font-medium">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
