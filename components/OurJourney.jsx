"use client";

import React from "react";

const OurJourney = () => {
  return (
    <section
      className="relative bg-black text-white py-20 px-6"
      style={{
        backgroundImage: `url("/journey-bg.png")`, // use your image from /public
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Heading */}
        <div>
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            OUR <br /> <span className="text-white">JOURNEY</span>
          </h2>
        </div>

        {/* Right Side: Content */}
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            Our journey began, working with top General Contractors and
            Subcontractors in the AEC industry, including:
          </p>

          <ul className="list-disc list-inside pl-2 space-y-1">
            <li>Cadence Mcshane</li>
            <li>Skiles Group</li>
            <li>Muckleroy Falls</li>
            <li>The Door Company</li>
            <li>The Demo Company</li>
          </ul>

          <p>
            Recognizing the industry's growing need for quality-driven
            outsourcing, we established <strong>Pertinent</strong>—a trusted
            partner focused on delivering accurate, timely, and cost-effective
            construction support services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
