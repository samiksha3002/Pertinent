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
        title="Project Controls Management "
        description="Streamlined management of submittals, RFIs, drawing revisions, and closeout documentation — ensuring smooth workflows, reduced delays, and full project compliance."
        backgroundImage="/pertinent9.jpg" // Make sure this file exists in /public
      />

      {/* ✅ Service Details */}
       <ServiceDetails
        serviceTitle="Project Controls Management"
        serviceDesc="We help contractors with accurate material takeoffs to create competitive bids, reduce waste, and optimize costs."
        generalPoints={[
         
          "Submittal Management:Comprehensive submittal review and tracking to ensure compliance with construction documents, fast-track approvals, and maintain seamless coordination across all construction trades.",
         " Constructability Reviews:Identify conflicts, gaps, or constructability issues early to reduce change orders and rework during execution.",
         "Drawing & Revision Management:Accurate tracking of drawing updates and revisions ensures teams build with the latest plans. All changes are communicated to the general contractor to evaluate cost and schedule impacts—supporting efficient and informed project execution.",
         "RFI Management:Create, manage, and track RFIs to ensure timely responses, reduce project delays, and eliminate communication gaps.",
         "Change Order Creation:Prepare and document change orders with detailed scope, pricing, and impact analysis to ensure transparency, approval tracking, and alignment with project budgets and schedules.",
         "Material Procurement Tracking:Keep vendors, suppliers, and field teams aligned by managing delivery schedules and long-lead items.",
         "CM Platform Management:Efficient setup and management of construction platforms like Procore, Prolog etc to track RFIs, submittals, change orders, and drawings—ensuring real-time coordination and project visibility.",
         "Closeout Documentation:Compile and organize all required closeout materials—O&M manuals, warranties, punch lists, and certifications.",
         "Punch List Tracking:Ensure completion of all pending items before handover to minimize delays.",
        ]}
        subPoints={[
          "Drawing & Revision Tracking:Ensure your field crews always work with the most up-to-date drawings and avoid costly mistakes.",
          "Submittal & RFI Support:Prepare, log, and track RFIs and submittals to keep your approvals moving and projects on track.",
          "Change Order Documentation:Record scope changes accurately for transparent communication and timely billing.",
    
          "Closeout Documentation:Prepare and organize all required closeout packages for smooth turnover and final payment."
        ]}
      />


      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
