import React from "react";
import BoostSection from "./Homepage/BoostSection";
import Footer from "./Homepage/Footer";
import HeroSection from "./Homepage/HeroSection";
import Navbar from "./Homepage/Navbar";
import StatsSection from "./Homepage/StatsSection";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BoostSection />
      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
