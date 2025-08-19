"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaClipboardList,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: <FaCalculator size={22} />,
    title: "Quantity Takeoff & Estimation",
    desc: "Accurate material takeoffs across all trades for building construction — helping contractors create competitive bids, reduce material waste, and stay within budget from the start.",
    link: "quantity",
  },
  {
    icon: <FaClipboardList size={22} />,
    title: "Project Controls Management",
    desc: "Streamlined management of submittals, RFIs, drawing revisions, and closeout documentation — ensuring smooth workflows, reduced delays, and full project compliance.",
    link: "/Estimatio",
  },
  {
    icon: <FaEnvelopeOpenText size={22} />,
    title: "Bid Management & ITB Support",
    desc: "End-to-end support for invitation-to-bid (ITB) processes, including vendor communication, bid tracking, and document coordination — so you never miss a qualified opportunity.",
    link: "/bid",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Animated Image */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl shadow-xl overflow-hidden"
        >
          <img
            src="/pertinent3.jpg"
            alt="construction planning"
            className="object-cover w-full h-[400px] rounded-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-black text-white px-6 py-3 rounded-xl shadow-lg text-sm md:text-base">
            Let’s Build Something Great Together!
          </div>
        </motion.div>

        {/* Right Side - Services */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="space-y-6">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-red-50 transition duration-300 cursor-pointer"
                >
                  <div className="text-red-600 bg-gray-200 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
