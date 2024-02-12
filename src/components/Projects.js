import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Yelp Model</h3>
        <p> Developed a sentiment analysis model for Yelp reviews using PyTorch and Hugging Face Transformers library. Utilized bert transformer model for pre-training, tokenization, and sentiment classification. Interpreted model by visualizing positive sentiments with Word Clouds using Matplotlib Technologies..</p>
        <a href="https://github.com/islak/yelp-model" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
      <div className="project-item">
        <h3>Vigenere Cipher Cryptanalysis</h3>
        <p>A Python script is a cryptanalysis tool designed to aid in breaking XOR-based encryption. The script assumes that the text is encrypted using a repeating-key XOR cipher.</p>
        <a href="https://github.com/islak/vigenere-cipher" target="_blank" rel="noopener noreferrer">
        Source Code
        </a>
      </div>
      {/* Add more project items as needed */}
    </div>
  );
});

export default Projects;
