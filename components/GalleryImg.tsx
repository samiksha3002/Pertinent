"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function GalleryImg() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // ✅ Images must exist in /public. Add/remove as needed.
  const images = [
    "/A1.3 - FLOOR PLAN -SECTION 1 -FIRST FLOOR.jpg",
    "/A2.3 - REFLECTED CEILING PLAN -SECTION 1.jpg",
    "/A3.1 - ALUMINUM FRAME DOOR SCHEDULE & STOREFRONT CONFIGURATIONS.jpg",
    "/A4.3 - FINISH PLAN -SECTION 3.jpg",
    "/A5.1 - EXTERIOR ELEVATIONS.jpg",
    "/C1.07 - PHASE 1 DEMOLITION PLAN - SECTION _C_.jpg",
    "/C1.11 - PHASE 1 SITE PLAN -SECTION _C_.jpg",
    "/C1.26 - PHASE 1 STORM DRAIN PLAN - SECTION _C_.jpg",
    "/img8.jpg",
  ];

  const safe = (src: string) => (src.includes(" ") ? encodeURI(src) : src);

  return (
    <section className="w-full bg-white text-black py-10 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-10 sm:mb-12">
        Our <span className="text-red-600">Projects</span>
      </h2>

      {/* Responsive Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 sm:gap-8 items-stretch">
        {/* Left slim box */}
        <div className="bg-white border border-red-500 rounded-2xl shadow-sm px-5 py-6 sm:py-8 flex items-center justify-center">
          <h3 className="text-xl sm:text-3xl font-bold text-center leading-snug">
            Quantity Take Off <br />
            <span className="text-red-600">&nbsp;Estimation</span>
          </h3>
        </div>

        {/* Right scrolling gallery */}
        <div className="overflow-hidden flex flex-col gap-6">
          {/* Mobile: single row */}
          <motion.div
            className="flex gap-4 sm:hidden"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...images, ...images].map((src, i) => (
              <Image
                key={`mobile-${i}`}
                src={safe(src)}
                alt={`mobile-${i}`}
                width={280}
                height={200}
                className="rounded-xl shadow-md border border-red-100 cursor-pointer object-cover w-[70%] sm:w-[360px] h-auto"
                onClick={() => setSelectedImg(safe(src))}
              />
            ))}
          </motion.div>

          {/* Desktop: two rows */}
          <div className="hidden sm:flex flex-col gap-6">
            {/* Row 1 */}
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              {[...images, ...images].map((src, i) => (
                <Image
                  key={`row1-${i}`}
                  src={safe(src)}
                  alt={`row1-${i}`}
                  width={360}
                  height={240}
                  className="rounded-xl shadow-md border border-red-100 cursor-pointer object-cover"
                  onClick={() => setSelectedImg(safe(src))}
                />
              ))}
            </motion.div>

            {/* Row 2 */}
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...images, ...images].map((src, i) => (
                <Image
                  key={`row2-${i}`}
                  src={safe(src)}
                  alt={`row2-${i}`}
                  width={360}
                  height={240}
                  className="rounded-xl shadow-md border border-red-100 cursor-pointer object-cover"
                  onClick={() => setSelectedImg(safe(src))}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Zoomable modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-3">
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
