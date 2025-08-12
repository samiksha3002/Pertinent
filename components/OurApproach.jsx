"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHandsHelping,
  FaHardHat,
  FaWallet,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaBolt,
  FaLock,
  FaStar,
} from "react-icons/fa";

const APPROACHES = [
  {
    icon: FaCheckCircle,
    title: "Accuracy That Builds Confidence",
    desc: "We deliver precise material takeoffs and estimations that reduce waste, minimize costly errors, and make bids highly competitive.",
  },
  {
    icon: FaHandsHelping,
    title: "Support From Start to Finish",
    desc: "From early budgeting to closeout documentation, we stay engaged across the project lifecycle to ensure consistent results.",
  },
  {
    icon: FaHardHat,
    title: "Construction-Savvy Team",
    desc: "Our team has hands-on construction experience across trades and CSI divisions — we speak industry language and solve practical problems.",
  },
  {
    icon: FaWallet,
    title: "Flexible & Transparent Pricing",
    desc: "Clear pricing aligned to scope and effort — no surprises, just predictable costs and solid value for the services delivered.",
  },
  {
    icon: FaClock,
    title: "On-Time Delivery",
    desc: "We’re accustomed to tight schedules and deliver accurate outputs on time without sacrificing quality or detail.",
  },
  {
    icon: FaShieldAlt,
    title: "Confidential & Secure",
    desc: "Your plans, pricing, and project data remain confidential. We protect client information with professional safeguards.",
  },
  {
    icon: FaUsers,
    title: "Client-Centric Partnerships",
    desc: "We operate as an extension of your team — tailored deliverables and processes designed to meet your needs and timelines.",
  },
  {
    icon: FaBolt,
    title: "Responsive Communication",
    desc: "Proactive updates and quick responses means fewer bottlenecks and faster decisions for your team in the field.",
  },
  {
    icon: FaLock,
    title: "Accurate & Organized Outputs",
    desc: "Clear markups, line-item summaries and organized deliverables make review easy and handoff seamless for your team.",
  },
  {
    icon: FaStar,
    title: "Free Trial to Get Started",
    desc: "Try our services risk-free. New partners can assess quality and fit before making a longer commitment.",
  },
];

const cardHeightClass = "h-48 md:h-44";

const OurApproach = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleFlip = (i) => {
    setActiveCard((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="our-approach"
      className="bg-gradient-to-b from-white via-gray-50 to-white text-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            Our <span className="text-red-600">Approach</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Compact, powerful processes that help construction teams save time,
            avoid rework, and win more profitable projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {APPROACHES.map((item, i) => {
            const isFlipped = activeCard === i;
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }} // 3D tilt effect
                style={{ perspective: "1200px" }}
              >
                {/* Card container */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  onClick={() => toggleFlip(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(i);
                    }
                  }}
                  className={`relative w-full ${cardHeightClass} cursor-pointer transform-gpu`}
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s cubic-bezier(.4,.2,.2,1)",
                    transform: isFlipped
                      ? "rotateY(180deg) scale(1.02)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 rounded-xl bg-white border border-gray-200 shadow-lg flex flex-col items-center justify-center p-4"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center mb-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="bg-red-50 rounded-full p-3 shadow-inner">
                        <IconComponent size={22} className="text-red-600" />
                      </div>
                    </motion.div>
                    <h3 className="text-sm md:text-sm lg:text-base font-semibold text-center leading-snug">
                      {item.title}
                    </h3>
                    <span className="mt-2 text-xs text-gray-400">
                      Click to view details
                    </span>
                  </div>

                  {/* Back Side */}
                  {/* Back Side */}
                  <div
                    className="absolute inset-0 rounded-xl bg-black text-white p-4 flex items-center justify-center"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    }}
                  >
                    <motion.p
                      className="text-sm leading-relaxed text-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        isFlipped
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.8, opacity: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: isFlipped ? 0.25 : 0, // delay to start after flip begins
                      }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
