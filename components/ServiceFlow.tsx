"use client";

import React from "react";

const sections = [
  {
    title: "Quantity Takeoff & Estimation",
    general: {
      title: "General Contractors",
      content: [
        "We help GCs win more bids and execute better by offering comprehensive, quantity takeoffs—covering all the scope with accurate budgeting, buyout, and cost control.",
        "Site Work & Civil: Demolition, Excavation, Utilities, Paving, Striping, Signage, Curb, Landscaping",
        "Concrete & Structural Work: Foundations, Slabs, Rebar",
        "Masonry & Metals: CMU, Brick, Steel",
        "Wood, Plastics & Composites",
        "Openings & Finishes",
        "MEPF Systems: Mechanical, Electrical, Plumbing, Fire Protection",
      ],
    },
    subcontractors: {
      title: "Subcontractors",
      content: [
        "Tailored trade-by-trade takeoffs for accurate quote and execution work.",
        "Drywall & Framing Contractors",
        "Painting Contractors",
        "Finish Carpenters / Trim Contractors",
        "Flooring, Door & Hardware Contractors",
        "Mechanical, Electrical, Plumbing Contractors",
        "Fire Sprinkler, Striping, Signage, Landscaping Contractors",
      ],
    },
  },
  {
    title: "Project Controls Management",
    general: {
      title: "General Contractors",
      content: [
        "End-to-End Project Controls Support",
        "Submittal Management, Constructability Reviews",
        "Drawing & Revision Management",
        "RFI Management, Change Order Creation",
        "Material Procurement Tracking",
        "CM Platform Management, Closeout Docs",
      ],
    },
    subcontractors: {
      title: "Subcontractors",
      content: [
        "Drawing & Revision Tracking",
        "Submittal & RFI Support",
        "Change Order Documentation",
        "Punch List Tracking",
        "Closeout Documentation",
      ],
    },
  },
  {
    title: "ITB Management",
    general: {
      title: "General + Subcontractors",
      content: [
        "Invitation Review, Bid Package Organization",
        "Trade Coverage & Outreach, Live Bid Tracking",
        "Follow-ups & Communication Logs",
        "Bid Comparison & Scope Sheets",
        "Proposal Review & Support",
        "Organized Submission Management",
      ],
    },
    subcontractors: null,
  },
];

export default function ServiceFlow() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-12 lg:px-24 text-red-700">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
        Our Service Flow
      </h2>

      <div className="grid lg:grid-cols-3 gap-12">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white border border-red-200 shadow-lg p-6 rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-600">
              {section.title}
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-red-500 mb-2">
                {section.general.title}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {section.general.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {section.subcontractors && (
              <div>
                <h4 className="font-semibold text-red-500 mb-2">
                  {section.subcontractors.title}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {section.subcontractors.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
