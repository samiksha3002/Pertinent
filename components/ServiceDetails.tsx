"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// ✅ Reusable InfoCard Component
interface InfoCardProps {
  title: string;
  items: string[];
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col items-center w-full md:w-1/2"
    >
      <div className="bg-white border-2 border-red-600 text-red-600 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition transform text-center text-lg md:text-xl">
        {title}
      </div>

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
const QuantityPage: React.FC = () => {
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
      {/* Tree Layout */}
      <div className="flex flex-col items-center max-w-6xl mx-auto mt-16 relative">
        {/* Root Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-red-600 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-2xl shadow-xl hover:scale-105 hover:shadow-red-300 transition transform"
        >
          Quantity Takeoff & Estimation
        </motion.div>

        {/* Connector */}
        <div className="w-1 h-12 bg-red-500 mt-2 rounded-full"></div>

        {/* Branches */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-20 mt-6 md:mt-12 w-full">
          <InfoCard title="General Contractor" items={generalContractorItems} />
          <InfoCard title="Subcontractor" items={subcontractorItems} delay={0.2} />
        </div>
      </div>
    </section>
  );
};

export default QuantityPage;
