"use client";

import React, { useState, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Calculator,
  Calendar,
  DollarSign,
} from "lucide-react";

interface SubPoint {
  title: string;
  description: string;
}

interface CardData {
  id: number;
  title: string;
  definition: string;
  subPoints: SubPoint[];
  icon: ReactElement;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Quantity Takeoff & Estimation",
    definition:
      "Accurately calculate material quantities and costs for efficient project planning.",
    icon: <Calculator className="h-10 w-10 text-red-500" />,
    subPoints: [
      {
        title: "General Contractors",
        description:
          "Detailed estimates for managing large construction projects.",
      },
      {
        title: "Sub Contractors",
        description: "Precise cost breakdowns for specialized trade work.",
      },
    ],
  },
  {
    id: 2,
    title: "Project Controls Management",
    definition:
      "Plan timelines and resources effectively for on-time delivery.",
    icon: <Calendar className="h-10 w-10 text-red-500" />,
    subPoints: [
      {
        title: "Milestone Planning",
        description: "Track project phases with clear checkpoints.",
      },
      {
        title: "Resource Allocation",
        description: "Optimize manpower and material usage.",
      },
    ],
  },
  {
    id: 3,
    title: "Bid Management & ITB Support",
    definition:
      "Maintain financial oversight throughout the project lifecycle.",
    icon: <DollarSign className="h-10 w-10 text-red-500" />,
    subPoints: [
      {
        title: "Expense Tracking",
        description: "Monitor spending in real-time.",
      },
      {
        title: "Budget Forecasting",
        description: "Predict future costs for proactive decisions.",
      },
    ],
  },
];

export default function MarketingAnalytics() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [openSub, setOpenSub] = useState<number | null>(null);

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {selectedId === null ? (
            <motion.div
              key="cardsGrid"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {cardsData.map((card) => (
                <motion.div
                  key={card.id}
                  onClick={() => setSelectedId(card.id)}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer rounded-2xl bg-gradient-to-br from-red-50 to-white p-6 shadow-lg border border-red-100 group"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedId(card.id);
                    }
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-200">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{card.definition}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="cardDetail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-white via-red-50 to-white rounded-2xl shadow-xl p-8 border border-red-100"
            >
              {cardsData
                .filter((c) => c.id === selectedId)
                .map((card) => (
                  <div key={card.id}>
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-4 mb-4"
                    >
                      <div className="p-4 bg-red-100 rounded-full">
                        {card.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {card.title}
                      </h2>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 mb-8"
                    >
                      {card.definition}
                    </motion.p>

                    <div className="space-y-4">
                      {card.subPoints.map((sub, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.2 }}
                          className="bg-white rounded-xl border border-red-100 p-4 shadow-sm"
                        >
                          <div
                            className="flex justify-between items-center cursor-pointer select-none"
                            onClick={() =>
                              setOpenSub(openSub === index ? null : index)
                            }
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                setOpenSub(openSub === index ? null : index);
                              }
                            }}
                          >
                            <span className="font-semibold text-gray-800">
                              {sub.title}
                            </span>
                            {openSub === index ? (
                              <ChevronDown className="text-red-500" />
                            ) : (
                              <ChevronRight className="text-red-500" />
                            )}
                          </div>

                          <AnimatePresence>
                            {openSub === index && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 text-gray-600"
                              >
                                {sub.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => {
                        setSelectedId(null);
                        setOpenSub(null);
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="mt-8 px-6 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600"
                      type="button"
                    >
                      Back
                    </motion.button>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
