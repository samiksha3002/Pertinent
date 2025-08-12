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
import OurApproach from "../../components/OurApproach";
import PertinentAdvantages from "../../components/PertinentAdvantages";

const Home = () => {
  return (
    <div className="font-sans">
      <Preloader />
      <Header />
      <HeroSection />
      <AboutUs />
      <ServiceSection />
      <whyChooseUs />
      <OurApproach />

      {/* Assuming PertinentMethods is a component that lists methods */}
      <PertinentAdvantages />
      <ProjectStats />
      <CountriesWeserve />
      <Testimonials />
      <LandscapeImageSection
        imageSrc="/pertinent3.jpg"
        altText="Construction Landscape"
      />
      <Footer />
    </div>
  );
};

export default Home;
