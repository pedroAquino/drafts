import React from 'react';
import { useMachine } from '@xstate/react';
import ticTacToeMachine from '../state/ticTacToeMachine';
import Board from '../components/Board';
import './NewGame.css';

const NewGame = () => {
  const [current, send] = useMachine(ticTacToeMachine);
  const { board } = current.context;
  const onHouseClick = coords => send({ type: 'PLAY', coords: coords });
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