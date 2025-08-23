// src/components/Preloader.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Change duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/PCS Logo white.png"
            alt="Loading..."
            className="h-24 sm:h-32 md:h-40 w-auto object-contain" 
            // ✅ h-24 on mobile, h-32 on tablets, h-40 on desktop
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
