"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TechStackBanner = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex flex-col items-center pt-10 pb-4">
      <div className="font-bold">Tech Stack</div>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row">
        <span className="flex [&>*]:mx-4 [&>*]:mt-4 [&>*]:object-contain">
          <Image
            src="/techstack/React-icon.svg"
            width={50}
            height={50}
            alt="react-icon"
          />
          <Image
            src="/techstack/Typescript_logo_2020.svg"
            width={50}
            height={50}
            alt="react-icon"
          />
          <Image
            src="/techstack/Tailwind_CSS_Logo.svg"
            width={50}
            height={50}
            alt="react-icon"
          />
        </span>
        <span className="flex [&>*]:mx-4 [&>*]:mt-4 [&>*]:object-contain">
          <Image
            src="/techstack/Postgresql_elephant.svg"
            width={50}
            height={50}
            alt="react-icon"
          />
          {theme === "light" ? (
            <Image
              src="/techstack/nextjs.svg"
              width={50}
              height={50}
              alt="react-icon"
            />
          ) : (
            <Image
              src="/techstack/nextjs white.svg"
              width={50}
              height={50}
              alt="react-icon"
            />
          )}
          {theme === "light" ? (
            <Image
              src="/techstack/flask.svg"
              width={50}
              height={50}
              alt="react-icon"
            />
          ) : (
            <Image
              src="/techstack/flask white.svg"
              width={50}
              height={50}
              alt="react-icon"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default TechStackBanner;
