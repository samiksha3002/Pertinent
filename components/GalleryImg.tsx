"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function GalleryImg() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

 const row1Images = [
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527036/S6.8_-_ENLARGED_FRAMING_PLANS_z7acu8.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527035/S6.1_-_FLOOR_FRAMING_PLAN_-SECTION_5_vnxhrv.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527034/S2.5_-_FOUNDATION_PLAN_-SECTION_1_fj65bt.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527034/PS1.1_-_PLUMBING_SEVEN_HILLS_SITE_PLAN_tovjfu.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527025/PL5.1_-_PLUMBING_KITCHEN_PLAN_y1hqgd.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527025/PL1.1_-_PLUMBING_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_cmunxz.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527024/MH6.1_-_MECHANICAL_ROOF_PLAN_yvw1zp.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527024/C1.38_-_PHASE_1_EROSION_CONTROL_PLAN_mu4xeq.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527024/MH5.1_-_MECHANICAL_KITCHEN_FLOOR_PLAN_ormvma.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/MH1.1_-_MECHANICAL_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_mnoxfk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/EL1.2_-_LIGHTING_FLOOR_PLAN_-SECTION_2_-FIRST_FLOOR_mx3ekk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/G4.1_-_CODE_ANALYSIS_TORNADO_SHELTER_niabu0.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/G4.1_-_CODE_ANALYSIS_TORNADO_SHELTER_niabu0.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/A7-1_-_ROOF_PLAN_ejqyz8.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/A3.1_-_ALUMINUM_FRAME_DOOR_SCHEDULE_STOREFRONT_CONFIGURATIONS_vu0vzj.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527013/A4.3_-_FINISH_PLAN_-SECTION_3_khuowd.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/EL1.2_-_LIGHTING_FLOOR_PLAN_-SECTION_2_-FIRST_FLOOR_mx3ekk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/EL1.2_-_LIGHTING_FLOOR_PLAN_-SECTION_2_-FIRST_FLOOR_mx3ekk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527022/ET1.1_-_ELECTRICAL_COMMUNICATIONS_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_pdttho.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527022/C1.71_-_PHASE_2_OFFSITE_SITE_DCP_PAVING_kmfiqt.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527021/C1.70_-_OFFSITE_DEMOLITION_PLAN_NOTES_qgfwju.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527020/A1.3_-_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_uo1vsn.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.26_-_PHASE_1_STORM_DRAIN_PLAN_-_SECTION_C_u1zjc6.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.27_-_PHASE_1_STORM_DRAIN_INSETS_qtwjx9.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.31_-_PHASE_1_WATER_SANITARY_SEWER_PLAN_-_SECTION_C_nbu8o4.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.11_-_PHASE_1_SITE_PLAN_-SECTION_C_k48lq3.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527015/A5.1_-_EXTERIOR_ELEVATIONS_nxt00k.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/C1.07_-_PHASE_1_DEMOLITION_PLAN_-_SECTION_C_t8hkfw.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/C1.07_-_PHASE_1_DEMOLITION_PLAN_-_SECTION_C_t8hkfw.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/A2.3_-_REFLECTED_CEILING_PLAN_-SECTION_1_r3xw2j.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527036/S6.8_-_ENLARGED_FRAMING_PLANS_z7acu8.jpg",
  
];


  const row2Images = [
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/EL1.2_-_LIGHTING_FLOOR_PLAN_-SECTION_2_-FIRST_FLOOR_mx3ekk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/EL1.2_-_LIGHTING_FLOOR_PLAN_-SECTION_2_-FIRST_FLOOR_mx3ekk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527022/ET1.1_-_ELECTRICAL_COMMUNICATIONS_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_pdttho.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527022/C1.71_-_PHASE_2_OFFSITE_SITE_DCP_PAVING_kmfiqt.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527021/C1.70_-_OFFSITE_DEMOLITION_PLAN_NOTES_qgfwju.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527020/A1.3_-_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_uo1vsn.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.26_-_PHASE_1_STORM_DRAIN_PLAN_-_SECTION_C_u1zjc6.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.27_-_PHASE_1_STORM_DRAIN_INSETS_qtwjx9.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.31_-_PHASE_1_WATER_SANITARY_SEWER_PLAN_-_SECTION_C_nbu8o4.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527019/C1.11_-_PHASE_1_SITE_PLAN_-SECTION_C_k48lq3.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527015/A5.1_-_EXTERIOR_ELEVATIONS_nxt00k.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/C1.07_-_PHASE_1_DEMOLITION_PLAN_-_SECTION_C_t8hkfw.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/C1.07_-_PHASE_1_DEMOLITION_PLAN_-_SECTION_C_t8hkfw.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/A2.3_-_REFLECTED_CEILING_PLAN_-SECTION_1_r3xw2j.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527036/S6.8_-_ENLARGED_FRAMING_PLANS_z7acu8.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527035/S6.1_-_FLOOR_FRAMING_PLAN_-SECTION_5_vnxhrv.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527034/S2.5_-_FOUNDATION_PLAN_-SECTION_1_fj65bt.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527034/PS1.1_-_PLUMBING_SEVEN_HILLS_SITE_PLAN_tovjfu.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527025/PL5.1_-_PLUMBING_KITCHEN_PLAN_y1hqgd.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527025/PL1.1_-_PLUMBING_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_cmunxz.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527024/MH6.1_-_MECHANICAL_ROOF_PLAN_yvw1zp.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527024/C1.38_-_PHASE_1_EROSION_CONTROL_PLAN_mu4xeq.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527024/MH5.1_-_MECHANICAL_KITCHEN_FLOOR_PLAN_ormvma.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/MH1.1_-_MECHANICAL_FLOOR_PLAN_-SECTION_1_-FIRST_FLOOR_mnoxfk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/EL1.2_-_LIGHTING_FLOOR_PLAN_-SECTION_2_-FIRST_FLOOR_mx3ekk.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/G4.1_-_CODE_ANALYSIS_TORNADO_SHELTER_niabu0.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527023/G4.1_-_CODE_ANALYSIS_TORNADO_SHELTER_niabu0.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/A7-1_-_ROOF_PLAN_ejqyz8.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527014/A3.1_-_ALUMINUM_FRAME_DOOR_SCHEDULE_STOREFRONT_CONFIGURATIONS_vu0vzj.jpg",
  "https://res.cloudinary.com/dpzomvltp/image/upload/v1755527013/A4.3_-_FINISH_PLAN_-SECTION_3_khuowd.jpg",

];

  return (
    <section className="w-full bg-white text-black py-10 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-10 sm:mb-12">
        Our <span className="text-red-600">Projects</span>
      </h2>

      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 sm:gap-8 items-stretch">
        {/* Left slim box */}
          <div className="bg-white border border-red-500 rounded-2xl shadow-sm px-5 py-6 sm:py-8 flex items-center justify-center">
    <h3 className="text-xl sm:text-3xl font-bold text-center leading-snug">
      Quantity Take Off <br />
      <span className="text-red-600">And Estimation</span>
    </h3>
  </div>  
        {/* Right scrolling gallery */}
        <div className="overflow-hidden flex flex-col gap-6">
          {/* Mobile: single row */}
          <div className="sm:hidden flex flex-col gap-4">
  {/* Row 1 */}
  <motion.div
    style={{ display: "flex", gap: "1rem" }}
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
  >
    {[...row1Images, ...row1Images].map((src, i) => (
      <img
        key={`mobile-row1-${i}`}
        src={src}
        alt={`mobile-row1-${i}`}
        className="rounded-lg shadow-md border border-red-100 cursor-pointer object-cover w-[220px] h-[150px]"
        onClick={() => setSelectedImg(src)}
      />
    ))}
  </motion.div>

  {/* Row 2 */}
  <motion.div
    style={{ display: "flex", gap: "1rem" }}
    animate={{ x: ["-50%", "0%"] }} // opposite direction for variety
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
  >
    {[...row2Images, ...row2Images].map((src, i) => (
      <img
        key={`mobile-row2-${i}`}
        src={src}
        alt={`mobile-row2-${i}`}
        className="rounded-lg shadow-md border border-red-100 cursor-pointer object-cover w-[220px] h-[150px]"
        onClick={() => setSelectedImg(src)}
      />
    ))}
  </motion.div>
</div>
       {/* Desktop: two rows */}
<div className="hidden sm:flex flex-col gap-6">
  {/* Row 1 */}
  <motion.div
    style={{ display: "flex", gap: "1.5rem" }}
    animate={{ x: ["0%", "-2000%"] }} // move full width
    transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
  >
    {[...row1Images, ...row1Images].map((src, i) => (
      <img
        key={`row1-${i}`}
        src={src}
        alt={`row1-${i}`}
        className="rounded-xl shadow-md border border-red-100 cursor-pointer object-cover w-[360px] h-[240px]"
        onClick={() => setSelectedImg(src)}
      />
    ))}
  </motion.div>

  {/* Row 2 */}
  <motion.div
    style={{ display: "flex", gap: "1.5rem" }}
    animate={{ x: ["0%", "-2000%"] }} // move full width
    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
  >
    {[...row2Images, ...row2Images].map((src, i) => (
      <img
        key={`row2-${i}`}
        src={src}
        alt={`row2-${i}`}
        className="rounded-xl shadow-md border border-red-100 cursor-pointer object-cover w-[360px] h-[240px]"
        onClick={() => setSelectedImg(src)}
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
              <img
                src={selectedImg}
                alt="Selected"
                className="rounded-xl shadow-2xl max-w-[95vw] max-h-[80vh] object-contain"
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      )}
    </section>
  );
}
