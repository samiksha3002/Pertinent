"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Controls() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // ✅ Images (public folder)
  const images = [
    { src: "/A1.3 - FLOOR PLAN -SECTION 1 -FIRST FLOOR.jpg", name: "Floor Plan" },
    { src: "/A2.3 - REFLECTED CEILING PLAN -SECTION 1.jpg", name: "Ceiling Plan" },
    { src: "/A3.1 - ALUMINUM FRAME DOOR SCHEDULE & STOREFRONT CONFIGURATIONS.jpg", name: "Door Schedule" },
    { src: "/A4.3 - FINISH PLAN -SECTION 3.jpg", name: "Finish Plan" },
    { src: "/A5.1 - EXTERIOR ELEVATIONS.jpg", name: "Elevations" },
    { src: "/C1.07 - PHASE 1 DEMOLITION PLAN - SECTION _C_.jpg", name: "Demolition Plan" },
    { src: "/C1.11 - PHASE 1 SITE PLAN -SECTION _C_.jpg", name: "Site Plan" },
    { src: "/C1.26 - PHASE 1 STORM DRAIN PLAN - SECTION _C_.jpg", name: "Storm Drain Plan" },
    { src: "/img8.jpg", name: "Extra Project" },
  ];

  // helper: encode file names with spaces
  const safe = (src: string) => (src.includes(" ") ? encodeURI(src) : src);

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

        {/* Right: Single Row with Images + Names */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[340px] cursor-pointer"
                onClick={() => setSelectedImg(safe(img.src))}
              >
                <Image
                  src={safe(img.src)}
                  alt={img.name}
                  width={340}
                  height={240}
                  className="rounded-xl shadow-md border border-red-100 object-cover"
                  onError={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.display =
                      "none")
                  }
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
                className="rounded-xl shadow-2xl"
                priority
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}
    </section>
  );
}
