"use client";

import React from "react";
import { FaLeaf, FaStar, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const content = [
  {
    icon: <FaLeaf size={24} className="text-red-500" />,
    title: "Mission",
    text: "To become a trusted global leader in construction support services — known for precision, reliability, and long-term partnership.",
    delay: 0,
  },
  {
    icon: <FaStar size={24} className="text-red-500" />,
    title: "Vision",
    text: "Empowering construction firms by taking ownership of time-consuming project tasks, letting teams focus on high-impact decisions and execution.",
    delay: 0.2,
  },
  {
    icon: <FaTrophy size={24} className="text-red-500" />,
    title: "Values",
    text: "We believe in integrity, quality, and client-first service. With a commitment to safety, innovation, and timely delivery, we build trust along with structures.",
    delay: 0.4,
  },
];

const MissionVisionValues = () => {
  return (
    <section className="bg-white text-black py-20 px-6" id="values">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold tracking-tight">
          What Drives Us
        </h2>
        <p className="text-gray-600 mt-2">
          Our mission, vision, and values define Pertinent’s purpose.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {content.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: item.delay }}
            className="bg-white p-6 rounded-xl shadow-xl text-center border border-gray-100 hover:shadow-2xl transition"
          >
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionValues;
