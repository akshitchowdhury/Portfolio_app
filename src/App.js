import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Route as Routes, Routes as RouteSwitch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons'; // Adjust the icons as needed
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <Navbar bg="dark" variant="dark">
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/home" className="nav-icon" title="Home">
                <FontAwesomeIcon icon={faHome} />
                
              </Nav.Link>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Nav.Link as={Link} to="/about" className="nav-icon" title="About">
                <FontAwesomeIcon icon={faUser} />
                
              </Nav.Link>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Nav.Link as={Link} to="/skills" className="nav-icon" title="Skills">
                <FontAwesomeIcon icon={faCode} />
                
              </Nav.Link>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Nav.Link as={Link} to="/contact" className="nav-icon" title="Contact">
                <FontAwesomeIcon icon={faAddressBook} />
                
              </Nav.Link>
              
            </Nav>
          </Navbar>
        </div>

        <div className="main-content">
          <RouteSwitch>
          <Routes path="/home" element={<Home />} />
            <Routes path="/about" element={<About />} />
            <Routes path="/skills" element={<Skills />} />
            <Routes path="/" element={<Home />} />
            <Routes path="/contact" element={<Contact />} />
          </RouteSwitch>
        </div>
      </div>
    </Router>
  );
};

export default App;
