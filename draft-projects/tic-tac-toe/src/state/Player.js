export const PLAYER_1 = 'PLAYER_1';
export const PLAYER_2 = 'PLAYER_2';

export const getPlayerChar = player => ({
  PLAYER_1: 'X',
  PLAYER_2: 'O'
}[player]);

export const getPlayerName = player => ({
  PLAYER_1: 'PLAYER 1',
  PLAYER_2: 'PLAYER 2'
}[player]);