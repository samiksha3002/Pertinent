import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import OurJourney from "../../components/OurJourney";
import MissionVisionValues from "../../components/MissionVisionValues";
import Preloader from "../../components/Preloader";

const about = () => {
  return (
    <div className="font-sans">
      <Preloader />
      <Header />
      <PageBanner
        title="About Us"
        description="We offer end-to-end construction solutions including residential, commercial, and industrial projects. From planning to execution, our civil-engineer-led team ensures quality, safety, and on-time delivery in every build."
        backgroundImage="/pertinent5.jpg" // ✅ Image in public folder
      />
      <OurJourney />
      <MissionVisionValues />
      <Footer />
    </div>
  );
};

export default about;
