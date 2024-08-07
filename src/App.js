// App.js

import React, { useRef } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

import './App.css';

function App() {
  const aboutMeRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header
        scrollToAboutMe={scrollToAboutMe}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <div className="Landing">
        <div className="Landing-content">
          <h1>Hi, I'm Hersh!</h1>
          <p>I'm a dedicated Software Developer with a focus on backend development and data analysis.</p>
          <div className="social-buttons">
            <button className="github-button">
              <a href="https://github.com/islak" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
                
              </a>
            </button>
            <button className="linkedin-button">
              <a href="https://www.linkedin.com/in/hersh-kalsi-04ab3a21b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
                
              </a>
            </button>
            <button className="youtube-button">
            <a href="https://www.youtube.com/@codeHyena/videos" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
            </a>
          </button>
          </div>
        </div>
      </div>
      <AboutMe ref={aboutMeRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
