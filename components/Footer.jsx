// src/components/Footer.jsx
"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/PCS Logo white.png"
              alt="Pertinent Logo"
              className="h-10 w-auto"
            />
            {/* <span className="text-white text-xl font-bold">Pertinent</span> */}
          </div>
          <p className="text-sm text-gray-400">
            Building strong foundations with trust, innovation, and precision.
            We are a civil engineer-led construction company.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-600">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-600">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-red-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center space-x-2 text-sm mb-2">
            <FaPhone className="text-red-600" /> <span>+91 9876543210</span>
          </p>
          <p className="flex items-center space-x-2 text-sm mb-4">
            <FaEnvelope className="text-red-600" />{" "}
            <span>info@pertinent.com</span>
          </p>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-red-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Pertinent Construction. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
