"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Stats data
const stats = [
  { label: "Projects Delivered", value: 1000, suffix: "+" },
  { label: "Manhours Saved", value: 20000, suffix: "+" },
  { label: "Worth of Projects Estimated", value: 250, suffix: "M+" },
  { label: "Years of AEC Industry Expertise", value: 7, suffix: "+" },
];

// Counter component
const StatCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectStats = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-4 text-center gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-6 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-black">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectStats;
