import Board from './Board';
import actions from './actions';
import guards from './guards';

const board = Board();

export default Machine({
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
          { target: 'tie', cond: 'boardIsComplete' },
          { target: 'idle' }
        ]
      }
    },
    done: { 
      entry: ['setWinner'],
      type: 'final' 
    },
    tie: {
      type: 'final'
    }
  }
}, {
  actions: { 
    ...actions 
  },
  guards: {
    ...guards
  }
});