"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReusableServicesSection from "../../components/ReusableServicesSection";
import PageBanner from "../../components/PageBanner";
// Assuming you have a service component
import WhatWeServe from "../../components/WhatWeServe";
import Preloader from "../../components/Preloader";

import ProcessFlow from "../../components/ProcessFlow";
// Assuming you have a services details component

const Service = () => {
  return (
    <div className="font-sans">
      <Header />
      <PageBanner
        title="Services"
        description="We offer end-to-end construction solutions including residential, commercial, and industrial projects. From planning to execution, our civil-engineer-led team ensures quality, safety, and on-time delivery in every build."
        backgroundImage="/pertinent6.jpg" // ✅ Image in public folder
      />

      <ReusableServicesSection />

      <WhatWeServe />
      <ProcessFlow />

      <Footer />
    </div>
  );
};

export default Service;
