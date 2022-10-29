// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
anagrams1('rail safety', 'fairy tales'); // --> True
anagrams1('RAIL! SAFETY!', 'fairy tales'); //--> True
anagrams1('Hi there', 'Bye there'); // --> False

function anagrams1(stringA, stringB) {
  const flag = cleanString(stringA) == cleanString(stringB);
  console.log(flag);
  return flag;
}

function cleanString(string) {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  const word1 = charMap(stringA);
  const word2 = charMap(stringB);

  let flag = true;
  if (Object.keys(word1).length != Object.keys(word2).length) {
    flag = false;
  }

  for (let char in word1) {
    if (word1[char] != word2[char]) {
      flag = false;
    }
  }

  console.log(flag);
  return flag;
}

function charMap(word) {
  const word1 = word.replace(/[^\w]/g, '').toLowerCase();
  const word1Map = word1.split('').reduce((char, val) => {
    char[val] = char[val] + 1 || 1;
    return char;
  }, {});
  return word1Map;
}

module.exports = anagrams;
