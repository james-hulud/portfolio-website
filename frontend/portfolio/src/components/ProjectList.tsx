"use client";

import ProjectSection from "./ProjectSection";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { fetchProjects, fetchCollaborations } from "@/api/api";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [collaborations, setCollaborations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProjects(await fetchProjects());
        setCollaborations(await fetchCollaborations());
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

  return (
    <div className="flex flex-col pt-10 items-center">
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl pb-10">
          Projects
        </div>
        {projects.map((project, index) => (
          <ProjectSection key={index} index={`proj${index}`} project={project} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl py-10">
          Collaborations
        </div>
        {collaborations.map((project, index) => (
          <ProjectSection key={index} index={`col${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
