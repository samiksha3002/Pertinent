"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-10">
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
            project. We are an extension of your team.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
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
                Gallery
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
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-600" /> +91 940-408-0041
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-600" />
              projects@pertinentservices.com <br /> pertinent.cs@gmail.com
            </p>
            <a
              href="https://wa.me/919404080041"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500 transition"
            >
              <FaWhatsapp className="text-green-500" /> Chat on WhatsApp
            </a>
          </div>

          {/* Social Icons with Links */}
          <div className="mt-5 flex space-x-4 text-white">
            <a
              href="https://www.facebook.com/yourpage" // replace with your actual Facebook page URL
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile" // replace with your actual Instagram handle
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://www.linkedin.com/company/pertinentconstructionservices" // replace with your actual LinkedIn company profile
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
