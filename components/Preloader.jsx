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
            className="h-40 w-auto" // increased height from h-28 → h-40
            initial={{ scale: 0.8, opacity: 0 }} // slightly smaller start
            animate={{ scale: 1.1, opacity: 1 }} // slight overshoot for nicer effect
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
