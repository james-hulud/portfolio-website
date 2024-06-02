import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center pt-10">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden w-64">
          <Image
            className="object-contain shadow-2xl"
            src="/me.jpg"
            width={300}
            height={300}
            alt="me"
          />
        </div>
        <div>
          <h3 className="pt-2 font-medium shimmer">@James</h3>
        </div>
      </div>
      <div className="pt-10 md:pt-0 lg:pt-0 xl:pl-10">
        <p className="text-center md:text-justify lg:text-justify p-0 m-0">
          Hey! &#x1F44B;
        </p>
        <p className="text-justify p-0 m-0">
          <br />
          I&apos;m James, a Computer Science student from Cardiff, Wales. I love
          building websites and any other software projects I can think of,
          alongside working out and playing (too many) video games.
          <br />
          <br />I made this website to showcase my projects and skills in
          software development. Here you will find what I have made (including
          what I made it with), what I am currently making, and any thoughts of
          mine, you'll find these on my{" "}
          <Link href="/blog" className="themed-element font-medium">
            blog
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
