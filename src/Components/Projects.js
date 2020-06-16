import React from 'react';
import ProjectItem from './ProjectItem';
import projects from "../data/projects";

function Projects(props) {
  
  return (
    <div className="projects">
      {projects.map((item, index) => (
        <div className="project_item" key={index}>
          <ProjectItem
            project={item}
            index={index}
          />
        </div>
      ))}        
    </div>
  )
}
      
export default Projects;