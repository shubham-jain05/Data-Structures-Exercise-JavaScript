// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//vowels2('Hi There!'); //--> 3
console.log(vowels('Why do you ask?')); //--> 4
//   vowels('Why?') --> 0

function vowels2(str) {
  let vovel = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vovel.includes(str[i]?.toLowerCase())) {
      count++;
    }
  }
  console.log(count);
  return count;
}

function vowels(str) {
  const matchs = str.match(/[aeiou]/gi);
  return matchs ? matchs.length : 0;
}

module.exports = vowels;
