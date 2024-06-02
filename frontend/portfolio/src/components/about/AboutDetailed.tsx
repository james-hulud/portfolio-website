"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AboutDetailed = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  const { theme } = useTheme();

  const image =
    theme === "light" ? "code-tech-dev.svg" : "code-tech-dev white.svg";

  return (
    <div className="pt-20 pb-10">
      <div className="flex flex-col justify-center items-center">
        <div className="absolute">
          <Image
            src={`/techstack/${image}`}
            width={100}
            height={100}
            alt="dev"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-28 gap-y-14 sm:gap-x-56 sm:gap-y-28">
          <div className="flex flex-col items-center">
            <div className="font-extrabold text-2xl themed-element">
              Specialisation
            </div>
            <ul className="flex flex-col items-center">
              <li>Web development</li>
              <li>Fullstack</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-extrabold text-2xl themed-element">
              Languages
            </div>
            <ul className="flex flex-col items-center">
              <li>TypeScript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-extrabold text-2xl themed-element">
              Backend
            </div>
            <ul className="flex flex-col items-center">
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-extrabold text-2xl themed-element">
              Frontend
            </div>
            <ul className="flex flex-col items-center">
              <li>Next.js</li>
              <li>React.js</li>
            </ul>
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

export default AboutDetailed;
