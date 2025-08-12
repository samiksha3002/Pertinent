"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const sections = [
  {
    title: "Quantity Takeoff & Estimation",
    content: [
      {
        subtitle: "General Contractors",
        text: "We help GCs win more bids and execute better by offering comprehensive quantity takeoffs—covering all the scope with accurate budgeting, buyout, and cost control.",
      },
      {
        subtitle: "Subcontractors",
        text: "Tailored trade-by-trade takeoffs for accurate quotes and execution work across multiple specialties.",
      },
    ],
  },
  {
    title: "Project Controls Management",
    content: [
      {
        subtitle: "General Contractors",
        text: "End-to-end project controls support including submittal management, constructability reviews, and change order creation.",
      },
      {
        subtitle: "Subcontractors",
        text: "Drawing & revision tracking, change order documentation, punch list tracking, and closeout documentation.",
      },
    ],
  },
  {
    title: "ITB Management",
    content: [
      {
        subtitle:
          "Streamlining Bid Processes for General Contractors & Subcontractors",
        text: "At Pertinent Construction Services, we provide comprehensive ITB (Invitation to Bid) Management solutions designed to support both general contractors and subcontractors through every step of the bidding process. Whether you're managing multiple trades or preparing your own proposals, our team ensures nothing gets missed.",
      },
    ],
  },
];

export default function ServiceFlow() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:px-12 lg:px-24 text-red-700">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
        Our Service Flow
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="border border-red-200 rounded-xl shadow-md overflow-hidden transition-all"
          >
            {/* Main Heading */}
            <button
              onClick={() => toggleSection(idx)}
              className="w-full flex justify-between items-center px-6 py-4 bg-red-50 hover:bg-red-100 text-left text-lg font-semibold transition-colors"
            >
              {section.title}
              {openIndex === idx ? (
                <FaChevronUp className="text-red-600" />
              ) : (
                <FaChevronDown className="text-red-600" />
              )}
            </button>

            {/* Expanded Content */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === idx ? "max-h-screen p-6" : "max-h-0 p-0"
              }`}
            >
              <div className="pl-4 border-l-4 border-red-300 space-y-6">
                {section.content.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-red-600 mb-2">
                      {item.subtitle}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
