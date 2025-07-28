"use client";

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Real Estate Developer",
    feedback:
      "Pertinent Construction delivered our residential tower ahead of schedule. Their engineering team is highly skilled and professional.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    role: "Architect",
    feedback:
      "They understand structure and design deeply. We collaborated on a commercial plaza — smooth process from start to finish!",
    rating: 4,
  },
  {
    name: "Vikram Patel",
    role: "Industrial Project Manager",
    feedback:
      "They built our industrial warehouse with amazing precision. Very organized, efficient, and on time.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="testimonials">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-2">
          What <span className="text-red-600">Clients Say</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Hear from our trusted clients who’ve experienced our civil excellence.
        </p>
        <div className="h-1 w-14 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100"
          >
            <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
            <p className="text-gray-700 text-sm mb-4">{t.feedback}</p>
            <div className="flex items-center gap-2 text-yellow-500 mb-2">
              {Array(t.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <h4 className="text-md font-semibold text-black">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
