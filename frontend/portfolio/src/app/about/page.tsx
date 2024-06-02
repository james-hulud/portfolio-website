import AboutDetailed from "@/components/about/AboutDetailed";
import React from "react";
import About from "@/components/about/About";

const app = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-60">
      <About />
      <AboutDetailed />
    </div>
  );
};

export default app;
