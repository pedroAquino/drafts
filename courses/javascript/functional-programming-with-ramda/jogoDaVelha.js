const R = require('ramda');
const readline = require('readline');

function Grid(rows, cols) {
  return new Array(rows).fill(
    new Array(cols).fill(null)
  );
}

const play = (board, {row, col}, piece) => {
  return R.pipe(
    R.adjust(row, R.update(col, piece))
  )(board);
};

const adjustAnswer = ansArray => R.pipe(
    R.split(','),
    R.adjust(0, row => ({ row: parseInt(row) })),
    R.adjust(1, col => ({ col: parseInt(col) })),
    R.reduce((acc, item) => Object.assign({}, acc, item) , {})
)(ansArray);

const getPlay = (answer, grid) => R.pipe(
    R.split(' '),
    R.adjust(0, adjustAnswer),
    R.prepend(grid)
)(answer);

const logTemplate = msg => `########## ${msg} ##########`;

(function() {

  const  board = Grid(3,3);
  
  console.log(logTemplate('Game Started'));
  console.log(board);

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  reader.question('Player 1, do your play: ', answer => {
    const userPlay = getPlay(answer, board);
    console.log(logTemplate('Play Made:'));
    console.log(play(...userPlay));
    //console.log(board2);
  });

})();