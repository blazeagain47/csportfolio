import React from 'react';
import TypingAnimation from '../components/TypingAnimation';
import { motion } from 'framer-motion';
import '../styles/styles.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${require('../assets/gradient.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
        </ul>
      </nav>

      <header className="header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header-content"
        >
          <h1 className="header-title">Hi, I am Sathya!</h1>
          <h2 className="header-subtitle">
            <TypingAnimation />
          </h2>
          <p className="header-description">
            Undergraduate Computer Science w/Business Applications @ 
            <span className="glowing-text-container">
              <span className="glowing-text"> UC Riverside</span>
              <img src={require('../assets/animatedUFO.gif')} className="ufo-icon" alt="Animated UFO" />
            </span>
          </p>
          <p className="header-description-sub">
            Blending technology with business insights to create innovative solutions.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </motion.div>
      </header>
    </div>
  );
};

export default Home;
