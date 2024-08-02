// AboutMe.js

import React from 'react';

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-me">
      <h2>About Me</h2>
      <p>
        Hi, I'm Hersh, currently working as an Engineer at NASA's Johnson Space Center. I hold a B.S. in Computer Science from the University of California, Santa Cruz.
      </p>
      <p>
        At NASA, I work with data interfaces between systems and vehicles like the International Space Station and Lunar Gateway. My role involves handling large datasets, enforcing data interface requirements, developing integration and test processes, and coordinating with various Flight Control groups to ensure mission success.
      </p>
      <p>
        My interest in programming started with a passion for building things from the ground up. I've gained expertise in technologies such as C/C++, Python, Java, JavaScript, React, Node.js, PostgreSQL, and more.
      </p>
      <p>
        I love tackling complex problems and am always eager to expand my skill set. Outside of work, I enjoy staying up to date the latest tech trends, building passion projects and spending time outdoors.
      </p>
      <p>
        Also, check out my YouTube channel <a href="https://www.youtube.com/@codeHyena/videos" target="_blank" rel="noopener noreferrer">codeHyena</a>, where I regularly upload videos solving problems in Python!
      </p>
    </div>
  );
});


export default AboutMe;
