// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to FitFlex</h1>
        <p>Your personal fitness companion for a healthier, fitter lifestyle.</p>
        <Link to="/workout-tracker" className="cta-button">Get Started</Link>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <h3>Workout Tracker</h3>
          <p>Track your workouts and stay motivated. Customize your fitness routine and log your progress.</p>
        </div>
        <div className="feature">
          <h3>Diet Plan</h3>
          <p>Get personalized meal plans tailored to your fitness goals. Maintain a balanced diet while achieving your targets.</p>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories">
          <div className="story">
            <p>"FitFlex transformed my fitness routine. I've lost 10kg in 3 months thanks to the easy-to-follow workouts and meal plans!"</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="story">
            <p>"Thanks to FitFlex, I now track my workouts and eat right. I feel stronger and more energized than ever!"</p>
            <h4>- John D.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

