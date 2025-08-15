"use client";

import React, { useState } from "react";
import {
  FaCalculator,
  FaClipboardList,
  FaEnvelopeOpenText,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    icon: <FaCalculator size={22} />,
    title: "Quantity Takeoff & Estimation",
    desc: "Accurate material takeoffs across all trades for building construction — helping contractors create competitive bids, reduce material waste, and stay within budget from the start.",
    subs: [
      {
        title: "General Contractors",
        points: [
          "Site Work & Civil: Demolition, Excavation, Utilities, Paving, Striping, Signage, Curb, Gutter, ADA Compliance, Landscaping & Irrigation",
          "Concrete & Structural Work: Foundations, Slabs, Tilt Walls, Rebar, Post-tension",
          "Masonry & Metals: CMU, Brick, Stone, Structural & Misc. Steel",
        ],
      },
      {
        title: "Subcontractors",
        points: [
          "Drywall & Framing Contractors: Wall types, layers, framing, ceilings",
          "Painting Contractors: Wall, ceiling, door, trim, special coatings",
          "Finish Carpenters: Baseboards, casing, crown, wainscoting",
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
          "Submittal Management: Comprehensive submittal review and tracking",
          "Constructability Reviews: Identify conflicts early",
          "Drawing & Revision Management: Accurate tracking of updates",
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
        title: "Streamlining Bid Processes",
        points: [
          "Invitation Review: Identify relevant trades & scope",
          "Bid Package Organization: Manage drawings and specs",
          "Trade Coverage & Outreach: Maximize bid coverage",
        ],
      },
    ],
  },
];

const ReusableServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const service = selectedService !== null ? data[selectedService] : null;

  return (
    <section
      id="services"
      className="bg-white py-20 px-6 relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <p className="text-gray-500 max-w-xl mx-auto">
          Making Construction Smoother — Here’s How
        </p>
        <div className="h-1 w-14 bg-red-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Card Grid OR Detail View */}
      <AnimatePresence mode="wait">
        {selectedService === null ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {data.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
                onClick={() => setSelectedService(index)}
              >
                <div className="bg-gray-200 text-red-600 p-4 rounded-full mb-4 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          service && (
            <motion.div
              key="detail"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black text-white rounded-xl shadow-xl p-8 max-w-5xl mx-auto relative"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 left-4 flex items-center text-white hover:text-red-500 transition-colors"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>

              {/* Title */}
              <h2 className="text-3xl font-bold text-red-500 mb-4 border-b border-red-500 pb-2">
                {service.title}
              </h2>
              <p className="mb-6 text-gray-200">{service.desc}</p>

              {/* Sub Sections */}
              {service.subs.map((sub, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3 underline underline-offset-4 decoration-red-500">
                    {sub.title}
                  </h3>
                  <ul className="space-y-2">
                    {sub.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-red-500 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReusableServicesSection;
