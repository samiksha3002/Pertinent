import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import ContactSection from "../../components/ContactSection";
import Preloader from "../../components/Preloader";

const contact = () => {
  return (
    <div className="font-sans">
      <Preloader />
      <Header />
      <PageBanner
        title="Contact  Us"
        description="We offer end-to-end construction solutions including residential, commercial, and industrial projects. From planning to execution, our civil-engineer-led team ensures quality, safety, and on-time delivery in every build."
        backgroundImage="/pertinent8.jpg" // ✅ Image in public folder
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default contact;
