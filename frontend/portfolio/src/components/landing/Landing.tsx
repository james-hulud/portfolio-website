"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Landing = () => {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // const colour = theme === "light" ? "bg-gray-100" : "bg-gray-800";
  // const borderColour =
  //   theme === "light" ? "border-gray-200" : "border-none";

  return (
    <div className="h-[50vh] flex justify-center items-center font-extrabold text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7.5xl text-center text-wrap w-100">
      <div className={`rounded-lg p-2`}>
        <div className="shimmer">Fullstack Developer</div>
      </div>
    </div>
  );
};

export default Landing;
