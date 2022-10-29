// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
console.log(palindrome1('abba')); //=== true
console.log(palindrome1('abcdefg')); //=== false

// function palindrome(str) {
//   const revStr = str?.split('').reverse().join('');
//   return str === revStr;
// }

function palindrome1(str) {
  return str?.split('').every((val, i) => {
    return val === str[str.length - i - 1];
  });
}

module.exports = palindrome1;
