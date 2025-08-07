"use client";

import React from "react";
import {
  FaCalculator,
  FaClipboardList,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCalculator size={22} />,
    title: "Quantity Takeoff & Estimation",
    desc: "Accurate material takeoffs across all trades for building construction — helping contractors create competitive bids, reduce material waste, and stay within budget from the start.",
  },
  {
    icon: <FaClipboardList size={22} />,
    title: "Project Controls Management",
    desc: "Streamlined management of submittals, RFIs, drawing revisions, and closeout documentation — ensuring smooth workflows, reduced delays, and full project compliance.",
  },
  {
    icon: <FaEnvelopeOpenText size={22} />,
    title: "Bid Management & ITB Support",
    desc: "End-to-end support for invitation-to-bid (ITB) processes, including vendor communication, bid tracking, and document coordination — so you never miss a qualified opportunity.",
  },
];
const ReusableServicesSection = () => {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-black mb-2">
          Our <span className="text-red-600">Services</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Making Construction Smoother — Here’s How
        </p>
        <div className="h-1 w-14 bg-red-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 text-red-600 p-4 rounded-full text-2xl">
                {service.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReusableServicesSection;
