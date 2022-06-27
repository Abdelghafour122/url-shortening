import React from "react";
import HeroSection from "./Homepage/HeroSection";
import Navbar from "./Homepage/Navbar";
import StatsSection from "./Homepage/StatsSection";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <StatsSection />
    </React.Fragment>
  );
};

export default Homepage;
