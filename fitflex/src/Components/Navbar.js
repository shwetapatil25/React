// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* FitFlex Logo and Icon */}
      <div className="logo">
        <i className="fa fa-heartbeat logo-icon" aria-hidden="true"></i>
        <h1 className="logo-text">FitFlex</h1>
      </div>
      
      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/workout-tracker" className="nav-link">
          <i className="fa fa-fitness_center" style={{ fontSize: '1.8rem' }} aria-hidden="true"></i> Workout Tracker
        </Link>
        <Link to="/diet-plan" className="nav-link">
          <i className="fa fa-cutlery"></i> Diet Plan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
