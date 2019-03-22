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


function steps(n, row=0, stair='') {
    if (row === n) {
        return;
    }

    if (row <= stair.length) {
        stair+='#';
    } else {
        stair+=' ';
    }

    if (stair.length === n) {
        console.log(stair);
        steps(
            n,
            row+1,
            stair
        );
    }
}

function solution1(n) {
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
