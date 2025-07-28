"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";

// Navigation links configuration
const navLinks = [
  { name: "Home", to: "/", isPage: true },
  { name: "About", to: "/about", isPage: true },
  { name: "Services", to: "/service", isPage: true },
  { name: "Gallery", to: "/gallery", isPage: true },
  { name: "Contact", to: "/contact", isPage: true },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="bg-transparent backdrop-blur-md px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/PCS Logo white.png"
            alt="Pertinent Logo"
            className="h-14 w-auto transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              className={clsx(
                "text-lg font-medium transition relative group",
                pathname === link.to
                  ? "text-red-500"
                  : "text-white hover:text-red-500"
              )}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pt-2 pb-6 flex flex-col gap-4 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.to}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "text-lg",
                pathname === link.to
                  ? "text-red-500"
                  : "text-white hover:text-red-500"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
