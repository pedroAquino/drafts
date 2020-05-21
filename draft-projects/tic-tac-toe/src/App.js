import React from 'react';
import './App.css';
import Home from './routes/Home';
import NewGame from './routes/NewGame';
import Tie from './routes/Tie';
import Winner from './routes/Winner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/newgame" component={NewGame} />
          <Route path="/tie" component={Tie} />
          <Route path="/winner" component={Winner} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
