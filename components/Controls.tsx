"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Controls() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527813/RFI_MANAGEMENT_PROCESS_l08yiv.png",
      name: "RFI Management Process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527813/MATERIAL_PROCUREMENT_PROCESS_vzzvin.png",
      name: "Material Procurement Process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527813/SUBMITTAL_MANAGEMENT_PROCESS_prmiuj.png",
      name: "Submittal Management Process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527812/CHANGE_MANAGEMENT_PROCESS_pgkoa3.png",
      name: "Change Management Process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527812/CLOSEOUT_MANAGEMENT_PROCESS_uygrcy.png",
      name: "Closeout Management Process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527812/BUYOUT_ASSISTANCE_PROCESS_cjeaqj.png",
      name: "Buyout Assistance Process",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-8 items-stretch">
        {/* Left Box */}
     <div className="bg-white border border-red-500 rounded-2xl shadow-sm flex items-center justify-center w-full sm:w-[220px] px-5 py-6 sm:py-8">
  <h3 className="text-xl sm:text-3xl font-bold text-center leading-snug">
    Project <br /> Controls <br />
    <span className="text-red-600">Management</span>
  </h3>
</div>

        {/* Right: Scrolling Row */}
        <div className="overflow-hidden">
          <motion.div
            style={{
              display: "flex",
              gap: "1.5rem", // smaller gap for mobile
              willChange: "transform",
            }}
            animate={{ x: ["0%", "-500%"] }}
            transition={{ repeat: Infinity, duration:25, ease: "linear" }}
          >
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[250px] sm:min-w-[300px] md:min-w-[360px] cursor-pointer"
                onClick={() => setSelectedImg(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={360}
                  height={260}
                  className="rounded-lg sm:rounded-xl shadow-md border border-red-100 object-cover w-full max-w-[85vw] sm:max-w-none"
                />
                <p className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-center px-2">
                  {img.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Zoomable Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-2 sm:px-6">
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-red-600 hover:bg-red-700 text-white rounded-full px-3 sm:px-4 py-1 text-lg sm:text-xl"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>

          <TransformWrapper>
            <TransformComponent>
              <Image
                src={selectedImg}
                alt="Selected"
                width={1000}
                height={700}
                className="rounded-lg sm:rounded-xl shadow-2xl max-w-[95vw] max-h-[75vh] object-contain"
                priority
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}
    </section>
  );
}
