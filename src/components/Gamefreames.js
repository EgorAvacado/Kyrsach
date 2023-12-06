// GameFrame.js

import React from 'react';
import '../App.css';

const GameFrame = ({ imageUrl, altText }) => {
  return (
    <div className="game-frame">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default GameFrame;


