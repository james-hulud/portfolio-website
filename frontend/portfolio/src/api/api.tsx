export const fetchProjects = async () => {
  try {
    const response = await fetch("http://localhost:3001/projects");
    if (!response.ok) {
      throw new Error("Error getting response");
    }
    const projectsData = await response.json();
    return projectsData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCollaborations = async () => {
  try {
    const response = await fetch("http://localhost:3001/collaborations");
    if (!response.ok) {
      throw new Error("Error getting response");
    }
    const collaborationsData = await response.json();
    return collaborationsData;
  } catch (error) {
    console.log(error);
  }
};
