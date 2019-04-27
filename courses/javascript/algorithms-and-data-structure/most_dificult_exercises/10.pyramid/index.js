// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const cols = n === 1 ? 1 : (n * 2) - 1;
    let spaces = Math.floor(cols / 2);
    let pounds = 1;

    for (let row=0; row<n; row++) {
      let stair = '';

      for (let col=0; col<cols; col++) {
        
        if (col < spaces || col > (spaces+pounds)-1) {
          stair+=' ';
        } else {
          stair+= '#';
        }
      }

      console.log(stair);
      spaces--;
      pounds+=2;

    }
}

module.exports = pyramid;
