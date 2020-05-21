import React from 'react';
import './App.css';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Title>TIC TAC TOE GAME</Title>
      </header>
      <div className="content">
        <div className="button-container">
          <Button>NEW GAME</Button>
        </div>
      </div>
      <footer className="footer">
        Copiright &copy; Pedro Aquino
      </footer>
    </div>
  );
}

export default App;
