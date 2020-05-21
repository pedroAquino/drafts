import React from 'react';
import './App.css';
import Home from './routes/Home';
import NewGame from './routes/NewGame';
import Tie from './routes/Tie';
import Winner from './routes/Winner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './components/Title';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="main">
          <header className="header">
            <Title>Tic-tac-toe game</Title>
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/newgame" component={NewGame} />
              <Route path="/tie" component={Tie} />
              <Route path="/winner" component={Winner} />
            </Switch>
          </div>
        </div>
        <footer className="footer">
            Copiright &copy; Pedro Aquino
        </footer>
      </div>
    </Router>
  );
}

export default App;
