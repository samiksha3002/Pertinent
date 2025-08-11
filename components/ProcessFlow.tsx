"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "1. Project Intake",
    content: [
      "Receive project documents via email or cloud link.",
      "Review scope, drawings, and specifications.",
      "Clarify missing details or RFI-worthy issues, if any.",
    ],
  },
  {
    title: "2. Scope Alignment & Confirmation",
    content: [
      "Confirm project requirements and determine the level of detail needed.",
      "Tailor the scope accordingly and finalize it with the client before execution.",
    ],
  },
  {
    title: "3. Resource Assignment",
    content: [
      "Assign engineers based on trade expertise and workload.",
      "Set internal deadlines to meet or beat client timelines.",
    ],
  },
  {
    title: "4. Execution & Documentation",
    content: [
      "Start work using industry-standard tools based on the latest drawings.",
      "Ensure accuracy through organized markups, clear logs, and well-structured files.",
    ],
  },
  {
    title: "5. Internal Review & QC",
    content: [
      "Conduct internal review to ensure scope accuracy and full scope inclusion.",
      "Verify drawings, notes, and revisions; flag any discrepancies for client attention.",
    ],
  },
  {
    title: "6. Deliverables Preparation",
    content: [
      "Prepare clean and itemized Excel spreadsheets.",
      "Include summary sheets, trade breakdowns, and alternates if needed.",
      "Format to match client’s internal templates (if provided).",
    ],
  },
  {
    title: "7. Client Submission",
    content: [
      "Submit final files via email or shared platform.",
      "Provide a brief overview.",
      "Remain available for clarification calls or follow-up adjustments.",
    ],
  },
  {
    title: "8. Feedback & Revision (If Needed)",
    content: [
      "Address revisions or changes from the client’s end.",
      "Provide updated takeoff based on revised drawings or scope updates.",
    ],
  },
  {
    title: "9. Archiving & Reporting",
    content: [
      "Organize all project files, markups, and communication records.",
      "Log hours spent, scope covered, and project complexity for reporting.",
    ],
  },
  {
    title: "10. Post-Submission Support",
    content: [
      "Support during bid phase with last-minute quantity checks.",
      "Assist in scope clarification for subcontractor alignment.",
      "Help with value engineering suggestions if requested.",
    ],
  },
];

export default function ProcessFlow() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePopup = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      className="py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-100"
      style={{ perspective: "1200px" }}
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        Process
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto"
        ref={containerRef}
      >
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            {/* Card */}
            <motion.div
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
            </motion.div>

            {/* Popup */}
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white shadow-xl rounded-xl border border-gray-200 p-4 z-50"
                  style={{ top: "100%" }}
                >
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {step.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Arrow */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-8 top-8">
                <ArrowRight className="text-red-500 w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
