import React from "react";
import Image from "next/image";

const AboutDetailed = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="absolute">
          <Image
            src="/techstack/code-tech-dev.svg"
            width={100}
            height={100}
            alt="dev"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-56 gap-y-28">
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
