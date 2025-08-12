"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // Optional icon

const marketingMethods = [
  {
    title: "Market Research",
    description:
      "Understanding customer needs, market trends, and competition to make informed decisions.",
  },
  {
    title: "Brand Positioning",
    description:
      "Defining a unique space in the market to stand out from competitors.",
  },
  {
    title: "Digital Campaigns",
    description:
      "Leveraging social media, SEO, and online ads to reach the right audience.",
  },
  {
    title: "Content Strategy",
    description:
      "Creating valuable and relevant content to attract and engage customers.",
  },
  {
    title: "Customer Engagement",
    description:
      "Building strong relationships with customers through personalized interactions.",
  },
  {
    title: "Performance Analytics",
    description: "Tracking and measuring campaign success to optimize results.",
  },
];

export default function MarketingAnalytics() {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Circle with Logo */}
        <div className="relative flex-shrink-0 w-40 h-40 rounded-full bg-red-500 flex items-center justify-center shadow-lg z-10">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* SVG Arrow */}
        <div className="absolute left-40 top-1/2 transform -translate-y-1/2 w-[calc(100%-10rem)] h-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 500 2"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="1"
              x2="500"
              y2="1"
              stroke="black"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="black" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Right Blocks */}
        <div className="ml-12 flex flex-col gap-6 z-20">
          {marketingMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-red-500"
            >
              <h3 className="text-lg font-bold text-black mb-1 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-red-500" />
                {method.title}
              </h3>
              <p className="text-gray-700">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
