"use client";

import React from "react";
import { FaCalculator, FaClipboardList, FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MDiv: any = motion.div;

const data = [
  {
    icon: <FaCalculator size={30} />,
    title: "Quantity Takeoff & Estimation",
    desc: "Accurate and reliable quantity takeoffs that help reduce waste, improve cost efficiency, and empower smarter bidding decisions.",
    link: "/quantity", // 👈 redirect path
  },
  {
    icon: <FaClipboardList size={30} />,
    title: "Project Controls Management",
    desc: "Seamless control over RFIs, submittals, and documentation — streamlining workflows and ensuring project compliance at every step.",
    link: "/estimatio",
  },
  {
    icon: <FaEnvelopeOpenText size={30} />,
    title: "Bid Management & ITB Support",
    desc: "From invitation-to-bid to vendor coordination, we simplify communication and tracking — making bidding smooth and transparent.",
    link: "/bid",
  },
];

export default function ServicesSection() {
  const router = useRouter();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
          Our Core Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Driving construction success with expertise, precision, and innovation.
        </p>
        <div className="h-1 w-20 bg-red-600 mx-auto mt-6 rounded-full" />
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {data.map((service, idx) => (
          <MDiv
            key={idx}
            onClick={() => router.push(service.link)} // 👈 redirect on click
            className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-10 flex flex-col items-start text-left border border-gray-100 hover:-translate-y-2 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Icon */}
            <div className="bg-red-100 text-red-600 p-5 rounded-2xl shadow-inner mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>

            {/* Decorative shape */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-red-50 rounded-full opacity-40 blur-2xl pointer-events-none" />
          </MDiv>
        ))}
      </div>
    </section>
  );
}
