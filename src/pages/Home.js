import React from 'react';
import TypingAnimation from '../components/TypingAnimation';
import '../styles/styles.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="header-title">Hi, I am Sathya</h1>
        <h2 className="header-subtitle">
          <TypingAnimation />
        </h2>
        <p className="header-description">
          I am a 2nd year Computer Science with Business Applications major at the University of California, Riverside.
        </p>
      <div className="social-icons">
        <a href="#" className="social-icon"><FaInstagram /></a>
        <a href="#" className="social-icon"><FaGithub /></a>
        <a href="#" className="social-icon"><FaLinkedin /></a>
      </div>
        <button className="resume-button">Resume</button>
      </header>
      <div className="background-image"></div>
    </div>
  );
};

export default Home;
