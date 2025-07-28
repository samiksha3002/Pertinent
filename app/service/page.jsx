import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReusableServicesSection from "../../components/ReusableServicesSection";
import PageBanner from "../../components/PageBanner";
import service from "../../components/WhatWeServe"; // Assuming you have a service component
import WhatWeServe from "../../components/WhatWeServe";
import Preloader from "../../components/Preloader";

const Service = () => {
  return (
    <div className="font-sans">
      <Preloader />
      <Header />
      <PageBanner
        title="Services"
        description="We offer end-to-end construction solutions including residential, commercial, and industrial projects. From planning to execution, our civil-engineer-led team ensures quality, safety, and on-time delivery in every build."
        backgroundImage="/pertinent6.jpg" // ✅ Image in public folder
      />
      <ReusableServicesSection />
      <WhatWeServe />
      <Footer />
    </div>
  );
};

export default Service;
