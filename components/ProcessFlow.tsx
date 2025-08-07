"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "1. Project Intake",
    content: [
      "Receive project documents via email or cloud link.",
      "Review scope, drawings, and specifications.",
      "Clarify missing details or RFI-worthy issues, if any.",
    ],
  },
  {
    title: "2. Scope Alignment & Confirmation",
    content: [
      "Confirm project requirements and determine the level of detail needed.",
      "Tailor the scope accordingly and finalize it with the client before execution.",
    ],
  },
  {
    title: "3. Resource Assignment",
    content: [
      "Assign engineers based on trade expertise and workload.",
      "Set internal deadlines to meet or beat client timelines.",
    ],
  },
  {
    title: "4. Execution & Documentation",
    content: [
      "Start work using industry-standard tools based on the latest drawings.",
      "Ensure accuracy through organized markups, clear logs, and well-structured files.",
    ],
  },
  {
    title: "5. Internal Review & QC",
    content: [
      "Conduct internal review to ensure scope accuracy and full scope inclusion.",
      "Verify drawings, notes, and revisions; flag any discrepancies for client attention.",
    ],
  },
  {
    title: "6. Deliverables Preparation",
    content: [
      "Prepare clean and itemized Excel spreadsheets.",
      "Include summary sheets, trade breakdowns, and alternates if needed.",
      "Format to match client’s internal templates (if provided).",
    ],
  },
  {
    title: "7. Client Submission",
    content: [
      "Submit final files via email or shared platform.",
      "Provide a brief overview.",
      "Remain available for clarification calls or follow-up adjustments.",
    ],
  },
  {
    title: "8. Feedback & Revision (If Needed)",
    content: [
      "Address revisions or changes from the client’s end.",
      "Provide updated takeoff based on revised drawings or scope updates.",
    ],
  },
  {
    title: "9. Archiving & Reporting",
    content: [
      "Organize all project files, markups, and communication records.",
      "Log hours spent, scope covered, and project complexity for reporting.",
    ],
  },
  {
    title: "10. Post-Submission Support",
    content: [
      "Support during bid phase with last-minute quantity checks.",
      "Assist in scope clarification for subcontractor alignment.",
      "Help with value engineering suggestions if requested.",
    ],
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white text-red-700">
      <h2 className="text-4xl font-bold text-center mb-16">Process</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative w-full sm:w-[45%] lg:w-[30%] border border-red-300 p-5 rounded-lg shadow hover:shadow-lg transition-all duration-300 bg-white"
          >
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {step.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {idx < steps.length - 1 && (
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="text-red-500 w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
