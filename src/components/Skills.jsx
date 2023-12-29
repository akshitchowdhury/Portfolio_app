import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="main-content">
      <h2>My Skills</h2>
      <div>
        <FontAwesomeIcon icon={faHtml5} size="4x" />
        <FontAwesomeIcon icon={faCss3} size="4x" />
        <FontAwesomeIcon icon={faJs} size="4x" />
        <FontAwesomeIcon icon={faReact} size="4x" />
      </div>
    </div>
  );


};

export default Skills;
