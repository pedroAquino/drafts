const { Machine, assign } = require('xstate');

const Board = () => {
  return [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
};

const getPlayerChar = player => ({
  PLAYER_1: 'X',
  PLAYER_2: 'O'
}[player]);

const togglePlayer = currentPlayer => {
  return currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1
};

const board = Board();
const PLAYER_1 = 'PLAYER_1';
const PLAYER_2 = 'PLAYER_2';

const updateBoard = (board, player, coords ) => {
  if (!coords) return board;
  
  const playerChar = getPlayerChar(player);
  const [x, y] = coords;
  
  let newBoard = board;
  newBoard[x][y] = playerChar;
  
  return newBoard; 
};

const boardHasHorizontalLine = (board, player) => {
  const playerChar = getPlayerChar(player);
  const onlyPlayerChars = item => item === playerChar;
  
  const line1Completed = board[0].filter(onlyPlayerChars).length === 3;
  const line2Completed = board[1].filter(onlyPlayerChars).length === 3;
  const line3Completed = board[2].filter(onlyPlayerChars).length === 3;

  return line1Completed || line2Completed || line3Completed;
};

const ticTacToeMachine =  Machine({
  id: 'ticTacToeMachine',
  initial: 'idle',
  context: {
    board: board,
    currentPlayer: null,
    winner: null
  },
  states: {
    idle: {
      entry: ['togglePlayer'],
      on: { 
        PLAY: 'playing'
      }
    },
    playing: {
      entry: ['play'],
      on: {
        '': [
          { target: 'done', cond: 'hasWinner' },
          { target: 'idle' }
        ]
      }
    },
    done: { 
      entry: ['setWinner'],
      type: 'final' 
    }
  }
}, {
  actions: {
    togglePlayer: assign({
      currentPlayer: ctx => togglePlayer(ctx.currentPlayer)
    }),
    play: assign({
      board: (ctx, event) => updateBoard(ctx.board, ctx.currentPlayer, event.coords)
    }),
    setWinner: assign({
      winner: ctx => ctx.currentPlayer
    })
  },
  guards: {
    hasWinner: ctx => boardHasHorizontalLine(ctx.board, ctx.currentPlayer)
  }
});

module.exports = ticTacToeMachine