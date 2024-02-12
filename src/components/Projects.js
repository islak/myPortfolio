import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <h2 className="projects-heading">Projects</h2>
      <div className="project-item">
        <h3 className="project-title">Project 1</h3>
        <p className="project-description">A brief description of project 1.</p>
        <a href="#" className="view-project-link">View Project</a>
      </div>
      <div className="project-item">
        <h3 className="project-title">Project 2</h3>
        <p className="project-description">A brief description of project 2.</p>
        <a href="#" className="view-project-link">View Project</a>
      </div>
      {/* Add more project items as needed */}
    </div>
  );
});

export default Projects;
