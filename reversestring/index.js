// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
console.log(reverse2('apple') === 'leppa');
console.log(reverse2('hello') === 'olleh');
console.log(reverse2('Greetings!') === '!sgniteerG');

function reverse(str) {
  const revStr = str?.split('')?.reverse()?.join('');
  return revStr;
}

function reverse1(str) {
  const revStr = '';
  for (let char of str) {
    revStr = char + str;
  }

  return revStr;
}

function reverse2(str) {
  return str?.split('')?.reduce((reverse, char) => {
    return char + reverse;
  }, '');
}

module.exports = reverse2;
