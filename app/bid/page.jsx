"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import ServiceDetails from "../../components/ServiceDetails";

export default function Quantity() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Page Banner */}
      <PageBanner
        title="Quantity Takeoff and Estimation"
        description="Explore our gallery to witness the craftsmanship and quality behind every project we’ve delivered. From residential to industrial structures, each image reflects our engineering precision and commitment to excellence."
        backgroundImage="/pertinent9.jpg" // Make sure this file exists in /public
      />

      {/* ✅ Service Details */}
       <ServiceDetails
        serviceTitle="Quantity Takeoff & Estimation"
        serviceDesc="We help contractors with accurate material takeoffs to create competitive bids, reduce waste, and optimize costs."
        generalPoints={[
          "Detailed material takeoffs for competitive bidding",
          "Budget forecasting with reduced risk",
          "Comprehensive project-wide estimates",
        ]}
        subPoints={[
          "Trade-specific material reports",
          "Resource allocation & cost optimization",
          "Tailored breakdowns for accurate proposals",
        ]}
      />


      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
