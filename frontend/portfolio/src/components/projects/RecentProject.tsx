"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Loading from "../data/Loading";
import { useEffect, useState } from "react";
import { fetchLastProject } from "@/api/api";
import { ProjectObject } from "./ProjectSection";

type TechStackDict = {
  [key: string]: string;
};

const RecentProject = () => {
  const slideshowDimension = 5000;
  const stackImgs: React.JSX.Element[] = [];
  const slideshowImgs: React.JSX.Element[] = [];
  const { isMd } = useBreakpoint("md");
  const { isLg } = useBreakpoint("lg");
  const { theme } = useTheme();
  const [project, setProject] = useState<ProjectObject>({} as ProjectObject);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLastProject();
        console.log(data);
        setProject(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  let buttonSize = !isMd && !isLg ? 30 : 50;

  const controlAnimation = () => {
    const element = document.getElementById(`${project.id}`);

    if (element) {
      element.style.animationPlayState =
        element.style.animationPlayState === "paused" ? "running" : "paused";

      const icon =
        element.style.animationPlayState === "paused"
          ? document.getElementById(`pause`)
          : document.getElementById(`play`);

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
    for (let key in project.stack) {
      stackImgs.push(
        <Image
          key={key}
          src={`/techstack/${techStack[project.stack[key]]}`}
          width={40}
          height={40}
          alt={key}
        />
      );
    }
    return stackImgs;
  };

  const getSlideshowImages = () => {
    for (let key in project.slideshowDirs) {
      slideshowImgs.push(
        <Image
          key={key}
          src={`/slideshow/${project.slideshowDirs[key]}`}
          width={slideshowDimension}
          height={slideshowDimension}
          alt={key}
        />
      );
    }
    return slideshowImgs;
  };

  return (
    <div className="pb-20">
      <div className="text-center sm:text-start font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-5xl mb-10">
        Recent work
      </div>
      <div className="flex flex-col items-center">
        <div
          className="overflow-hidden rounded shadow-2xl flex items-center justify-center"
          onClick={controlAnimation}
        >
          {theme === "light" ? (
            <>
              <div className="absolute z-50">
                <Image
                  id={`pause`}
                  className="bg-orange-500 rounded-full opacity-80 hidden"
                  src="/slideshow/pause.svg"
                  width={buttonSize}
                  height={buttonSize}
                  alt="pause"
                ></Image>
              </div>
              <div className="absolute z-50">
                <Image
                  id={`play`}
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
                  id={`pause`}
                  className="bg-blue-500 rounded-full opacity-80 hidden"
                  src="/slideshow/pause.svg"
                  width={buttonSize}
                  height={buttonSize}
                  alt="pause"
                ></Image>
              </div>
              <div className="absolute z-50">
                <Image
                  id={`play`}
                  className="bg-blue-500 rounded-full opacity-80 hidden"
                  src="/slideshow/play-arrow.svg"
                  width={buttonSize}
                  height={buttonSize}
                  alt="pause"
                ></Image>
              </div>
            </>
          )}

          <div id={`${project.id}`} className="block__slideshow">
            {getSlideshowImages()}
          </div>
        </div>
        <div>
          <p id="desc" className="my-5 text-center sm:text-justify">
            {project.description}
          </p>
        </div>
        <div className="font-bold">Created with...</div>
        <div className="flex flex-wrap [&>*]:mx-4 [&>*]:mt-4">
          {getTechStackImgs()}
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
