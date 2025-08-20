import React from "react";

export default function PertinentAdvantages() {
  return (
    <section className="w-full bg-white py-0 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black text-center mt-8">
        Pertinent <span className="text-red-600">Advantages</span>
      </h2>

      {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src="/Perad.gif"
          alt="Pertinent Advantages"
          className="w-full max-w-6xl object-cover"
        />
      </div>
    </section>
  );
}
