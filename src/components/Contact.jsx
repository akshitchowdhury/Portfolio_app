import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import MapLeaflet from './MapLeaflet';
import './Contact.css'; // Import the updated Contact styling

const Contact = () => {
  return (
    <div className="main-content">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <Link to="https://www.linkedin.com/in/pratikshit-chowdhury-8a3411162" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x" className="contact-icon" id="linkedin"/>
        </Link>
        <Link to="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" id="email"/>
        </Link>
        <Link to="https://github.com/akshitchowdhury" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" className="contact-icon" id="github"/>
        </Link>
      </div>
      <MapLeaflet />
    </div>
  );
};

export default Contact;
