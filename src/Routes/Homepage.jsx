import React from "react";
import HeroSection from "./Homepage/HeroSection";
import Navbar from "./Homepage/Navbar";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
    </React.Fragment>
  );
};

export default Homepage;
