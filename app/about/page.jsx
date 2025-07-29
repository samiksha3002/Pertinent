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
        description="We are a civil engineer-led construction company delivering excellence in infrastructure and residential projects.
Our commitment to innovation, structural integrity, and timely delivery sets us apart in the construction industry."
        backgroundImage="/pertinent5.jpg" // ✅ Image in public folder
      />
      <OurJourney />
      <MissionVisionValues />
      <Footer />
    </div>
  );
};

export default about;
