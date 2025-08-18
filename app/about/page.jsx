import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import OurJourney from "../../components/OurJourney";
import OurApproach from "../../components/OurApproach"
import MissionVisionValues from "../../components/MissionVisionValues";


const about = () => {
  return (
    <div className="font-sans">
      <Header />
      <PageBanner
        title="About Us"
        description="At Pertinent Construction Services, we’re not just a service provider—we’re an extension of your team. We partner with construction firms across the globe to support them throughout the entire project lifecycle, from preconstruction planning and bidding to execution, closeout, and beyond. "
        backgroundImage="/pertinent5.jpg" // ✅ Image in public folder
      />
      <OurJourney />
      <OurApproach />
      <MissionVisionValues />
      <Footer />
    </div>
  );
};

export default about;
