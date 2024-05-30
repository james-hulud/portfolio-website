import AboutDetailed from "@/components/AboutDetailed";
import React from "react";
import SocialsBanner from "@/components/SocialsBanner";

const app = () => {
  return (
    <div className="mx-10 sm:mx-20 lg:mx-40 xl:mx-60">
      <SocialsBanner />
      <AboutDetailed />
    </div>
  );
};

export default app;
