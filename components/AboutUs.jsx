"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-white text-black py-24 px-6 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Who We <span className="text-red-600">Are</span>
          </h2>
          <p className="text-gray-800 text-lg mb-4 leading-relaxed">
            Pertinent is a next-gen civil engineering firm blending structural
            excellence with modern innovation. We specialize in delivering
            sustainable, durable, and functional construction solutions.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Our team of certified engineers, architects, and project managers
            ensures seamless execution of residential and commercial projects
            with technical precision and unmatched integrity.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full max-w-md mx-auto">
            <img
              src="/pertinent2.jpg"
              alt="About Pertinent"
              className="w-full h-92 object-cover transition duration-500 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
