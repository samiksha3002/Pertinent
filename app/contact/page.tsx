import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageBanner from "../../components/PageBanner";
import ContactSection from "../../components/ContactSection";
import Preloader from "../../components/Preloader";

const contact = () => {
  return (
    <div className="font-sans">
      <Header />
      <PageBanner
        title="Contact  Us"
        description="Get in touch with our expert  team for tailored solutions.
We’re just a message away to help you build with trust, quality, and precision."
        backgroundImage="/pertinent8.jpg" // ✅ Image in public folder
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default contact;
