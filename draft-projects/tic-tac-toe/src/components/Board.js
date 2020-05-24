import React from 'react';
import './Board.css';

const BoardHouse = ({ children }) => {
  return <div className="board__house">{children}</div>
};

const BoardLine = ({ lineContent }) => {
  return (
    <div className="board__line">
      {
        lineContent.map((houseContent, index) => (
          <BoardHouse key={index}>
            <div>{houseContent}</div>
          </BoardHouse>
        ))
      }
    </div>
  );

};

const Board = ({ board }) => {
  console.log('board', board);
  
  return (
    <div className="board">
      {
        board.map((lineContent, index) => (
          <BoardLine key={index} lineContent={lineContent} />
        ))
      }
    </div>
  );
};

export default Board;