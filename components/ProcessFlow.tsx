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

const MotionDiv: any = motion.div;

const steps = [
  {
    icon: FileText,
    title: "Project Intake",
    content: "Receive documents, review scope, and clarify details.",
  },
  {
    icon: CheckCircle,
    title: "Scope Alignment & Confirmation",
    content: "Confirm requirements and finalize scope with client.",
  },
  {
    icon: Users,
    title: "Resource Assignment",
    content: "Assign engineers and set deadlines.",
  },
  {
    icon: Hammer,
    title: "Execution & Documentation",
    content: "Work using industry tools and maintain organized files.",
  },
  {
    icon: ClipboardCheck,
    title: "Internal Review & QC",
    content: "Verify accuracy and flag any discrepancies.",
  },
  {
    icon: FileSpreadsheet,
    title: "Deliverables Preparation",
    content: "Prepare spreadsheets and match client templates.",
  },
  {
    icon: Send,
    title: "Client Submission",
    content: "Submit final files and remain available for clarifications.",
  },
  {
    icon: RefreshCcw,
    title: "Feedback & Revision",
    content: "Address revisions and update takeoff if needed.",
  },
  {
    icon: Archive,
    title: "Archiving & Reporting",
    content: "Organize files and log hours for reporting.",
  },
  {
    icon: Headphones,
    title: "Post-Submission Support",
    content: "Assist with bid phase and provide value engineering.",
  },
];

export default function ProcessFlowVertical() {
  const ref = useRef<HTMLDivElement | null>(null);

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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
        Our <span className="text-red-600">Process</span>
      </h2>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Timeline background line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gray-200 -translate-x-1/2 z-0" />

        {/* Animated red progress line */}
        <MotionDiv
          className="hidden md:block absolute left-1/2 top-0 w-1 bg-red-500 -translate-x-1/2 origin-top z-10"
          style={{ height: smoothLineHeight }}
        />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`relative mb-16 flex flex-col md:flex-row md:items-center w-full md:justify-between`}
            >
              {/* Icon on mobile */}
              <div className="md:hidden flex justify-center mb-4">
                <MotionDiv
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15 }}
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white to-red-100 border-2 border-red-500 rounded-full shadow-md"
                >
                  <Icon className="text-red-500 w-7 h-7" />
                </MotionDiv>
              </div>

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
                className={`bg-black text-white p-5 sm:p-6 rounded-xl shadow-lg w-full md:w-[45%] ${
                  isLeft ? "" : "md:ml-auto"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-red-500">
                  {step.title}
                </h3>
                <div className="w-10 sm:w-12 border-b-2 border-red-500 my-2" />
                <p className="mt-1 text-gray-200 text-sm sm:text-base leading-relaxed">
                  {step.content}
                </p>
              </MotionDiv>

              {/* Icon for desktop */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <MotionDiv
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15 }}
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white to-red-100 border-2 border-red-500 rounded-full shadow-md"
                >
                  <Icon className="text-red-500 w-7 h-7" />
                </MotionDiv>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
