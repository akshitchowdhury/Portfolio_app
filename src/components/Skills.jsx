import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faMusic, faFilm, faComments } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="main-content skills-page">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-icons">
        <FontAwesomeIcon icon={faHtml5} size="5x" className="icon" />
        <FontAwesomeIcon icon={faCss3} size="5x" className="icon" />
        <FontAwesomeIcon icon={faJs} size="5x" className="icon" />
        <FontAwesomeIcon icon={faReact} size="5x" className="icon" />
        
          <FontAwesomeIcon icon={faNode} size="5x" className="icon" />
        
      </div>

      <h2 className="projects-heading">My Projects</h2>
      <div className="projects">
        <a href="link-to-weather-app-repo" target="_blank" rel="noopener noreferrer" className="project-link">
          <FontAwesomeIcon icon={faCloud} size="3x" className="project-icon" />
          <span className="project-name">Weather App</span>
        </a>

        <a href="link-to-music-app-repo" target="_blank" rel="noopener noreferrer" className="project-link">
          <FontAwesomeIcon icon={faMusic} size="3x" className="project-icon" />
          <span className="project-name">Music App</span>
        </a>

        <a href="link-to-movies-website-repo" target="_blank" rel="noopener noreferrer" className="project-link">
          <FontAwesomeIcon icon={faFilm} size="3x" className="project-icon" />
          <span className="project-name">Movies Website</span>
        </a>

        <a href="link-to-chat-app-repo" target="_blank" rel="noopener noreferrer" className="project-link">
          <FontAwesomeIcon icon={faComments} size="3x" className="project-icon" />
          <span className="project-name">Chat App</span>
        </a>
      </div>
    </div>
  );
};

export default Skills;
