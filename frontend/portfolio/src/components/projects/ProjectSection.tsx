"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useBreakpoint } from "@/hooks/useBreakpoint";

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

const ProjectSection = (props: { project: ProjectObject; index: string }) => {
  const slideshowDimension = 5000;
  const stackImgs: React.JSX.Element[] = [];
  const slideshowImgs: React.JSX.Element[] = [];
  const { isMd } = useBreakpoint("md");
  const { isLg } = useBreakpoint("lg");
  const { theme } = useTheme();

  let buttonSize = !isMd && !isLg ? 30 : 50;

  const controlAnimation = () => {
    const element = document.getElementById(`${props.index}`);

    if (element) {
      element.style.animationPlayState =
        element.style.animationPlayState === "paused" ? "running" : "paused";

      const icon =
        element.style.animationPlayState === "paused"
          ? document.getElementById(`pause${props.index}`)
          : document.getElementById(`play${props.index}`);

      if (icon) {
        icon.classList.remove("hidden");
        icon.classList.add("animate-ping-slow");
        icon.addEventListener("animationend", () => {
          icon.classList.add("hidden");
        });
      }
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
    <div className="flex flex-col items-center pb-10">
      <div className="flex sm:text-2xl lg:text-3xl items-center [&>*]:mx-2 mb-5">
        <div className="font-medium text-base sm:text-2xl md:text-3xl">
          {props.project.title}
        </div>
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
      <div
        className="overflow-hidden rounded shadow-2xl flex items-center justify-center"
        onClick={controlAnimation}
      >
        {theme === "light" ? (
          <>
            <div className="absolute z-50">
              <Image
                id={`pause${props.index}`}
                className="bg-orange-500 rounded-full opacity-80 hidden"
                src="/slideshow/pause.svg"
                width={buttonSize}
                height={buttonSize}
                alt="pause"
              ></Image>
            </div>
            <div className="absolute z-50">
              <Image
                id={`play${props.index}`}
                className="bg-orange-500 rounded-full opacity-80 hidden"
                src="/slideshow/play-arrow.svg"
                width={buttonSize}
                height={buttonSize}
                alt="pause"
              ></Image>
            </div>
          </>
        ) : (
          <>
            <div className="absolute z-50">
              <Image
                id={`pause${props.index}`}
                className="bg-blue-500 rounded-full opacity-80 hidden"
                src="/slideshow/pause.svg"
                width={buttonSize}
                height={buttonSize}
                alt="pause"
              ></Image>
            </div>
            <div className="absolute z-50">
              <Image
                id={`play${props.index}`}
                className="bg-blue-500 rounded-full opacity-80 hidden"
                src="/slideshow/play-arrow.svg"
                width={buttonSize}
                height={buttonSize}
                alt="pause"
              ></Image>
            </div>
          </>
        )}

        <div id={`${props.index}`} className="block__slideshow">
          {getSlideshowImages()}
        </div>
      </div>
      <div>
        <p id="desc" className="my-5 text-justify">
          {props.project.description}
        </p>
      </div>
      <div className="font-bold">Created with...</div>
      <div className="flex flex-wrap [&>*]:mx-4 [&>*]:mt-4">
        {getTechStackImgs()}
      </div>
    </div>
  );
};

export default ProjectSection;
