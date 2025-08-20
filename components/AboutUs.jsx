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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Who we <span className="text-red-600"> are</span>
          </h2>
          <p className="text-gray-800 text-lg mb-4 leading-relaxed">
            Pertinent Construction Services is a trusted construction services
            partner to the Architecture, Engineering, and Construction (AEC)
            industry. We specialize in quantity takeoff, project controls, and
            bid management, supporting general contractors, subcontractors, and
            suppliers across commercial, multifamily, retail, and industrial
            projects.
          </p>
          <p className="text-gray-800 text-lg mb-4 leading-relaxed">
            With hands-on expertise across all trades in building construction,
            we act as an extension of your team — helping you bid smarter,
            manage projects seamlessly, and deliver with confidence. Whether
            you're scaling your business or navigating tight schedules
            <b> Pertinent is built to support you at every stage.</b>
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
