"use client";

import React from "react";
import { motion } from "framer-motion";

const LandscapeImageSection = ({
  imageSrc,
  altText = "Landscape",
  caption,
}) => {
  return (
    <section className="w-full bg-black py-10 px-4">
      <div className="w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden"
        >
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-64 object-cover rounded-xl"
          />
        </motion.div>
        {caption && (
          <p className="text-white text-center text-sm mt-4 opacity-80">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
};

export default LandscapeImageSection;
