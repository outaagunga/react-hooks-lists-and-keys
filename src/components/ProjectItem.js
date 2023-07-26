import React from "react";

function ProjectItem({ technologies }) {
  const { name, about, technologies: techs } = technologies;
  const tech = techs.map((tcs) => {
    return <span>{tcs}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
        {techs.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
