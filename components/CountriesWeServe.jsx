"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CountriesWeServe = () => {
  return (
    <section id="countries" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Animated Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/locationpage.png"
            alt="Countries We Serve"
            className="w-80 h-auto rounded-xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right Side - Text and Countries List */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center gap-3">
            <FaGlobeAmericas className="text-red-600 text-3xl" />
            <h2 className="text-3xl font-bold text-black">
              Countries We <span className="text-red-600">Serve</span>
            </h2>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With global reach and local expertise, Pertinent proudly serves
            clients in major construction hubs including the USA, Australia,
            Canada, and India — helping companies scale and deliver with
            precision.
          </p>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 text-sm text-black font-medium"
          >
            {["America", "Australia", "Canada", "India"].map(
              (country, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-100 px-4 py-2 rounded-full border-l-4 border-red-600 shadow-sm"
                >
                  {country}
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CountriesWeServe;
