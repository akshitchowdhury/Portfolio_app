import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="main-content skills-page">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-icons">
        <FontAwesomeIcon icon={faHtml5} size="5x" className="icon" />
        <FontAwesomeIcon icon={faCss3} size="5x" className="icon" />
        <FontAwesomeIcon icon={faJs} size="5x" className="icon" />
        <FontAwesomeIcon icon={faReact} size="5x" className="icon" />
      </div>
    </div>
  );
};

export default Skills;
