const url = "http://james-mbp:3001/";

// "http://localhost:3001/" || 

export const fetchProjects = async () => {
  try {
    // http://james-mbp:3001/projects
    // http://localhost:3001/projects etc
    const response = await fetch(`${url}projects`);
    if (!response.ok) {
      throw new Error("Error getting response");
    }
    const projectsData = await response.json();
    return projectsData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLastProject = async () => {
  try {
    const response = await fetch(`${url}lastproject`);
    if (!response.ok) {
      throw new Error("Error getting response");
    }
    const lastProjectData = await response.json();
    return lastProjectData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCollaborations = async () => {
  try {
    const response = await fetch(`${url}collaborations`);
    if (!response.ok) {
      throw new Error("Error getting response");
    }
    const collaborationsData = await response.json();
    return collaborationsData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpdates = async () => {
  try {
    const response = await fetch(`${url}updates`);
    if (!response.ok) {
      throw new Error("Error getting response");
    }
    const updatesData = await response.json();
    return updatesData;
  } catch (error) {
    console.log(error);
  }
};
