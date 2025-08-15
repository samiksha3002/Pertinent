import React from "react";

export default function PertinentAdvantages() {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
        Pertinent <span className="text-red-600">Advantages</span>
      </h2>

      {/* Image */}
      <img
        src="/Pertinent Advantages.gif"
        alt="Pertinent Advantages"
        className="w-full max-w-4xl   object-cover"
      />
    </section>
  );
}
