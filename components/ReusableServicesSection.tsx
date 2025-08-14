"use client";

import React, { useState } from "react";
import {
  FaCalculator,
  FaClipboardList,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Fix for Framer Motion + TypeScript className issue
const MotionDiv: any = motion.div;
const MotionUl: any = motion.ul;

const data = [
  {
    icon: <FaCalculator size={22} />,
    title: "Quantity Takeoff & Estimation",
    desc: "Accurate material takeoffs across all trades for building construction — helping contractors create competitive bids, reduce material waste, and stay within budget from the start.",
    subs: [
      {
        title: "General Contractors",
        points: [
          "Site Work & Civil: Demolition, Excavation, Utilities, Paving, Striping, Signage, Curb, Gutter, ADA Compliance, Landscaping & Irrigation",
          "Concrete & Structural Work: Foundations, Slabs, Tilt Walls, Rebar, Post-tension",
          "Masonry & Metals: CMU, Brick, Stone, Structural & Misc. Steel",
          "Wood, Plastics & Composites: Framing, Sheathing, Millwork",
          "Thermal & Moisture Protection: Insulation, Roofing, Waterproofing",
          "Openings: Doors, Frames, Hardware, Windows, Storefronts",
          "Finishes: Drywall, Ceilings, Flooring, Painting, Specialties",
          "Specialties & Equipment: Signage, Toilet Partitions, Fire Extinguishers, Signage",
          "MEPF Systems: Mechanical – HVAC, Ducts, Equipment, Electrical – Lighting, Power, Panels, Plumbing – Pipes, Fixtures, Valves, Fire Protection – Sprinklers, Piping, Heads",
        ],
      },
      {
        title: "Subcontractors",
        points: [
          "Drywall & Framing Contractors: Wall types, layers, framing, ceilings",
          "Painting Contractors: Wall, ceiling, door, trim, special coatings",
          "Finish Carpenters / Trim Contractors: Baseboards, casing, crown, wainscoting",
          "Flooring Contractors: Carpet, LVT, VCT, Wood, Tile, Cove base",
          "Door & Hardware Contractors: Door schedules, hardware sets, frames",
          "Mechanical Contractors: Ducting, HVAC equipment, accessories",
          "Electrical Contractors: Conduit, wiring, fixtures, panels",
          "Plumbing Contractors: Piping, fixtures, valves, fittings",
          "Fire Protection Contractors: Sprinkler systems, piping, heads",
          "Striping Contractors: Parking lot striping, signage, pavement markings",
          "Landscaping Contractors: Sod, planting, irrigation, edging",
        ],
      },
    ],
  },
  {
    icon: <FaClipboardList size={22} />,
    title: "Project Controls Management",
    desc: "Streamlined management of submittals, RFIs, drawing revisions, and closeout documentation — ensuring smooth workflows, reduced delays, and full project compliance.",
    subs: [
      {
        title: "General Contractors",
        points: [
          "Submittal Management: Comprehensive submittal review and tracking to ensure compliance with construction documents, fast-track approvals, and maintain seamless coordination across all construction trades.",
          "Constructability Reviews: Identify conflicts, gaps, or constructability issues early to reduce change orders and rework during execution.",
          "Drawing & Revision Management: Accurate tracking of drawing updates and revisions ensures teams build with the latest plans. All changes are communicated to the general contractor to evaluate cost and schedule impacts—supporting efficient and informed project execution.",
          "RFI Management: Create, manage, and track RFIs to ensure timely responses, reduce project delays, and eliminate communication gaps.",
          "Change Order Creation: Prepare and document change orders with detailed scope, pricing, and impact analysis to ensure transparency, approval tracking, and alignment with project budgets and schedules.",
          "Material Procurement Tracking: Keep vendors, suppliers, and field teams aligned by managing delivery schedules and long-lead items.",
          "CM Platform Management: Efficient setup and management of construction platforms like Procore, Prolog etc to track RFIs, submittals, change orders, and drawings—ensuring real-time coordination and project visibility.",
          "Closeout Documentation: Compile and organize all required closeout materials—O&M manuals, warranties, punch lists, and certifications.",
        ],
      },
      {
        title: "Subcontractors",
        points: [
          "Drawing & Revision Tracking: Ensure your field crews always work with the most up-to-date drawings and avoid costly mistakes.",
          "Submittal & RFI Support: Prepare, log, and track RFIs and submittals to keep your approvals moving and projects on track.",
          "Change Order Documentation: Record scope changes accurately for transparent communication and timely billing.",
          "Punch List Tracking: Ensure completion of all pending items before handover to minimize delays.",
          "Closeout Documentation: Prepare and organize all required closeout packages for smooth turnover and final payment.",
        ],
      },
    ],
  },
  {
    icon: <FaEnvelopeOpenText size={22} />,
    title: "Bid Management & ITB Support",
    desc: "End-to-end support for invitation-to-bid (ITB) processes, including vendor communication, bid tracking, and document coordination — so you never miss a qualified opportunity.",
    subs: [
      {
        title:
          "Streamlining Bid Processes for General Contractors & Subcontractors",
        points: [
          "Invitation Review:Review ITB documents to identify relevant trades, scope of work, and bid requirements.",
          "Bid Package Organization:Structure and manage ITB documents including drawings, specs, and CSI-based scope breakdowns.",
          "Trade Coverage & Outreach:Identify missing trades, reach out to qualified subcontractors/vendors, and maximize bid coverage",
          " Live Bid Tracking:Maintain real-time bid trackers to monitor incoming bids, follow-ups, and coverage gaps.",
          " Follow-ups & Communication Logs:Manage consistent communication with bidders and clients—reminders, updates, and clarifications.",
          " Bid Comparison & Scope Sheets:Prepare detailed side-by-side bid comparisons and scope coverage matrices.",
          " Proposal Review & Support:Assist in preparing, formatting, and submitting clear, compliant proposals with accurate inclusions and exclusions.",
          "Organized Submission Management:Maintain all bid-related documents—proposals, RFIs, addenda, and notes—in clean, searchable formats.",
        ],
      },
    ],
  },
];

const formatPoint = (point: string) => {
  const [boldPart, ...rest] = point.split(":");
  return (
    <>
      <strong>{boldPart}:</strong> {rest.join(":").trim()}
    </>
  );
};

const ReusableServicesSection = () => {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openSub, setOpenSub] = useState<Record<number, number | null>>({});

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
    setOpenSub({});
  };

  const toggleSub = (serviceIndex: number, subIndex: number) => {
    setOpenSub((prev) => ({
      ...prev,
      [serviceIndex]: prev[serviceIndex] === subIndex ? null : subIndex,
    }));
  };

  return (
    <section id="services" className="bg-white py-20 px-6">
      {/* Section Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <p className="text-gray-500 max-w-xl mx-auto">
          Making Construction Smoother — Here’s How
        </p>
        <div className="h-1 w-14 bg-red-600 mx-auto mt-4 rounded-full" />
      </MotionDiv>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {data.map((service, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Service Header */}
            <button
              onClick={() => toggleService(index)}
              className="flex flex-col items-center w-full text-center"
            >
              <div className="bg-gray-200 text-red-600 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </button>

            {/* Sub-options Accordion */}
            <AnimatePresence>
              {openService === index ? (
                <MotionDiv
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 border-t border-red-300 pt-4"
                >
                  {service.subs.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-2">
                      <button
                        onClick={() => toggleSub(index, subIndex)}
                        className="flex justify-between items-center w-full text-left font-medium text-red-700 hover:bg-red-50 px-3 py-2 rounded"
                      >
                        {sub.title}
                        <span
                          className={`transition-transform ${
                            openSub[index] === subIndex
                              ? "rotate-45"
                              : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence>
                        {openSub[index] === subIndex ? (
                          <MotionUl
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 list-disc text-sm text-gray-700 space-y-1"
                          >
                            {sub.points.map((point, i) => {
                              const [boldText, rest] = point.split(":");
                              return (
                                <li key={i}>
                                  <strong>{boldText}:</strong>
                                  {rest && ` ${rest}`}
                                </li>
                              );
                            })}
                          </MotionUl>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  ))}
                </MotionDiv>
              ) : null}
            </AnimatePresence>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default ReusableServicesSection;
