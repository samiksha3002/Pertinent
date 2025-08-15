"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";

const navLinks = [
  { name: "Home", to: "/", isPage: true },
  { name: "About", to: "/about", isPage: true },
  { name: "Services", to: "/service", isPage: true },
  { name: "Projects", to: "/gallery", isPage: true },
  { name: "Contact", to: "/contact", isPage: true },
];

// Adjust these to EXACT hero logo size (in pixels)
const LOGO_HEIGHT = 60; // hero logo height
const LOGO_WIDTH = 160; // hero logo width

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

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
      <div
        className={clsx(
          "px-6 py-4 max-w-7xl mx-auto flex items-center justify-between transition-colors duration-300 backdrop-blur-md",
          scrolled ? "bg-transparent" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={scrolled ? "/PCS Logo.png" : "/PCS Logo white.png"}
            alt="Pertinent Logo"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
            className="block object-contain"
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
                  : scrolled
                  ? "text-black hover:text-red-500"
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
            className={clsx(scrolled ? "text-black" : "text-white")}
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
