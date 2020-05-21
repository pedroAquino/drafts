const { Machine, assign } = require('xstate');

// helpers.js
const getCol = (matrix, col) => {
  let column = [];

  for (let line=0; line<board.length; line++) {
    column.push(matrix[line][col])
  }

  return column;
}

const getDiagonal = (matrix, side) => {
  let diagonal = [];
  
  if (side === 'left') {
    for (let line=0; line<matrix.length; line++) {
      diagonal.push(matrix[line][line]);
    }
  }

  if (side === 'right') {
    let col = 2;
    for (let line=0; line<matrix.length; line++) {
      diagonal.push(matrix[line][col]);
      col--;
    }
  }

  return diagonal;
};

// Board.js
const Board = () => {
  return [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
};

// Players.js
const PLAYER_1 = 'PLAYER_1';
const PLAYER_2 = 'PLAYER_2';

const getPlayerChar = player => ({
  PLAYER_1: 'X',
  PLAYER_2: 'O'
}[player]);

const togglePlayer = currentPlayer => {
  return currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1
};

// actions.js
const updateBoard = (board, player, coords ) => {
  if (!coords) return board;
  
  const playerChar = getPlayerChar(player);
  const [x, y] = coords;
  
  let newBoard = board;
  newBoard[x][y] = playerChar;
  
  return newBoard; 
};

// guards.js
const isValidCoords = (board, coords) => {
  if (!coords) return false
  const [x, y] = coords;
  const coordsContent = board[x][y];

  if (coordsContent) {
    return false;
  }

  return true;
};

const boardHasHorizontalLine = (board, player) => {
  const playerChar = getPlayerChar(player);
  const onlyPlayerChars = item => item === playerChar;
  
  const line1Completed = board[0].filter(onlyPlayerChars).length === 3;
  const line2Completed = board[1].filter(onlyPlayerChars).length === 3;
  const line3Completed = board[2].filter(onlyPlayerChars).length === 3;

  return line1Completed || line2Completed || line3Completed;
};

const boardHasVerticalLine = (board, player) => {
  const playerChar = getPlayerChar(player);
  const onlyPlayerChars = item => item === playerChar;

  const result = board
    .map((line, index) => getCol(board, index))
    .map(col => col.filter(onlyPlayerChars))
    .find(col => col.length === 3);

  return !!result;
};

const boardHasDiagonalLine = (board, player) => {
  const playerChar = getPlayerChar(player);
  const onlyPlayerChars = item => item === playerChar;

  const leftDiagonal = getDiagonal(board, 'left')
    .filter(onlyPlayerChars)
    .length === 3;

  const rightDiagonal = getDiagonal(board, 'right')
    .filter(onlyPlayerChars)
    .length === 3;

  return leftDiagonal || rightDiagonal;
};

const hasWinner = (board, player) => {
  return boardHasHorizontalLine(board, player) ||
    boardHasVerticalLine(board, player) ||
    boardHasDiagonalLine(board, player);
};

// tcTacToeMachine.js
const board = Board();

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
        PLAY: { target: 'playing', cond: 'isValidCoords' }
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
    hasWinner: ctx => hasWinner(ctx.board, ctx.currentPlayer),
    isValidCoords: (ctx, event) => isValidCoords(ctx.board, event.coords)
  }
});

module.exports = ticTacToeMachine