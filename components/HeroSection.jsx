"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background image (optional overlay) */}
      <Image
        src="/pertinent8.jpg" // Replace with your image path in public folder
        alt="Construction site by Pertinent Civil Engineers"
        fill
        priority
        className="object-cover z-0 opacity-30"
      />

      {/* Content on top of image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl z-10 relative"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Built to be
          <span className="text-red-600"> Pertinent</span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
          Welcome to <strong>Pertinent Construction Services</strong>, a trusted
          outsourcing partner for the AEC industry, offering reliable
          construction estimation, project coordination, and end-to-end support
          for general contractors, subcontractors, and material suppliers —
          helping you deliver successful projects,
          <b> on time and within budget.</b>
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition duration-300"
        >
          Explore Our Services
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
