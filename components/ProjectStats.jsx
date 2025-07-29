"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Stats to be animated
const stats = [
  { label: "Projects Delivered", value: 1000, suffix: "+" },
  { label: "Manhours Saved", value: 20000, suffix: "+" },
  { label: "Worth of Projects Estimated", value: 250, suffix: "M+" },
  { label: "Years of AEC Industry Expertise", value: 7, suffix: "+" },
];

// Counter animation component
const StatCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
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

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ProjectStats = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Videos */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/pertinent4.jpg"
                alt="Construction Video"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white px-6 py-3 flex items-center gap-2 text-sm group-hover:bg-red-600 transition-all cursor-pointer rounded-tr-xl">
                <i className="fas fa-play-circle text-lg"></i>
                <span className="font-semibold">Play the video</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="px-4 py-6 border border-gray-200 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-4xl font-bold text-black">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
