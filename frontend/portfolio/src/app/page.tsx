import React from "react";
import About from "./(components)/About";
import PortfolioCarousel from "./(components)/PortfolioCarousel";
import TechStackBanner from "./(components)/TechStackBanner";
import ProjectList from "./(components)/ProjectList";

const app = () => {
  return (
    <div>
      <About />
      <TechStackBanner />
      <ProjectList />
    </div>
  );
};

export default app;
