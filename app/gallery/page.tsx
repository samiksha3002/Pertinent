import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Controls from "../../components/controls"
import PageBanner from "../../components/PageBanner";
import GalleryImg from "../../components/GalleryImg";


// Assuming you have an OurJourney component

const gallery = () => {
  return (
    <div className="font-sans">
      <Header />
      <PageBanner
        title="Projects"
        description="Explore our gallery to witness the craftsmanship and quality behind every project we’ve delivered.
From residential to industrial structures, each image reflects our engineering precision and commitment to excellence."
        backgroundImage="/pertinent9.jpg" // ✅ Image in public folder
      />

      <GalleryImg />
      <Controls />
     
      <Footer />
    </div>
  );
};

export default gallery;
