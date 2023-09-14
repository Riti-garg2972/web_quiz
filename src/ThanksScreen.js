import React from 'react';
import './ThanksScreen.css';
import image from './tick.png';

const ThanksScreen = () => {
  return (
    <div className="thanks-container">
      <div className="box">
        <img src={image} alt="Thank You" className="image" />
        <div className="text">Thanks for Attempting the Quiz</div>
        <div className="button-container">
          <button onClick={() => window.location.href = '/'} className="button">Attempt Again</button>
          <button onClick={() => window.location.href = '/findDuplicates'} className="button">Next Stage</button>
        </div>
      </div>
    </div>
  );
};

export default ThanksScreen;
