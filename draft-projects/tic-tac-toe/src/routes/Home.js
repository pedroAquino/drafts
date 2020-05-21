import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import './Home.css';

const Home = () => {
  return (
    <React.Fragment>
      <div className="main">
        <header className="header">
          <Title>Tic-tac-toe game</Title>
        </header>
        <div className="content">
          <div className="button-container">
            <Button>NEW GAME</Button>
          </div>
        </div> 
      </div>
      <footer className="footer">
          Copiright &copy; Pedro Aquino
      </footer>
    </React.Fragment>
  );
};

export default Home;