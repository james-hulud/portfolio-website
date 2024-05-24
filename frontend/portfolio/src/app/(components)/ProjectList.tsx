import { prisma } from "@/lib/prisma";
import ProjectSection from "./ProjectSection";

const ProjectList = async () => {
  const projects = await prisma.project.findMany({
    where: {
      title: {
        not: "Example Project",
      },
    },
  });
  const collaborations = await prisma.collaboration.findMany({
    where: {
      title: {
        not: "Example collaboration",
      },
    },
  });

  return (
    <div className="flex flex-col m-10 sm:mx-10 lg:mx-60 items-center">
      <div className="flex flex-col items-center pb-10">
        <div className="font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
          Personal Projects
        </div>
        {projects.map((project, index) => (
          <ProjectSection key={index} project={project} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
          Collaborations
        </div>
        {collaborations.map((project, index) => (
          <ProjectSection key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
