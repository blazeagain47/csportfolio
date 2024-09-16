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
          2nd year Computer Science major @ UC Riverside - blending technology with business insights to create innovative solutions.
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
