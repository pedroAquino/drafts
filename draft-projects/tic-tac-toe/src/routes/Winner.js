import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './Winner.css';

const Winner = () => {
  const player = 'PLAYER 1';
  return (
    <div className="winner">
      <h1>We have a winner !</h1>
      <h2>Congrats {player}, you are the new champion</h2>
      <div className="tryagain-button ">
        <Link to="/home">
          <Button>TRY AGAIN </Button>
        </Link>
      </div>
    </div>
  );
};

export default Winner;