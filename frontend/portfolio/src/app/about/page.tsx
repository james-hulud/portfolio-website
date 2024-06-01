import AboutDetailed from "@/components/about/AboutDetailed";
import React from "react";
import LinksBanner from "@/components/about/LinksBanner";
import About from "@/components/about/About";

const app = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-60">
      <About />
      <LinksBanner />
      <AboutDetailed />
    </div>
  );
};

export default app;
