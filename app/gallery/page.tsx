import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Controls from "../../components/Controls";
import PageBanner from "../../components/PageBanner";
import GalleryImg from "../../components/GalleryImg";


// Assuming you have an OurJourney component

const gallery = () => {
  return (
    <div className="font-sans">
      <Header />
      <PageBanner
        title="Projects"
        description="At Pertinent, we specialize in delivering high-quality construction solutions that combine precision, innovation, and durability. Our projects reflect our commitment to excellence, from meticulous planning to flawless execution. Explore our work to see how Pertinent brings visions to life, creating structures that stand the test of time."
        backgroundImage="/pertinent9.jpg" // ✅ Image in public folder
      />

      <GalleryImg />
      <Controls />
     
      <Footer />
    </div>
  );
};

export default gallery;
