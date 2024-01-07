// Home.js
import React, { useEffect, useState } from 'react';

import logoImage from './images/oni_profile.avif'; // Replace with the actual path to your logo image
import './Home.css'
import HomeText from './HomeText';



const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Trigger the text to appear after a delay
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="main-content">
      <div className={`home-container ${showText ? 'show-text' : ''}`}>
        {/* <HomeText /> */}
        
    <HomeText/>
        
        <div className="image-container">
          <img src={logoImage} alt="My Logo" className="logo-image" />
        </div>
      </div>
      {/* Add other content */}
    </div>
  );
};

export default Home;
