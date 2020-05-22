import React from 'react';
import './Board.css';

const BoardHouse = ({ children }) => {
  return <div className="board__house">{children}</div>
};

const BoardLine = () => {
  return (
    <div className="board__line">
      <BoardHouse><div>{"X"}</div></BoardHouse>
      <BoardHouse><div>{"O"}</div></BoardHouse>
      <BoardHouse>{" "}</BoardHouse>
    </div>
  );
};

const Board = () => {
  return (
    <div className="board">
      <BoardLine />
      <BoardLine />
      <BoardLine />
    </div>
  );
};

export default Board;