"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", to: "/", isPage: true },
  { name: "About", to: "/about", isPage: true },
  {
    name: "Services",
    to: "/service",
    isPage: true,
    subLinks: [
      { name: "Quantity Takeoff & Estimation", to: "/quantity" },
      { name: "Project Controls Management", to: "/Estimatio" },
      { name: "ITB Support", to: "/bid" },
    ],
  },
  { name: "Projects", to: "/gallery", isPage: true },
  { name: "Contact", to: "/contact", isPage: true },
];

const LOGO_HEIGHT = 60;
const LOGO_WIDTH = 160;

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
 const [openDropdown, setOpenDropdown] = useState(null);


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
        <nav className="hidden md:flex space-x-10 relative">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* Main Services link */}
                <Link
                  href={link.to}
                  className={clsx(
                    "flex items-center text-lg font-medium transition relative group",
                    scrolled
                      ? "text-black hover:text-red-500"
                      : "text-white hover:text-red-500"
                  )}
                >
                  {link.name}
                  <ChevronDown size={18} className="ml-1" />
                </Link>

                {/* Dropdown Menu */}
                {openDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-3 z-50">
                    {link.subLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.to}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.name} className="flex flex-col">
                {/* Services as link + dropdown toggle */}
                <div className="flex justify-between items-center">
                  <Link
                    href={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-white hover:text-red-500"
                  >
                    {link.name}
                  </Link>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.name ? null : link.name)
                    }
                    className="text-white ml-2"
                  >
                    <ChevronDown size={18} />
                  </button>
                </div>

                {/* Dropdown items */}
                {openDropdown === link.name && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {link.subLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.to}
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-300 hover:text-red-500"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
