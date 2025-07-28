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
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative rounded-3xl shadow-xl overflow-hidden">
          <img
            src="/pertinent3.jpg" // Replace with your image path
            alt="construction planning"
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-black text-white px-6 py-3 rounded-xl shadow-lg text-sm md:text-base">
            Let’s Build Something Great Together!
          </div>
        </div>

        {/* Right Side - Services Grid */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Our <span className="text-red-600">Core Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
