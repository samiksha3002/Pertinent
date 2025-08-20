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
        serviceDesc="Accurate material takeoffs across all trades for building construction — helping contractors create competitive bids, reduce material waste, and stay within budget from the start."
        generalPoints={[
          "Existing Conditions:Demolition quantities,Site clearing, stripping, grading,Removals (asphalt, concrete, structures)",
          "Concrete:Footings, grade beams (CY of concrete, LF of rebar),Slabs on grade / suspended slabs (SF, thickness),Columns, beams, walls (CY, rebar tonnage, formwork SF),Precast elements",
          "Masonry:CMU walls (SF by thickness, rebar & grout quantities),Brick veneer / stone veneer (SF)Mortar & accessories",
          "Metals:Structural steel (tonnage, LF, SF of members),Steel decking (SF),Miscellaneous metals (handrails, stairs, ladders, embeds)",
          "Wood, Plastics, and Composites:Framing lumber (LF, BF by size),Sheathing (SF by thickness),Blocking & nailers,Millwork / casework (LF / EA)",
          "Thermal & Moisture Protection:Insulation (roof, wall, slab – SF by thickness),Roofing (SF of membranes, insulation boards),Waterproofing (SF/LF),Sealants & firestopping",
          "Openings:Doors & frames (EA by type, material),Windows, storefronts, curtain wall (SF),Hardware sets,Louvers",
          "Finishes:Drywall partitions, ceilings (SF/LF by type),Flooring (carpet, tile, vinyl, SF),Paint (SF of wall/ceiling by coat),Acoustical ceilings (SF)",
          "Specialties:Toilet accessories (EA),Fire extinguishers / cabinets,Lockers, signage",
          "Equipment:Kitchen equipment,Laundry equipment,Athletic / gym equipment",
          "Furnishings:Window treatments (LF/SF),Furniture / casework",
          "Special Construction:Pre-engineered structures,Cleanrooms / cold storage units,Swimming pools",
          "Conveying Systems:Elevators, escalators, lifts (EA)",
          "Fire Suppression:Sprinkler piping (LF by size, fittings),Fire pump / riser equipment,Sprinkler heads (EA)",
          "Plumbing:Underground piping (LF by size),Domestic water piping (LF),Waste/vent piping (LF),Fixtures (EA – toilets, sinks, showers, etc.),Insulation (LF)",
          "HVAC:Ductwork (LF / lbs / SF by size),VAV boxes, diffusers, grilles (EA),Chillers, AHUs, FCUs, RTUs (EA),Piping (chilled water, condenser water – LF by size),Insulation (LF / SF)",
          "Integrated Automation:Controls wiring (LF),Panels & controllers (EA)",
          "Electrical:Conduit & cable tray (LF),Wiring & feeders (LF by size),Panels, switchboards, transformers (EA),Lighting fixtures (EA),Devices (switches, outlets, data ports – EA)",
          "Communications:Data cabling (LF),Racks, patch panels (EA),Devices (EA)",
          "Electronic Safety & Security:Fire alarm devices (EA – pull stations, strobes, detectors),Security system devices (EA – cameras, card readers)",
          "Earthwork:Excavation / backfill (CY),Grading (SF/CY),Trenching (LF),Soil stabilization",
          "Exterior Improvements:Asphalt paving (SY/Tons),Concrete paving (SY/CY),Curbs, gutters (LF),Fencing (LF),Landscaping (SF, plant count, irrigation LF)",
        ]}
        subPoints={[
          "Demolition Contractor :lective demo, removals, site clearing.",
          "Concrete Contractor:footings, slabs, walls, rebar, formwork.",
          "Concrete Contractor:footings, slabs, walls, rebar, formwork.",
          "Structural Steel Contractor:steel frames, decking.",
          "Miscellaneous Metals Contractor:stairs, handrails, embeds, lintels.",
          "Framing Contractor (Carpenter):rough carpentry, sheathing, blocking.",
          "Millwork / Finish Carpentry Contractor:casework, trims, custom woodwork.",
          "Roofing Contractor:membranes, insulation, flashing.",
          "Insulation Contractor:thermal & acoustical insulation.",
          "Waterproofing Contractor:foundations, sealants, firestopping.",
          "Door & Hardware Contractor:hollow metal/wood doors, frames, hardware.",
          "Glazing Contractor:windows, curtain walls, storefronts.",
          "Specialty Contractor:louvers, overhead doors.",
          "Drywall Contractor:partitions, ceilings, taping.",
          "Flooring Contractor: carpet, tile, vinyl, wood flooring.",
          "Painting Contractor:painting, wallcoverings.",
          "Ceiling Contractor:acoustical ceiling tiles.",
          "Specialties Contractor:toilet accessories, lockers, fire extinguishers, signage.",
          "Equipment Supplier/Installer:kitchen, laundry, gym, medical equipment.",
          "Furnishing Contractor / Vendor:furniture, window coverings, blinds.",
          "Specialty Trade Contractor:pre-engineered buildings, cleanrooms, pools.",
          "Fire Protection Contractor:sprinkler piping, risers, fire pumps, heads.",
          "Plumbing Contractor:water/waste piping, fixtures, equipment.",
          "Mechanical Contractor:ductwork, piping, equipment, insulation.",
          "Controls Contractor:BMS/DDC controls, panels, automation.",
          "Electrical Contractor:wiring, conduit, panels, switchgear, lighting, devices.",
          "Low Voltage Contractor:data cabling, racks, patch panels, telecom devices.",
          "Fire Alarm Contractor:devices, panels, cabling.",
          "Security Contractor:CCTV, access control, card readers.",
          "Earthwork Contractor:excavation, backfill, grading, trenching.",
          "Paving Contractor:asphalt, concrete paving.",
          "Landscaping Contractor:planting, irrigation, sod.",
          "Fencing Contractor:fencing, gates.",
          "Utility Contractor:storm, sanitary, water, manholes, site piping.",
        ]}
      />


      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
