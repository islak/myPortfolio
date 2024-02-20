// AboutMe.js

import React from 'react';

const AboutMe = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} className="about-me">
      <h2>About Me</h2>
      <p>
        Hello! I'm Hersh, a passionate software developer based in Oregon. I hold a B.S. in Computer Science from the University of California, Santa Cruz.
      </p>
      <p>
        My journey in the world of programming started with a fascination for creating things from scratch. Over the years, I've gained expertise in various technologies, including C/C++, Python, Java, JavaScript, React, Node.js, PostgreSQL and more.
      </p>
      <p>
        I thrive on turning complex problems into elegant solutions, and I'm always eager to learn new technologies and expand my skill set.
      </p>
      <p>
        Outside of coding, you'll find me exploring the latest tech trends, reading, and occasionally exploring open-source projects.
      </p>
      <p>
        Also, don't forget to check out my YouTube channel <a href="https://www.youtube.com/@codeHyena/videos" target="_blank">codeHyena</a>, where I upload daily videos solving problems in Python!
    </p>
      </div>
    );
  });

export default AboutMe;
