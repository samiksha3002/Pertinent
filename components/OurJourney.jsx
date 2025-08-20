"use client";

import React from "react";
import { motion } from "framer-motion";

const OurJourney = () => {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Heading with animation */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center h-full" // ✅ vertically + horizontally center
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-center">
            Our <span className="text-red-600">Journey</span>
          </h2>
        </motion.div>

        {/* Right Side: Text content with animation */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed space-y-6 text-gray-700"
        >
          <p>
            Founded with a vision to bridge the gap between accuracy,
            responsiveness, and real construction needs, Pertinent has evolved
            into a trusted back-end partner for general contractors,
            subcontractors, suppliers and developers.
          </p>
          <p>
            Over the years, we’ve supported our clients across multiple scopes,
            on thousands of projects—from single-storey builds to complex
            multi-use developments, spanning commercial, residential, retail,
            and public infrastructure.
          </p>
          <p>
            As a remote team based in India, we bring together technical
            expertise, construction understanding, and process efficiency to
            help you stay competitive, organized, and ahead of deadlines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurJourney;
