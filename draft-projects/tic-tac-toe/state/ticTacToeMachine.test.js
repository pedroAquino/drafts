const ticTacToeMachine = require('./ticTacToeMachine');
const { interpret } = require('xstate');

const serializeMatrix = (matrix) => {
  return matrix
    .map(arr => arr.join(''))
    .join('')
}

test('ticTacToaMachine should start in playing state', () => {
  const ticTacToeService = interpret(ticTacToeMachine).start();
  const initialState = ticTacToeService.send('FAKE_EVENT')
  expect(initialState.value).toBe('idle');
  ticTacToeService.stop();
});

test('ticTacToaMachine should transition to playing state with correct player', () => {
   const ticTacToeService = interpret(ticTacToeMachine).start();
  let nextState = ticTacToeService.send('PLAY');
  expect(nextState.value).toBe('idle');
  expect(nextState.context.currentPlayer).toBe('PLAYER_2');

  nextState = ticTacToeService.send('PLAY');
  expect(nextState.value).toBe('idle');
  expect(nextState.context.currentPlayer).toBe('PLAYER_1');
  ticTacToeService.stop();
});

test('ticTacToaMachine should change the board according the play', () => {
   const ticTacToeService = interpret(ticTacToeMachine).start();
  let nextState = ticTacToeService.send('PLAY', { coords: [1,1] });
  let expectedBoard = [
    ['', '', ''],
    ['', 'X', ''],
    ['', '', '']
  ];
  expect(serializeMatrix(nextState.context.board)).toBe(serializeMatrix(expectedBoard));

  expectedBoard = [
    ['', '', 'O'],
    ['', 'X', ''],
    ['', '', '']
  ];
  nextState = ticTacToeService.send('PLAY', { coords: [0,2] });
  expect(serializeMatrix(nextState.context.board)).toBe(serializeMatrix(expectedBoard));
  ticTacToeService.stop();
});

test('ticTacToaMachine should set a winner when a user marks a line', () => {
   const ticTacToeService = interpret(ticTacToeMachine).start();
  let nextState = null;
  // X
  nextState = ticTacToeService.send('PLAY', { coords: [0,0] });
  // O
  nextState = ticTacToeService.send('PLAY', { coords: [1,0] });
  // X
  nextState = ticTacToeService.send('PLAY', { coords: [0, 1] });
  // O
  nextState = ticTacToeService.send('PLAY', { coords: [1, 1] });
  // X (winnner)
  nextState = ticTacToeService.send('PLAY', { coords: [0, 2] });

  let expectedBoard = [
    ['X', 'X', 'X'],
    ['O', 'O', ''],
    ['', '', '']
  ];

  expect(serializeMatrix(nextState.context.board)).toBe(serializeMatrix(expectedBoard))
  expect(nextState.context.winner).toBe('PLAYER_1');
  ticTacToeService.stop();
});

test('ticTacToaMachine can`t let user play on a position already occupied on the board', () => {
  const ticTacToeService = interpret(ticTacToeMachine).start();
  let nextState = ticTacToeService.send('PLAY', { coords: [0,0] });
  nextState = ticTacToeService.send('PLAY', { coords: [0,0] });

  const expectedBoard = [
    ['X', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  expect(serializeMatrix(nextState.context.board)).toBe(serializeMatrix(expectedBoard));
  ticTacToeService.stop();
});