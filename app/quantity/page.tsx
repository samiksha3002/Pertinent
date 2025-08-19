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
          "Site Work & Civil:Demolition, Excavation & Grading,Utilities (Water, Sewer, Storm, Gas),Paving (Concrete & Asphalt),Striping & Pavement Markings,Signage (Traffic, ADA, Wayfinding),Curb, Gutter, Sidewalks,Landscaping & Irrigation",
          "Concrete & Structural Work:Foundations, Slabs, Tilt Walls, Rebar, Post-tension",
          "Masonry & Metals:CMU, Brick, Stone, Structural & Misc. Steel",
          "Wood, Plastics & Composites:Framing, Sheathing, Millwork",
          "Thermal & Moisture Protection:Insulation, Roofing, Waterproofing",
          "Openings:Doors, Frames, Hardware, Windows, Storefronts",
          "Finishes:Drywall, Paint, Tile, Flooring, Ceilings, Trim",
          "Specialties & Equipment:Toilet Accessories, Fire Extinguishers, Signage",
          "MEPF Systems:Mechanical – HVAC, Ducts, Equipment , Electrical – Lighting, Power, Panels, Plumbing – Pipes, Fixtures, Valves , Fire Protection",
        ]}
        subPoints={[
          "Drywall & Framing Contractors:Wall types, layers, framing, ceilings",
          "Painting Contractors: Wall, ceiling, door, trim, special coatings",
          "Finish Carpenters / Trim Contractors:Baseboards, casing, crown, wainscoting",
          "Flooring Contractors:Carpet, LVT, VCT, Wood, Tile, Cove base",
          "Door & Hardware Contractors: Door schedules, hardware sets, frames",
          "Mechanical Contractors:Ducting, HVAC equipment, accessories",
          "Electrical Contractors:Lighting fixtures, conduits, switchgear, low-voltage",
          "Plumbing Contractors:Drainage, water supply, fixtures, roof drains",
          "Fire Sprinkler Contractors:Piping, sprinkler heads, valves",
          "Paving Contractors: Asphalt & concrete, base prep, joints",
          "Striping Contractors:Stall layout, ADA markings, fire lanes",
          "Signage Contractors:Traffic & directional signs, ADA signage",
          "Landscaping Contractors:Sod, planting, irrigation, edging",
        ]}
      />


      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
