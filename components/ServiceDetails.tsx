"use client";

import { motion } from "framer-motion";

// ✅ Animated Title Component
const AnimatedTitle = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-4xl md:text-5xl font-bold text-black mb-6 text-center"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// ✅ Reusable InfoCard Component
interface InfoCardProps {
  title: string;
  items: string[];
  delay?: number;
}

const InfoCard = ({ title, items, delay = 0 }: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col items-center w-full md:w-1/2"
    >
      {/* Card Title */}
      <div className="bg-white border-2 border-red-600 text-red-600 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition transform text-center text-lg">
        {title}
      </div>

      {/* Items */}
      <ul className="mt-6 space-y-3 w-full">
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)",
            }}
            className="flex items-center bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm transition transform text-gray-700"
          >
            <span className="mr-3 text-red-600 font-bold">✓</span>
            <span className="text-sm md:text-base">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// ✅ Page Component
export default function QuantityPage() {
  const generalContractorItems = [
    "Detailed material takeoffs for competitive bidding",
    "Budget forecasting with reduced risk",
    "Comprehensive project-wide estimates",
  ];

  const subcontractorItems = [
    "Trade-specific material quantity reports",
    "Resource allocation & cost optimization",
    "Tailored breakdowns for accurate proposals",
  ];

  return (
    <section className="relative w-full min-h-screen bg-white py-20 px-6">
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto">
        <AnimatedTitle text="Quantity Takeoff & Estimation" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-600 text-base md:text-lg leading-relaxed"
        >
          Quantity Takeoff & Estimation is the process of accurately measuring
          materials, labor, and resources required for a construction project.
          It ensures precise budgeting, effective resource allocation, and
          reduced risk for both general contractors and subcontractors.
        </motion.p>
      </div>

      {/* Tree Layout */}
      <div className="flex flex-col items-center max-w-6xl mx-auto mt-16 relative">
        {/* Root Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-red-600 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-2xl shadow-xl hover:scale-105 hover:shadow-red-300 transition transform"
        >
          Quantity Takeoff & Estimation
        </motion.div>

        {/* Connector */}
        <div className="w-1 h-12 bg-red-500 mt-2"></div>

        {/* Branches */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-20 mt-6 md:mt-12 w-full">
          <InfoCard title="General Contractor" items={generalContractorItems} />
          <InfoCard title="Subcontractor" items={subcontractorItems} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
