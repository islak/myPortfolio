import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Yelp Model</h3>
        <p>A Yelp model project description.</p>
        <a href="https://github.com/islak/yelp-model" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
      <div className="project-item">
        <h3>Vigenere Cipher Cryptanalysis</h3>
        <p>A Vigenere Cipher cryptanalysis project description.</p>
        <a href="https://github.com/islak/vigenere-cipher" target="_blank" rel="noopener noreferrer">
        Source Code
        </a>
      </div>
      {/* Add more project items as needed */}
    </div>
  );
});

export default Projects;
