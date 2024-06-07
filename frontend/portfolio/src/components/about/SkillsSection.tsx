"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const SkillsSection = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { isSm } = useBreakpoint("sm");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const image =
    resolvedTheme === "light" ? "code-tech-dev.svg" : "code-tech-dev white.svg";
  const imgSize = isSm ? 150 : 100;

  return (
    <div className="mt-20 mb-10">
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-5xl">
          My skills
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center w-full">
        <Image
          src={`/techstack/${image}`}
          className="absolute opacity-25"
          width={imgSize}
          height={imgSize}
          alt="dev"
        />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full grid grid-flow-row-dense grid-cols-2 gap-y-12 md:gap-y-20">
            <div>
              <div className="sm:float-left flex flex-col items-center sm:w-[50%]">
                <div className="font-extrabold text-xl sm:text-2xl themed-element">
                  Specialisation
                </div>
                <ul className="flex flex-col items-center">
                  <li className="text-nowrap">Web development</li>
                  <li>Fullstack</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="sm:float-right flex flex-col items-center sm:w-[50%]">
                <div className="font-extrabold text-xl sm:text-2xl themed-element">
                  Languages
                </div>
                <ul className="flex flex-col items-center">
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="sm:float-left flex flex-col items-center sm:w-[50%]">
                <div className="font-extrabold text-xl sm:text-2xl themed-element">
                  Backend
                </div>
                <ul className="flex flex-col items-center">
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>SQLite</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="sm:float-right flex flex-col items-center sm:w-[50%]">
                <div className="font-extrabold text-xl sm:text-2xl themed-element">
                  Frontend
                </div>
                <ul className="flex flex-col items-center">
                  <li>Next.js</li>
                  <li>React.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-2xl themed-element">Other</div>
        <ul className="flex flex-col items-center">
          <li>REST APIs</li>
          <li>Tailwind</li>
          <li>Flask</li>
          <li>Firebase</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
