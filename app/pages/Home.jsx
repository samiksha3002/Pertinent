// src/pages/Home.jsx
import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceSection from "../../components/ServiceSection";
import Testimonials from "../../components/Testimonials";
import ProjectStats from "../../components/ProjectStats";

const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutUs />
      <ServiceSection />
      <whyChooseUs />
      <ProjectStats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
