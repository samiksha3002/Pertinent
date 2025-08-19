"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // ✅ fixed (no TypeScript)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          MyWebsite
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/">Home</Link>
          <div className="relative">
            <button onClick={() => toggleDropdown("services")}>
              Services
            </button>
            <AnimatePresence>
              {openDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute mt-2 bg-white text-black rounded-lg shadow-lg p-4 space-y-2"
                >
                  <Link href="/web" className="block hover:text-blue-600">
                    Web Development
                  </Link>
                  <Link href="/app" className="block hover:text-blue-600">
                    App Development
                  </Link>
                  <Link href="/seo" className="block hover:text-blue-600">
                    SEO Optimization
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">☰</button>
      </div>
    </header>
  );
}
