"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Stats data
const stats = [
  { label: "Projects Delivered", value: 1000, suffix: "+" },
  { label: "Manhours Saved", value: 20000, suffix: "+" },
  { label: "Worth of Projects Estimated", value: 250, suffix: "M+" },
  { label: "Years of AEC Industry Expertise", value: 7, suffix: "+" },
];

// View-triggered counter component
const StatCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0); // reset counter when not in view
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 20;
    const totalIncrements = duration / incrementTime;
    const increment = end / totalIncrements;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Framer motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectStats = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto space-y-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Pertinent Info Boxes */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left Box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="border border-red-500 rounded-lg p-6 shadow-md transition-all duration-300"
          >
            <motion.h3
              className="text-xl font-bold text-red-600 mb-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              What Sets Pertinent Apart OR Our Approach & Values
            </motion.h3>
            <ul className="space-y-3 text-sm text-gray-800">
              {[
                "Accuracy That Builds Confidence: We take pride in delivering precise and reliable takeoffs, helping our partners submit competitive bids and avoid costly errors.",
                "Support From Start to Finish: Whether it's early-stage budgeting or closeout documentation, we stay involved throughout your project lifecycle—offering the right support at the right time.",
                "Construction-Savvy Team: With years of experience across multiple trades and CSI divisions, we understand construction drawings and project requirements inside out.",
                "Flexible & Transparent Pricing: Our pricing reflects the actual effort and scope—no hidden costs, no last-minute surprises. Just clear communication and honest work.",
                "Responsive & Communicative: We stay proactive in our communication, keeping you updated and informed so you’re never left wondering where things stand.",
                "Long-Term Partnerships: Many of our clients return with repeat work. That’s because we focus on building trust, not just completing tasks.",
                "On-Time Delivery Without Compromising Quality: We understand the pressure of tight deadlines and always aim to deliver fast—while ensuring quality and attention to detail.",
                "Confidential and Secure: Your project data, plans, and pricing stay confidential with us. We treat your information with the highest level of professionalism",
                "Tailored Solutions for Every Partner: No two partners are the same. We adapt our process and deliverables to match your needs—whether you’re a GC, subcontractor, or developer.",
                "Free Trial to Get Started: We offer new partners a chance to experience our work firsthand—before making any commitment.",
              ].map((text, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <strong>{text.split(":")[0]}:</strong>{" "}
                  {text.split(":")[1]?.trim()}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="border border-red-500 rounded-lg p-6 shadow-md transition-all duration-300"
          >
            <motion.h3
              className="text-xl font-bold text-red-600 mb-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Why You Should Partner with Us OR The Pertinent Advantage
            </motion.h3>
            <ul className="space-y-3 text-sm text-gray-800">
              {[
                "Cost-Effective: Avoid unnecessary overhead—get high-quality support without full-time employee costs.",
                "Saves Time: We handle the busywork so you can focus on winning bids and running projects.",
                "Always Available Support: No more delays—we’re responsive, proactive, and here when you need us.",
                "Dedicated Team: Think of us as your remote in-house team, ready to work—no recruitment required.",
                "Accurate & Organized Outputs: From clear markups to detailed summaries, our deliverables are easy to review and ready to use.",
                "Scalable & Flexible: Need more help on larger projects? We adapt to your pace, no matter how fast you grow.",
              ].map((text, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <strong>{text.split(":")[0]}:</strong>{" "}
                  {text.split(":")[1]?.trim()}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-4 text-center gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-6 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-black">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectStats;
