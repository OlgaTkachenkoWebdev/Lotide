//counts how many letters in the string

let countLetters = function(string) {
  let countLetters = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (countLetters[letter]) {
        countLetters[letter] += 1;
      } else {
        countLetters[letter] = 1;
      }
    }
  }
  return countLetters;
};

console.log(countLetters("lighthouse in the house"));
