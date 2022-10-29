// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//steps(2);
//       '# '
//       '##'
//steps1(3);
//       '#  '
//       '## '
//       '###'
steps3(4);
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps3(n, row = 0, str = '') {
  if (n === row) {
    return;
  }

  if (n === str.length) {
    console.log(str);
    return steps3(n, row + 1);
  }

  // if (str.length <= row) {
  //   str += '#';
  // } else {
  //   str += ' ';
  // }
  const add = str.length <= row ? '#' : ' ';

  steps3(n, row, str + add);
}

function steps(n) {
  for (let row = 1; row <= n; row++) {
    let str = '';
    for (let col = 1; col <= row; col++) {
      str += '#';
    }
    console.log(str);
  }
}

function steps1(n) {
  for (let row = 0; row < n; row++) {
    let str = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}

module.exports = steps;
