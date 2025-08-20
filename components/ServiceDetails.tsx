"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceDetailsProps {
  serviceTitle: string;
  serviceDesc: string;
  generalPoints: string[];
  subPoints?: string[];
  combinedTitle?: string; // optional prop for single combined branch
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  serviceTitle,
  serviceDesc,
  generalPoints,
  subPoints = [],
  combinedTitle,
}) => {
  return (
    <section className="relative w-full bg-white py-16 px-6">
      <div className="flex flex-col items-center max-w-6xl mx-auto mt-8 relative">
        {/* Service Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-red-600 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-2xl shadow-xl hover:scale-105 hover:shadow-red-300 transition transform"
        >
          {serviceTitle}
        </motion.div>

        {/* Description */}
        <p className="text-gray-600 text-center mt-4 max-w-3xl">{serviceDesc}</p>

        {/* Connector */}
        <div className="w-1 h-12 bg-red-500 mt-6 rounded-full"></div>

        {/* Tree Branches */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-20 mt-6 md:mt-12 w-full">
          {/* Combined Branch */}
          {combinedTitle ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center w-full md:w-1/2"
            >
              <div className="bg-white border-2 border-red-600 text-red-600 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition transform text-center text-lg md:text-xl">
                {combinedTitle}
              </div>
              <ul className="mt-6 space-y-3 w-full">
                {generalPoints.map((item, idx) => {
                  const [beforeColon, afterColon] = item.split(":");
                  return (
                    <motion.li
                      key={idx}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)",
                      }}
                      className="flex items-center bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm transition transform text-gray-700"
                    >
                      <span className="mr-3 text-red-600 font-bold">✓</span>
                      <span className="text-sm md:text-base">
                        <strong>{beforeColon?.trim()}</strong>
                        {afterColon && `: ${afterColon.trim()}`}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ) : (
            <>
              {/* General Contractor */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center w-full md:w-1/2"
              >
                <div className="bg-white border-2 border-red-600 text-red-600 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition transform text-center text-lg md:text-xl">
                  General Contractor
                </div>
                <ul className="mt-6 space-y-3 w-full">
                  {generalPoints.map((item, idx) => {
                    const [beforeColon, afterColon] = item.split(":");
                    return (
                      <motion.li
                        key={idx}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)",
                        }}
                        className="flex items-center bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm transition transform text-gray-700"
                      >
                        <span className="mr-3 text-red-600 font-bold">✓</span>
                        <span className="text-sm md:text-base">
                          <strong>{beforeColon?.trim()}</strong>
                          {afterColon && `: ${afterColon.trim()}`}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Subcontractor */}
              {subPoints.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex flex-col items-center w-full md:w-1/2"
                >
                  <div className="bg-white border-2 border-red-600 text-red-600 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition transform text-center text-lg md:text-xl">
                    Subcontractor
                  </div>
                  <ul className="mt-6 space-y-3 w-full">
                    {subPoints.map((item, idx) => {
                      const [beforeColon, afterColon] = item.split(":");
                      return (
                        <motion.li
                          key={idx}
                          whileHover={{
                            scale: 1.03,
                            boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)",
                          }}
                          className="flex items-center bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm transition transform text-gray-700"
                        >
                          <span className="mr-3 text-red-600 font-bold">✓</span>
                          <span className="text-sm md:text-base">
                            <strong>{beforeColon?.trim()}</strong>
                            {afterColon && `: ${afterColon.trim()}`}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Explore Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Link href="/gallery">
            <button className="bg-red-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-red-700 hover:shadow-red-300 transition transform hover:scale-105">
              Explore Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
