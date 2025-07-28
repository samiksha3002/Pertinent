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
        description="We offer end-to-end construction solutions including residential, commercial, and industrial projects. From planning to execution, our civil-engineer-led team ensures quality, safety, and on-time delivery in every build."
        backgroundImage="/pertinent9.jpg" // ✅ Image in public folder
      />

      <GalleryImg />
      <Footer />
    </div>
  );
};

export default gallery;
