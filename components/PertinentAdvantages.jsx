import React from "react";

export default function PertinentAdvantages() {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Pertinent Advantages
      </h2>

      {/* Image */}
      <img
        src="/advantage.jpg"
        alt="Pertinent Advantages"
        className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
      />
    </section>
  );
}
