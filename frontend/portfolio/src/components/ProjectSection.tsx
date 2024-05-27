"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export interface ProjectObject {
  id: number;
  title: string;
  slideshowDirs: string[];
  description: string;
  githubLink: string;
  stack: string[];
}

type TechStackDict = {
  [key: string]: string;
};

const ProjectSection = (props: { project: ProjectObject }) => {
  const slideshowDimension = 5000;
  const stackImgs: React.JSX.Element[] = [];
  const slideshowImgs: React.JSX.Element[] = [];
  const { theme } = useTheme();

  const pauseAnimation = () => {
    const element = document.getElementById("slideshow");
    if (element) {
      element.style.animationPlayState = "paused";
    }
  };
  const techStack: TechStackDict = {
    ["html"]: "file-type-html.svg",
    ["bootstrap"]: "bootstrap.svg",
    ["js"]: "javascript-js.svg",
    ["flask"]: theme === "light" ? "flask.svg" : "flask white.svg",
    ["python"]: "python.svg",
    ["postgresql"]: "",
    ["tailwind"]: "",
    ["nextjs"]: "",
  };

  const getTechStackImgs = () => {
    for (let key in props.project.stack) {
      stackImgs.push(
        <Image
          key={key}
          src={`/techstack/${techStack[props.project.stack[key]]}`}
          width={40}
          height={40}
          alt={key}
        />
      );
    }
    return stackImgs;
  };

  const getSlideshowImages = () => {
    for (let key in props.project.slideshowDirs) {
      slideshowImgs.push(
        <Image
          key={key}
          src={`/slideshow/${props.project.slideshowDirs[key]}`}
          width={slideshowDimension}
          height={slideshowDimension}
          alt={key}
        />
      );
    }
    return slideshowImgs;
  };

  return (
    <div className="flex flex-col items-center [&>*]:mt-3 [&>*]:text-justify">
      <div className="flex sm:text-2xl lg:text-3xl items-center [&>*]:mx-2">
        <div>{props.project.title}</div>
        <Link href={props.project.githubLink}>
          {theme === "light" ? (
            <Image
              className="transition-opacity duration-200 hover:opacity-50"
              src="/external/github.svg"
              width={40}
              height={40}
              alt="github_logo"
            />
          ) : (
            <Image
              className="transition-opacity duration-200 hover:opacity-50"
              src="/external/github white.svg"
              width={40}
              height={40}
              alt="github_logo"
            />
          )}
        </Link>
      </div>
      <div className="overflow-hidden rounded shadow-2xl">
        <div id="slideshow" className="block__slideshow">
          {getSlideshowImages()}
        </div>
      </div>
      <button onClick={pauseAnimation}>Hello</button>
      <div>{props.project.description}</div>
      <div className="font-bold">Created with...</div>
      <div className="flex flex-wrap [&>*]:m-4">{getTechStackImgs()}</div>
    </div>
  );
};

export default ProjectSection;
