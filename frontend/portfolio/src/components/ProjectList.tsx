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
