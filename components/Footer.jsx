"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-12 px-6 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 border-b border-gray-800 pb-10">
        
        {/* Brand & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/PCS Logo white.png"
              alt="Pertinent Logo"
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            PERTINENT is a construction services company, providing expert 

            project support services to General Contractors, Subcontractors, and
            Suppliers in their daily tasks and throughout the life cycle of the
            project. <b>We are an extension of your team.</b>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-center">
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide text-center md:text-left">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300 text-center md:text-left">
            <li>
              <a href="/" className="hover:text-red-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-red-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-red-600 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            Get in Touch
          </h3>
          <div className="space-y-3 text-sm text-gray-300">
            
           {/* Contact Emails */}
{/* Contact Emails */}
<div className="space-y-2 text-sm text-gray-300">
  <p className="flex items-center gap-2">
    <FaEnvelope className="text-red-600" />
    <a
      href="mailto:projects@pertinentservices.com"
      className="hover:text-red-600 transition"
    >
      projects@pertinentservices.com
    </a>
  </p>
  <p className="flex items-center gap-2">
    <FaEnvelope className="text-red-600 invisible" /> {/* placeholder for alignment */}
    <a
      href="mailto:pertinent.cs@gmail.com"
      className="hover:text-red-600 transition"
    >
      pertinent.cs@gmail.com
    </a>
  </p>
</div>


          </div>

          {/* Social Icons with Links */}
          <div className="mt-5 flex space-x-4 text-white">
            <a
              href=" https://www.instagram.com/pertinentconstructionservices/profilecard/?igsh=a2p1NmVnaWU1eHhx "
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://www.linkedin.com/company/pertinentconstructionservices"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Pertinent Construction. All rights
        reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
