"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import ServiceDetails from "../../components/ServiceDetails";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Banner */}
      <PageBanner
        title="Quantity Takeoff & Estimation"
        description="Accurate material takeoffs that empower contractors to create competitive bids, reduce waste, and stay within budget. Our services ensure cost efficiency and precision from the very beginning of your project."
        backgroundImage="/pertinent9.jpg" // Image placed in public folder
      />

      {/* Service Details Section */}
      <ServiceDetails
        serviceTitle="Who We Serve"
        serviceDesc="Our solutions are tailored to meet the specific needs of both General Contractors and Subcontractors — ensuring efficiency, clarity, and cost optimization."
        generalTitle="General Contractors"
        generalPoints={[
          "Detailed material takeoffs for competitive bidding",
          "Budget forecasting with reduced risk",
          "Comprehensive project-wide estimates",
        ]}
        subTitle="Subcontractors"
        subPoints={[
          "Trade-specific material quantity reports",
          "Resource allocation & cost optimization",
          "Tailored breakdowns for accurate proposals",
        ]}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
