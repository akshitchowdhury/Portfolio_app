import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faMusic, faFilm, faComments } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  const [musicAppHovered, setMusicAppHovered] = useState(false);
  const [weatherAppHovered, setWeatherAppHovered] = useState(false);
  const [movieAppHovered, setMovieAppHovered] = useState(false);
  const [chatAppHovered, setChatAppHovered] = useState(false);


  const handleChatAppHover = ()=>{
    setChatAppHovered(true);
  } 

  const handleChatAppLeave = ()=>{
    setChatAppHovered(false);
  } 


  const handleMoviesWebsiteHover = () => {
    setMovieAppHovered(true);
   
  };

  const handleMoviesWebsiteLeave = () => {
    setMovieAppHovered(false);
  };
  const handleMusicAppHover = () => {
    setMusicAppHovered(true);
    setWeatherAppHovered(false); // Reset the other state
  };

  const handleMusicAppLeave = () => {
    setMusicAppHovered(false);
  };

  const handleWeatherAppHover = () => {
    setWeatherAppHovered(true);
    setMusicAppHovered(false); // Reset the other state
  };

  const handleWeatherAppLeave = () => {
    setWeatherAppHovered(false);
  };

  

  return (
    <div className="main-content skills-page">
      
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects">
        <div
          className="project-link"
          onMouseEnter={handleWeatherAppHover}
          onMouseLeave={handleWeatherAppLeave}
        >
          <FontAwesomeIcon icon={faCloud} size="3x" className="project-icon" />
          <span className="project-name">Weather App</span>
        </div>

        <div
          className="project-link"
          onMouseEnter={handleMusicAppHover}
          onMouseLeave={handleMusicAppLeave}
        >
          <FontAwesomeIcon icon={faMusic} size="3x" className="project-icon" />
          <span className="project-name">Music App</span>
        </div>

        <div
          className="project-link"
          onMouseEnter={handleMoviesWebsiteHover}
          onMouseLeave={handleMoviesWebsiteLeave}
        >
          <FontAwesomeIcon icon={faFilm} size="3x" className="project-icon" />
          <span className="project-name">Movies Website</span>
        </div>

        <div
          className="project-link"
          onMouseEnter={handleChatAppHover}
          onMouseLeave={handleChatAppLeave}
        >
          <FontAwesomeIcon icon={faComments} size="3x" className="project-icon" />
          <span className="project-name">Chat App</span>
        </div>
      </div>

      <h2 className="skills-heading">Skill Set</h2>
      <div className="skills-icons">
        <FontAwesomeIcon icon={faHtml5} size="5x" className={`icon ${chatAppHovered|| musicAppHovered || weatherAppHovered || movieAppHovered? 'spin' : ''}`} />
        <FontAwesomeIcon icon={faCss3} size="5x" className={`icon ${chatAppHovered||musicAppHovered || weatherAppHovered|| movieAppHovered ? 'spin' : ''}`} />
        <FontAwesomeIcon icon={faJs} size="5x" className={`icon ${chatAppHovered||musicAppHovered || weatherAppHovered || movieAppHovered? 'spin' : ''}`} />
        <FontAwesomeIcon icon={faReact} size="5x" className={`icon ${movieAppHovered ? 'spin' : ''}`} />
        <FontAwesomeIcon icon={faNode} size="5x" className={`icon ${chatAppHovered||weatherAppHovered || movieAppHovered? 'spin' : ''}`} />
      </div>

    </div>
  );
};

export default Skills;