import React from 'react';
import Button from '../components/Button';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <div className="button-container">
        <Link to="/newgame">
          <Button>NEW GAME</Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;