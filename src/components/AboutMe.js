import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
      <div className='about'>
        <div className="about__bio-image">
          <div className="about__bio">
            <h1 className="text-secondary"><span>· </span><span>· </span><span>· </span><span>A</span><span>b</span><span>o</span><span>u</span><span>t </span><span>m</span><span>e</span><span>· </span><span>· </span><span>· </span></h1>
            <p>I'm a Master student majored in Computer Engineering. I'm a responsible, curious, and compassionate person. I love programming, painting and biking. Time to seek new challenges!</p>
          </div>
        </div>
  
        <div className="jobs">

        <div className="jobs__job">
            <h2 className="text-secondary">Skills:</h2>
            <ul>
              <li>
              Programming Languages: Python (Sklearn, Tensorflow, Crypto, Numpy, Matplotlib, Selenium, Beautiful Soup), Java, Ruby, HTML, CSS, JavaScript
              </li>
              <li>
              Databases: PostgreSQL, MySQL, Oracle, MongoDB
              </li>
              <li>
              Frameworks: Spring, Spring Boot, NodeJS, React, Django, Express, Ruby on Rails
              </li>
              <li>
              Tools: Git, AWS(S3, ElasticBeanstalk, Lambda), VMware, Heroku
              </li>
            </ul>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">2019-2021</h2>
            <h3>North Carolina State University, Raleigh, NC</h3>
            <h4>Master of Computer Networking</h4>
            <p><strong>Courses:</strong> Automated Learning and Data Analysis, Object-Oriented Design and Development, Software Engineering, Database Management Concepts and Systems, Computer and Network Security, Computer Networks, Internet Protocols, Internet of Things: Application & Implementation</p>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">2015 - 2019</h2>
            <h3>South China University of Technology, China</h3>
            <h4>Bachelor of Electrical Engineering</h4>
            <p></p>
          </div>
          
        </div>
  
      </div>
    );
  }
  export default AboutMe;