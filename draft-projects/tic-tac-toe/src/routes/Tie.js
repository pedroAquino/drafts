import React from 'react';
import './Tie.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Tie = () => {
  return (
    <div className="tie">
      <h1>Hey guys, this is a Tie</h1>
      <h2>No one winns at this time</h2>
      <div className="tryagain-button">
        <Link to="/home">
          <Button>TRY AGAIN</Button>
        </Link>
      </div>
    </div>
  );
};

export default Tie;