"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6 overflow-hidden relative"
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
            Who We Are
          </h2>
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            Pertinent is a next-gen civil engineering firm blending structural
            excellence with modern innovation. We specialize in delivering
            sustainable, durable, and functional construction solutions.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
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
          <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
            <img
              src="/pertinent2.jpg"
              alt="About Pertinent"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
