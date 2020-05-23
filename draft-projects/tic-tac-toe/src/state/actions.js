import { PLAYER_1, PLAYER_2, getPlayerChar } from './Player';
import { assign } from 'xstate';

const togglePlayer = currentPlayer => {
  return currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1
};

const updateBoard = (board, player, coords ) => {
  if (!coords) return board;
  
  const playerChar = getPlayerChar(player);
  const [x, y] = coords;
  
  let newBoard = board;
  newBoard[x][y] = playerChar;
  
  return newBoard; 
};

export default {
  togglePlayer: assign({
    currentPlayer: ctx => togglePlayer(ctx.currentPlayer)
  }),
  play: assign({
    board: (ctx, event) => updateBoard(ctx.board, ctx.currentPlayer, event.coords)
  }),
  setWinner: assign({
    winner: ctx => ctx.currentPlayer
  })
};