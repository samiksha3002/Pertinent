"use client";

import React from "react";
import {
  FaBuilding,
  FaTools,
  FaHome,
  FaWarehouse,
  FaHardHat,
  FaSyncAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaBuilding />,
    title: "Structural Engineering",
    desc: "Reliable frameworks for bridges, buildings, and infrastructure.",
  },
  {
    icon: <FaHardHat />,
    title: "Site Supervision",
    desc: "Complete monitoring for safety, quality, and timely delivery.",
  },
  {
    icon: <FaHome />,
    title: "Residential Construction",
    desc: "From blueprint to keys — homes built with precision.",
  },
  {
    icon: <FaTools />,
    title: "Commercial Projects",
    desc: "Quality construction for malls, offices, and commercial buildings.",
  },
  {
    icon: <FaWarehouse />,
    title: "Industrial Sheds & Warehouses",
    desc: "Heavy-duty structures tailored to industrial needs.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Renovation & Remodeling",
    desc: "Transform existing spaces with expert civil planning.",
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
            Our <span className="text-red-600">Core Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="text-red-600 bg-gray-200 p-3 rounded-full text-xl">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-black text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
