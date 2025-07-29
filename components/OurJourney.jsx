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
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            OUR <br /> <span className="text-red-600">JOURNEY</span>
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
            Our journey began, working with top General Contractors and
            Subcontractors in the AEC industry, including:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Cadence Mcshane</li>
            <li>Skiles Group</li>
            <li>Muckleroy Falls</li>
            <li>The Door Company</li>
            <li>The Demo Company</li>
          </ul>

          <p>
            Recognizing the industry's growing need for quality-driven
            outsourcing, we established{" "}
            <strong className="text-black font-semibold">Pertinent</strong>
            —a trusted partner focused on delivering accurate, timely, and
            cost-effective construction support services.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurJourney;
