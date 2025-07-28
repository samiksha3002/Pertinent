"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Stats to be animated
const stats = [
  { label: "Home Delivery", value: 698 },
  { label: "Happy People", value: 1106 },
  { label: "Tons Of Goods", value: 4469 },
  { label: "Tree Plant", value: 754 },
];

// Counter animation component
const StatCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2000;
    const incrementTime = 20;
    const totalIncrements = duration / incrementTime;
    const increment = end / totalIncrements;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
};

// Main section component
const ProjectStats = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src="/pertinent4.jpg"
                alt="Construction Video"
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-6 py-3 flex items-center gap-2 text-sm group-hover:bg-red-600 transition-all cursor-pointer rounded-tr-xl">
                <i className="fas fa-play-circle text-lg"></i>
                <span className="font-semibold">Play the video</span>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="border-r border-gray-300 last:border-none"
            >
              <h3 className="text-4xl font-bold text-gray-900">
                <StatCounter value={stat.value} />
              </h3>
              <p className="mt-2 text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
