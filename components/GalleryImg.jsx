"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "/pertinent8.jpg",
  "/pertinent2.jpg",
  "/pertinent3.jpg",
  "/pertinent4.jpg",
  "/pertinent5.jpg",
  "/pertinent6.jpg",
];

const GalleryImg = () => {
  return (
    <section id="gallery" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-black"
        >
          Our <span className="text-red-600">Gallery</span>
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium tracking-wide">
                  Project {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryImg;
