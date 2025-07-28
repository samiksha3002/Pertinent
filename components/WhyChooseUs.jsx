"use client";

import React from "react";
import {
  FaClock,
  FaDraftingCompass,
  FaLeaf,
  FaClipboardCheck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClock />,
    title: "Fastest Work",
    desc: "Timely delivery without compromising quality — we value your time.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "High Skill",
    desc: "Experienced civil engineers & certified teams with deep technical knowledge.",
  },
  {
    icon: <FaLeaf />,
    title: "Clean Work",
    desc: "Organized, mess-free worksites with safety & finish at every stage.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Proper Take Care",
    desc: "Every project is treated as our own — with full precision and responsibility.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-6" id="why-us">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-2">
          Why <span className="text-red-600">Choose Us</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          The core values that make Pertinent Construction your trusted partner.
        </p>
        <div className="h-1 w-14 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 text-red-600 p-4 rounded-full text-2xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
