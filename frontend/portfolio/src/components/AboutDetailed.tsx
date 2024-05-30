import React from "react";

const AboutDetailed = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center text-justify">
        <p>
          I&apos;m James, a Computer Science student and aspiring software
          engineer from Cardiff, Wales, who specialises in web development.
          <br />
          <br />
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-xl">Specialisation</div>
        <ul className="flex flex-col items-center">
          <li>Fullstack development</li>
          <li>Web development</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-xl">Languages</div>
        <ul className="flex flex-col items-center">
          <li>TypeScript</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-xl">Backend</div>
        <ul className="flex flex-col items-center">
          <li>Express.js</li>
          <li>PostgreSQL</li>
          <li>SQLite</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-xl">Frontend</div>
        <ul className="flex flex-col items-center">
          <li>Next.js</li>
          <li>React.js</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-xl">Other</div>
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
