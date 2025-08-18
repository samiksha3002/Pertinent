"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Controls() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // ✅ Cloudinary Images (direct URLs)
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
      name: "Submittal Management process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527812/CHANGE_MANAGEMENT_PROCESS_pgkoa3.png",
      name: "Change Management Process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527812/CLOSEOUT_MANAGEMENT_PROCESS_uygrcy.png",
      name: "Closeout Management process",
    },
    {
      src: "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527812/BUYOUT_ASSISTANCE_PROCESS_cjeaqj.png",
      name: "Buyout Assistance Process",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-14 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-[260px_1fr] gap-8 items-stretch">
        {/* Left Box */}
        <div className="bg-white border border-red-500 rounded-2xl shadow-sm px-6 py-10 flex items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-center leading-snug">
            Project Controls <br />
            <span className="text-red-600">Management</span>
          </h3>
        </div>

        {/* Right: Scrolling Row */}
        <div className="overflow-hidden">
          <motion.div
            style={{
              display: "flex",
              gap: "2.5rem", // Tailwind gap-10
              willChange: "transform",
            }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[360px] cursor-pointer"
                onClick={() => setSelectedImg(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={360}
                  height={260}
                  className="rounded-xl shadow-md border border-red-100 object-cover"
                />
                <p className="mt-3 text-lg font-semibold text-center">
                  {img.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Zoomable Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-1 text-xl"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>

          <TransformWrapper>
            <TransformComponent>
              <Image
                src={selectedImg}
                alt="Selected"
                width={1100}
                height={750}
                className="rounded-xl shadow-2xl max-w-[95vw] max-h-[80vh] object-contain"
                priority
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}
    </section>
  );
}
