import React from 'react';
import Board from '../components/Board';
import './NewGame.css';

const NewGame = () => {
  return (
    <div className="new-game">
      <div className="new-game__board">
        <Board />
      </div>
    </div>
  );
};

export default NewGame;