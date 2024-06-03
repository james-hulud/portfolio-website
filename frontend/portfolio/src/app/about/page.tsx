import AboutDetailed from "@/components/about/AboutDetailed";
import React from "react";
import About from "@/components/about/About";
import CurrentActivity from "@/components/about/CurrentActivity";

const app = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-80">
      <About />
      <CurrentActivity />
      <AboutDetailed />
    </div>
  );
};

export default app;
