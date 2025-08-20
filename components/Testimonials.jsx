"use client";

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mohammad Rahmati",
    role: "Estimator | Airway Mechanical Pty Ltd, Australia",
    feedback:
      "Working with Pertinent has been an excellent experience. Their deep knowledge of HVAC systems and precision in ESTmep modeling significantly streamlined our project planning and coordination. The clarity and accuracy of their deliverables made a real difference in reducing rework and improving overall project efficiency. I’d gladly recommend their services to anyone looking for reliable and skilled HVAC modeling support.",
    rating: 5,
  },
  {
    name: "",
    role: "Flooring Supplier-Indianapolis, USA",
    feedback:
      "We’ve been working with Pertinent for a year now, and I’m really happy with the quality of their work and timely project submissions. The best part is they flag RFIs in the drawings, which helps us evaluate pricing before the bid deadline and saves us from the last-day rush.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6" id="testimonials">
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-black mb-2">
          What <span className="text-red-600">Clients Say</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Hear from our trusted clients who’ve experienced our civil excellence.
        </p>
        <div className="h-1 w-14 bg-red-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto justify-items-center">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 w-full md:w-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
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
            <h4 className="text-md font-semibold text-black">
              {t.name || "Anonymous"}
            </h4>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
