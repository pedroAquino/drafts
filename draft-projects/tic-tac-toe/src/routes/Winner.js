import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { getPlayerName } from '../state/Player';
import './Winner.css';

const Winner = ({ location }) => {
  const playerName = getPlayerName(location.state.winner);
  return (
    <div className="winner">
      <h1>We have a winner !</h1>
      <h2>Congrats {playerName}, you are the new champion</h2>
      <div className="tryagain-button ">
        <Link to="/newgame">
          <Button>TRY AGAIN </Button>
        </Link>
      </div>
    </div>
  );
};

export default Winner;