import React from "react";
import About from "../components/About";
import TechStackBanner from "../components/TechStackBanner";
import ProjectList from "../components/ProjectList";

const app = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-60">
      <About />
      <TechStackBanner />
      <ProjectList />
    </div>
  );
};

export default app;
