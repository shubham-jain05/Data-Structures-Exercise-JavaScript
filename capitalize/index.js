// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
capitalize1('a short sentence'); // --> 'A Short Sentence'
capitalize2('a lazy fox'); //--> 'A Lazy Fox'
capitalize('look, it is working!'); //--> 'Look, It Is Working!'

function capitalize1(str) {
  const arr = str.split(' ');
  let words = [];
  for (let char of arr) {
    words.push(char[0].toUpperCase() + char.slice(1));
  }
  console.log(words.join(' '));
  return words.join(' ');
}

function capitalize2(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == ' ') {
      result += str[i]?.toUpperCase();
    } else {
      result += str[i];
    }
  }

  console.log(result);

  return result;
}

function capitalize3(str) {
  const arr = str.split(' ');
  let words = [];
  for (let char of arr) {
    words.push(char[0].toUpperCase() + char.slice(1));
  }
  console.log(words.join(' '));
  return words.join(' ');
}

function capitalize(str) {
  const arr = str.split(' ');
  let i = 0;
  for (let char of arr) {
    let s = char.split('');
    let x = s[0].toUpperCase();
    s[0] = x;
    char = s.join('');
    arr[i] = char;
    i++;
  }
  console.log(arr.join(' '));
  return arr.join(' ');
}

module.exports = capitalize;
