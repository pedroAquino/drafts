const ticTacToeMachine = require('./ticTacToeMachine');
const { interpret } = require('xstate');

const ticTacToeService = interpret(ticTacToeMachine)
  .onTransition(state => console.log('STATE', state.value))
  .start();

test('ticTacToaMachine should start in playing state', () => {
  const initialState = ticTacToeService.send('FAKE_EVENT')
  expect(initialState.value).toBe('playing');
});

test('ticTacToaMachine should transition to playing state with correct player', () => {
  let nextState = ticTacToeService.send('PLAY');
  expect(nextState.value).toBe('playing');
  expect(nextState.context.currentPlayer).toBe('PLAYER_2');

  nextState = ticTacToeService.send('PLAY');
  expect(nextState.value).toBe('playing');
  expect(nextState.context.currentPlayer).toBe('PLAYER_1');
});

test('ticTacToaMachine should change the board according the play', () => {
  let nextState = ticTacToeService.send('PLAY', { coords: [1,1] });
  let expectedBoard = [
    ['', '', ''],
    ['', 'X', ''],
    ['', '', '']
  ];
  expect(nextState.context.board).toBe(expectedBoard);

  // expectedBoard = [
  //   ['', '', 'O'],
  //   ['', 'X', ''],
  //   ['', '', '']
  // ];
  // nextState = ticTacToeService.send('PLAY', { coords: [0,2] });
  // expect(nextState.context.board).toBe(expectedBoard);
})