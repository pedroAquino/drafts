import React from 'react';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
