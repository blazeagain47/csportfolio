import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingAnimation = () => {
  return (
    <h2 style={{ color: '#7df9ff' }}>
      <Typewriter
        words={['Data Engineer', 'Frontend Developer', 'UI/UX Designer']}
        loop={Infinity}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>
  );
};

export default TypingAnimation;
