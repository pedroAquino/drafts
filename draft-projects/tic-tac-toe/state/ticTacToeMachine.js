const { Machine, assign } = require('xstate');

const Board = () => {
  return [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
};

const board = Board();

const updateBoard = (board, player, coords ) => {
  if (!coords) return board;
  
  const playerChar = player === 'PLAYER_1' ? 'X' : 'O';
  const [x, y] = coords;
  
  let newBoard = board;
  newBoard[x][y] = playerChar;
  
  console.log('NEWBOARD', newBoard);
  return newBoard; 
};

const ticTacToeMachine =  Machine({
  id: 'ticTacToeMachine',
  initial: 'playing',
  context: {
    board: board,
    currentPlayer: 'PLAYER_1'
  },
  states: {
    playing: {
      on: { 
        PLAY: { target: 'playing', actions: ['play', 'togglePlayer'] }
      }
    },
    done: { type: 'final' }
  }
}, {
  actions: {
    togglePlayer: assign({
      currentPlayer: ctx => ctx.currentPlayer === 'PLAYER_1' ? 'PLAYER_2' : 'PLAYER_1'
    }),
    play: assign({
      board: (ctx, event) => {
        return updateBoard(ctx.board, ctx.currentPlayer, event.coords)
      }
    })
  }
});

module.exports = ticTacToeMachine;