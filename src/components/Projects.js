import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Yelp Model</h3>
        <p>
          Developed a sentiment analysis model for Yelp reviews using PyTorch and the Hugging Face Transformers library. Utilized the BERT transformer model for pre-training, tokenization, and sentiment classification. Visualized positive sentiments with Word Clouds using Matplotlib.
        </p>
        <a href="https://github.com/islak/yelp-model" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
      <div className="project-item">
        <h3>Vigenere Cipher Cryptanalysis</h3>
        <p>
          Created a Python script for cryptanalysis of XOR-based encryption. Designed to break repeating-key XOR ciphers.
        </p>
        <a href="https://github.com/islak/vigenere-cipher" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
      <div className="project-item">
        <h3>Pet Shelter Scraping</h3>
        <p>
          Developed a python script using selenium to scrape data from shelter websites to analyze pet populations.
        </p>
        <a href="https://github.com/islak/pet-shelter-scraping" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
      {/* Add more project items as needed */}
    </div>
  );
});

export default Projects;
