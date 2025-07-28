"use client";

import React from "react";
import { FaHardHat, FaTools, FaClipboardCheck } from "react-icons/fa";

const WhatWeServe = () => {
  const data = [
    {
      title: "Pre-Construction",
      icon: <FaClipboardCheck size={30} />,
      points: [
        "Bid Management",
        "Quantity Estimation",
        "Comparing Subcontractor Quotes",
        "Drawing Change Management",
        "Constructability Review",
      ],
    },
    {
      title: "Construction",
      icon: <FaHardHat size={30} />,
      points: [
        "Submittal Management",
        "Material Procurement Tracking",
        "RFI Management",
        "Managing CM Platform",
        "Drawing Change Management",
      ],
    },
    {
      title: "Post-Construction",
      icon: <FaTools size={30} />,
      points: ["Closeout Management", "Punchlist Management"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-2">
          What <span className="text-red-600">We Serve</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          From start to finish, we handle every phase of construction with
          precision and professionalism.
        </p>
        <div className="h-1 w-16 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((block, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center justify-center mb-6 text-red-600">
              {block.icon}
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 text-center uppercase tracking-wide">
              {block.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              {block.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeServe;
