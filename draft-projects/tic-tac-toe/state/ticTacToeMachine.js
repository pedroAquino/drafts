const { Machine } = require('xstate');

const Board = () => {
  return [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
};

const initialState = Board();

const ticTacToeMachine =  Machine({});

module.exports = ticTacToeMachine;