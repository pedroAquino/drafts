// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
    let counter = 1;
    while (counter <= n) {
        let str = '';
        for (let i = 1; i<=n; i++) {
            if (i <= counter)
                str+='#';
            else
                str+=' ';
        }
        console.log(str);
        counter++;
    }
}

module.exports = steps;
