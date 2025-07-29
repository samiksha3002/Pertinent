// src/pages/Home.jsx
import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceSection from "../../components/ServiceSection";
import Testimonials from "../../components/Testimonials";
import ProjectStats from "../../components/ProjectStats";
import LandscapeImageSection from "../../components/LandscapeImageSection";
import Preloader from "../../components/Preloader";
import CountriesWeserve from "../../components/CountriesWeServe";

const Home = () => {
  return (
    <div className="font-sans">
      <Preloader />
      <Header />
      <HeroSection />
      <AboutUs />
      <ServiceSection />
      <whyChooseUs />
      <ProjectStats />
      <CountriesWeserve />
      <Testimonials />
      <LandscapeImageSection
        imageSrc="/pertinent3.jpg"
        altText="Construction Landscape"
        caption="Project: Residential High-Rise - Completed in 2024"
      />
      <Footer />
    </div>
  );
};

export default Home;
