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
        title="Bid Management and ITB Support"
        description="At Pertinent Construction Services, we provide comprehensive ITB (Invitation to Bid) Management solutions designed to support both general contractors and subcontractors through every step of the bidding process. Whether you're managing multiple trades or preparing your own proposals, our team ensures nothing gets missed."
        backgroundImage="/pertinent9.jpg" // Make sure this file exists in /public
      />

      {/* ✅ Service Details */}
      <ServiceDetails
  serviceTitle="Bid Management and ITB"
  serviceDesc="Streamlining Bid Processes for General Contractors & Subcontractors."
  generalPoints={[
    "Invitation Review:Review ITB documents to identify relevant trades, scope of work, and bid requirements.",
    "Bid Package Organization:Structure and manage ITB documents including drawings, specs, and CSI-based scope breakdowns.",
    "Trade Coverage & Outreach:Identify missing trades, reach out to qualified subcontractors/vendors, and maximize bid coverage.",
    "Live Bid Tracking:Maintain real-time bid trackers to monitor incoming bids, follow-ups, and coverage gaps.",
    "Follow-Ups & Communication Logs:Manage consistent communication with bidders and clients—reminders, updates, and clarifications.",
    "Bid Comparison & Scope Sheets:Prepare detailed side-by-side bid comparisons and scope coverage matrices.",
    "Proposal Review & Support:Assist in preparing, formatting, and submitting clear, compliant proposals with accurate inclusions and exclusions.",
    "Organized Submission Management:Maintain all bid-related documents—proposals, RFIs, addenda, and notes—in clean, searchable formats."
  ]}
  subPoints={[]} // No separate subPoints
  combinedTitle="General Contractor & Subcontractor"
/>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
