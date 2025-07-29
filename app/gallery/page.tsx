import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import GalleryImg from "../../components/GalleryImg";
import Preloader from "../../components/Preloader";

// Assuming you have an OurJourney component

const gallery = () => {
  return (
    <div className="font-sans">
      <Preloader />
      <Header />
      <PageBanner
        title="Gallery"
        description="Explore our gallery to witness the craftsmanship and quality behind every project we’ve delivered.
From residential to industrial structures, each image reflects our engineering precision and commitment to excellence."
        backgroundImage="/pertinent9.jpg" // ✅ Image in public folder
      />

      <GalleryImg />
      <Footer />
    </div>
  );
};

export default gallery;
