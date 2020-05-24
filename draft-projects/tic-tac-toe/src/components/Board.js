import React from 'react';
import './Board.css';

const BoardHouse = ({ children, lineIndex, houseIndex, onHouseClick }) => {
  const coords = [lineIndex, houseIndex];
  const onClick = () => onHouseClick(coords);
  return <div className="board__house" onClick={onClick}>{children}</div>;
};

const BoardLine = ({ lineContent, lineIndex, onHouseClick }) => {
  return (
    <div className="board__line">
      {
        lineContent.map((houseContent, index) => (
          <BoardHouse 
            key={index} 
            lineIndex={lineIndex} 
            houseIndex={index}
            onHouseClick={onHouseClick}
          >
            <div>{houseContent}</div>
          </BoardHouse>
        ))
      }
    </div>
  );

};

const Board = ({ board, onHouseClick }) => {  
  return (
    <div className="board">
      {
        board.map((lineContent, index) => (
          <BoardLine 
            key={index} 
            lineContent={lineContent}
            lineIndex={index}
            onHouseClick={onHouseClick}
          />
        ))
      }
    </div>
  );
};

export default Board;