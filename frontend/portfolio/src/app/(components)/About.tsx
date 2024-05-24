import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex m-10 sm:flex-col lg:mx-60 lg:flex-row items-center">
      <div className="flex flex-col items-center ">
        <div className="rounded-full overflow-hidden">
          <Image
            className="object-contain shadow-2xl"
            src="/me.jpg"
            width={300}
            height={50}
            alt="me"
          />
        </div>
        <div>
          <h3 className="pt-2">@James</h3>
        </div>
      </div>

      <div className="flex flex-grow justify-center md:mx-10 text-justify w-2/3">
        <p>
          Hi there! &#x1F44B;
          <br />
          <br />
          I&apos;m James, a Computer Science student from Cardiff, Wales. I love
          building websites and any other software projects I can think of,
          alongside doing sports and playing (too many) video games.
          <br />
          <br />I made this website to showcase my projects and skills in
          software development. Here you will find what I have made (including
          what I made it with), what I am currently making, and thoughts of mine
          which I thought were worth posting out into the void that is the
          internet, you'll find these on my{" "}
          <Link href="/blog" className="text-blue-500 font-bold">
            blog
          </Link>
          .<br />
          <br />
          Starting off with this website; it was made with NextJS, TypeScript,
          Tailwind CSS, and PostgreSQL.
        </p>
      </div>
    </div>
  );
};

export default About;
