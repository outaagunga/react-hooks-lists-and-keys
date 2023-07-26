import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItem = projects.map((prj) => {
    console.log(prj);
    return <ProjectItem technologies={prj} key={prj.id} />;
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItem}</div>
    </div>
  );
}

export default ProjectList;
