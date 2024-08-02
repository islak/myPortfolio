// Header.js

import React from 'react';

function Header({ scrollToAboutMe, scrollToProjects, scrollToContact }) {
  return (
    <header className="header">
      <div className="logo">Hersh Kalsi</div>
      <nav>
        <ul>
          <li><button className="nav-button" onClick={scrollToAboutMe}>About Me</button></li>
          <li><button className="nav-button" onClick={scrollToProjects}>Projects</button></li>
          <li><button className="nav-button" onClick={scrollToContact}>Contact</button></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
