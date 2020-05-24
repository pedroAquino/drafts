import React from 'react';
import { useMachine } from '@xstate/react';
import ticTacToeMachine from '../state/ticTacToeMachine';
import Board from '../components/Board';
import './NewGame.css';
import { Redirect } from 'react-router';

const NewGame = () => {
  const [state, send] = useMachine(ticTacToeMachine);
  const { board } = state.context;
  const onHouseClick = coords => send({ type: 'PLAY', coords: coords });

  if (state.value === 'done') {
    return <Redirect to="/winner" />;
  }

  if (state.value === 'tie') {
    return <Redirect to="/tie" />
  }
  
  return (
    <div className="new-game">
      <div className="new-game__board">
        <Board 
          board={board} 
          onHouseClick={onHouseClick} 
        />
      </div>
    </div>
  );
};

export default NewGame;