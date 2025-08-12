"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

// Cast motion.div so it works without type argument error
const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>;

interface Step {
  title: string;
  details: string;
}

const steps: Step[] = [
  { title: "Step 1", details: "This is the detail for step 1." },
  { title: "Step 2", details: "This is the detail for step 2." },
  { title: "Step 3", details: "This is the detail for step 3." },
  { title: "Step 4", details: "This is the detail for step 4." },
];

export default function ProcessFlow() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglePopup = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <MotionDiv
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.03,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-xl shadow-lg cursor-pointer p-6 text-center"
              onClick={() => togglePopup(idx)}
            >
              <h3 className="text-lg font-semibold text-red-600">
                {step.title}
              </h3>
            </MotionDiv>

            {/* Popup */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 w-full mt-2 p-4 bg-white rounded-lg shadow-lg z-10"
                >
                  <p className="text-gray-700">{step.details}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
