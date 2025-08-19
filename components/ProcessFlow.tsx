"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FileText,
  CheckCircle,
  Users,
  Hammer,
  ClipboardCheck,
  FileSpreadsheet,
  Send,
  RefreshCcw,
  Archive,
  Headphones,
} from "lucide-react";

const MotionDiv = motion.div;

const steps = [
  { icon: FileText, title: "Project Intake", content: "Receive documents, review scope, and clarify details." },
  { icon: CheckCircle, title: "Scope Alignment & Confirmation", content: "Confirm requirements and finalize scope with client." },
  { icon: Users, title: "Resource Assignment", content: "Assign engineers and set deadlines." },
  { icon: Hammer, title: "Execution & Documentation", content: "Work using industry tools and maintain organized files." },
  { icon: ClipboardCheck, title: "Internal Review & QC", content: "Verify accuracy and flag any discrepancies." },
  { icon: FileSpreadsheet, title: "Deliverables Preparation", content: "Prepare spreadsheets and match client templates." },
  { icon: Send, title: "Client Submission", content: "Submit final files and remain available for clarifications." },
  { icon: RefreshCcw, title: "Feedback & Revision", content: "Address revisions and update takeoff if needed." },
  { icon: Archive, title: "Archiving & Reporting", content: "Organize files and log hours for reporting." },
  { icon: Headphones, title: "Post-Submission Support", content: "Assist with bid phase and provide value engineering." },
];

export default function ProcessFlowVertical() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  const smoothLineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 80, damping: 20 }
  );

  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
        Our <span className="text-red-600">Process</span>
      </h2>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Timeline background line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 -translate-x-1/2 z-0 hidden md:block" />

        {/* Animated red progress line */}
        <MotionDiv
          className="absolute left-1/2 top-0 w-1 bg-red-500 -translate-x-1/2 origin-top z-10 hidden md:block"
          style={{ height: smoothLineHeight }}
        />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="relative mb-12 md:mb-16 flex flex-col md:flex-row items-center w-full"
            >
              {/* Card */}
              <MotionDiv
                initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                }}
                className={`bg-black text-white 
                  p-4 sm:p-5 md:p-6 
                  rounded-xl shadow-lg 
                  w-[90%] sm:w-[80%] md:w-[45%] 
                  ${isLeft ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"} 
                  text-center md:text-left`}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-500">
                  {step.title}
                </h3>
                <div className="w-8 sm:w-10 md:w-12 border-b-2 border-red-500 my-2 mx-auto md:mx-0" />
                <p className="mt-1 text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                  {step.content}
                </p>
              </MotionDiv>

              {/* Icon */}
              <div className="absolute md:left-1/2 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:block">
                <MotionDiv
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15 }}
                  className="flex items-center justify-center 
                    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                    bg-gradient-to-br from-white to-red-100 
                    border-2 border-red-500 rounded-full shadow-md mx-auto md:mx-0"
                >
                  <Icon className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </MotionDiv>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
