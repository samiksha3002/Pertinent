"use client";

import React, { useState } from "react";
import {
  FaCalculator,
  FaClipboardList,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Fix for Framer Motion + TypeScript className issue
const MotionDiv: any = motion.div;
const MotionUl: any = motion.ul;

const data = [
  {
    icon: <FaCalculator size={22} />,
    title: "Quantity Takeoff & Estimation",
    desc: "Accurate material takeoffs across all trades for building construction — helping contractors create competitive bids, reduce material waste, and stay within budget from the start.",
    subs: [
      {
        title: "General Contractors",
        points: [
          "Detailed quantity takeoff",
          "Cost estimation",
          "Bid preparation",
          "Subcontractor pricing analysis",
          "Value engineering suggestions",
        ],
      },
      {
        title: "Subcontractors",
        points: [
          "Drywall & Framing Contractors: Wall types, layers, framing, ceilings",
          "Painting Contractors: Wall, ceiling, door, trim, special coatings",
          "Finish Carpenters / Trim Contractors: Baseboards, casing, crown, wainscoting",
          "Flooring Contractors: Carpet, LVT, VCT, Wood, Tile, Cove base",
          "Door & Hardware Contractors: Door schedules, hardware sets, frames",
          "Mechanical Contractors: Ducting, HVAC equipment, accessories",
          "Electrical Contractors: Conduit, wiring, fixtures, panels",
          "Plumbing Contractors: Piping, fixtures, valves, fittings",
          "Fire Protection Contractors: Sprinkler systems, piping, heads",
          "Striping Contractors: Parking lot striping, signage, pavement markings",
          "Landscaping Contractors: Sod, planting, irrigation, edging",
        ],
      },
    ],
  },
  {
    icon: <FaClipboardList size={22} />,
    title: "Project Controls Management",
    desc: "Streamlined management of submittals, RFIs, drawing revisions, and closeout documentation — ensuring smooth workflows, reduced delays, and full project compliance.",
    subs: [
      {
        title: "General Contractors",
        points: [
          "Project scheduling",
          "Budget tracking",
          "Risk management",
          "Performance reporting",
        ],
      },
      {
        title: "Subcontractors",
        points: [
          "Work progress monitoring",
          "Resource allocation tracking",
          "Scope compliance checks",
          "Invoice preparation support",
        ],
      },
    ],
  },
  {
    icon: <FaEnvelopeOpenText size={22} />,
    title: "Bid Management & ITB Support",
    desc: "End-to-end support for invitation-to-bid (ITB) processes, including vendor communication, bid tracking, and document coordination — so you never miss a qualified opportunity.",
    subs: [
      {
        title: "General Contractors",
        points: [
          "Invitation to bid preparation",
          "Scope of work definition",
          "Bid package creation",
          "Evaluation criteria setup",
        ],
      },
      {
        title: "Subcontractors",
        points: [
          "Bid response preparation",
          "Clarification request handling",
          "Pricing optimization",
          "Compliance document preparation",
        ],
      },
    ],
  },
];

const ReusableServicesSection = () => {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openSub, setOpenSub] = useState<Record<number, number | null>>({});

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
    setOpenSub({});
  };

  const toggleSub = (serviceIndex: number, subIndex: number) => {
    setOpenSub((prev) => ({
      ...prev,
      [serviceIndex]: prev[serviceIndex] === subIndex ? null : subIndex,
    }));
  };

  return (
    <section id="services" className="bg-white py-20 px-6">
      {/* Section Header */}
      <MotionDiv
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
      </MotionDiv>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((service, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Service Header */}
            <button
              onClick={() => toggleService(index)}
              className="flex flex-col items-center w-full text-center"
            >
              <div className="bg-gray-200 text-red-600 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </button>

            {/* Sub-options Accordion */}
            <AnimatePresence>
              {openService === index && (
                <MotionDiv
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 border-t border-red-300 pt-4"
                >
                  {service.subs.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-2">
                      <button
                        onClick={() => toggleSub(index, subIndex)}
                        className="flex justify-between items-center w-full text-left font-medium text-red-700 hover:bg-red-50 px-3 py-2 rounded"
                      >
                        {sub.title}
                        <span
                          className={`transition-transform ${
                            openSub[index] === subIndex
                              ? "rotate-45"
                              : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence>
                        {openSub[index] === subIndex && (
                          <MotionUl
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 list-disc text-sm text-gray-700 space-y-1"
                          >
                            {sub.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </MotionUl>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default ReusableServicesSection;
