"use client";

import React from "react";
import { FaCalculator, FaClipboardList, FaEnvelopeOpenText, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const MDiv: any = motion.div;

const data = [
  {
    icon: <FaCalculator size={28} />,
    title: "Quantity Takeoff & Estimation",
    points: ["General Contractors", "Subcontractors"],
    desc: "Accurate material takeoffs for building construction — helping contractors create competitive bids, reduce waste, and stay within budget."
  },
  {
    icon: <FaClipboardList size={28} />,
    title: "Project Controls Management",
    points: ["General Contractors", "Subcontractors"],
    desc: "Streamlined management of submittals, RFIs, revisions, and closeout documentation — ensuring smooth workflows and full compliance."
  },
  {
    icon: <FaEnvelopeOpenText size={28} />,
    title: "Bid Management & ITB Support",
    points: ["General Contractors", "Subcontractors"],
    desc: "End-to-end support for invitation-to-bid (ITB) processes — vendor communication, bid tracking, and document coordination."
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-gray-500 max-w-xl mx-auto">
          Making Construction Smoother — Here’s How
        </p>
        <div className="h-1 w-16 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Stacked Cards */}
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        {data.map((service, idx) => (
          <MDiv
            key={idx}
            className="relative bg-white rounded-xl shadow-xl p-12 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[500px] lg:min-h-[550px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
          >
            {/* Icon */}
            <div className="bg-red-100 text-red-600 p-5 r rounded-full w-20 h-20 flex items-center justify-center mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-black mb-4">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mb-8">{service.desc}</p>

            {/* Sub Points Side by Side */}
            <div className="flex flex-col md:flex-row gap-6">
              {service.points.map((point, i) => (
                <MDiv
                  key={i}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-start gap-3 hover:bg-red-50 hover:scale-105 transition-all cursor-pointer shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <FaCheckCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-gray-800 text-lg">{point}</span>
                </MDiv>
              ))}
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-red-100 rounded-full -translate-x-20 -translate-y-20 opacity-30 pointer-events-none"></div>
          </MDiv>
        ))}
      </div>
    </section>
  );
}
