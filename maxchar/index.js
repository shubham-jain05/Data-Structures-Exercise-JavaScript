// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
maxChar('abcccccccd'); // === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0;

  // for word count function
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  // for word count function
  // const word1Map = word1.split('').reduce((char, val) => {
  //   char[val] = (char[val] || 0) + 1;
  //   return char;
  // }, {});

  // const values = Object.values(chars);
  // //console.log(values); // 👉️ [10, 20, 5, 15]

  // const max = Math.max(...values);
  // //console.log(max); // 👉️ 20

  let maxChars = '';
  for (let t in chars) {
    if (chars[t] > max) {
      max = chars[t];
      maxChars = t;
    }
    // if (chars[t] == max) {
    //   maxChars = t;
    // }
  }
  // const min = Math.min(...values);
  // console.log(min);
  //console.log('chars ', maxChars);
  return maxChars;
}

module.exports = maxChar;
