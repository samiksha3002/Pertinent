// src/components/PageBanner.jsx
"use client";

import React from "react";

const PageBanner = ({ title, description, backgroundImage }) => {
  return (
    <section
      className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative text-center px-6 z-10 max-w-4xl">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
