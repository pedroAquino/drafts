import { getPlayerChar } from './Player';
import { getDiagonal, getCol } from './helpers';

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

const isValidCoords = (board, coords) => {
  if (!coords) return false
  const [x, y] = coords;
  const coordsContent = board[x][y];

  if (coordsContent) {
    return false;
  }

  return true;
};

const boardIsComplete = board => {
  const isEmpty = content => content === '';

  const line1IsComplete = board[0].filter(isEmpty).length === 0;
  const line2IsComplete = board[1].filter(isEmpty).length === 0;
  const line3IsComplete = board[2].filter(isEmpty).length === 0;

  return line1IsComplete && line2IsComplete && line3IsComplete;
};

export default {
  hasWinner: ctx => hasWinner(ctx.board, ctx.currentPlayer),
  isValidCoords: (ctx, event) => isValidCoords(ctx.board, event.coords),
  boardIsComplete: ctx => boardIsComplete(ctx.board)
};