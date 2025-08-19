"use client";

import React from "react";
import { FaHardHat, FaTools, FaClipboardCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  {
    title: "Pre-Construction",
    icon: <FaClipboardCheck size={30} />,
    points: [
      "Bid Management",
      "Quantity Estimation",
      "Comparing Subcontractor Quotes",
      "Drawing Change Management",
      "Constructability Review",
    ],
  },
  {
    title: "Construction",
    icon: <FaHardHat size={30} />,
    points: [
      "Submittal Management",
      "Material Procurement Tracking",
      "RFI Management",
      "Managing CM Platform",
      "Drawing Change Management",
    ],
  },
  {
    title: "Post-Construction",
    icon: <FaTools size={30} />,
    points: ["Closeout Management", "Punchlist Management"],
  },
];

const WhatWeServe = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
        Construction<span className="text-red-600"> Phase</span>
      </h2>
        <div className="h-1 w-16 bg-red-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6 text-red-600">
              {block.icon}
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 text-center uppercase tracking-wide">
              {block.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              {block.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeServe;
